import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  public user$:Observable<Usuario>;

  constructor(private afAuth:AngularFireAuth, private afs:AngularFirestore) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if(user){
          return this.afs.doc<Usuario>(`usuarios/${user.uid}`).valueChanges();
        }
        return of(null)
      })
    )
  }

  async register(email:string, password:string): Promise<Usuario>{
    try{
      const {user} = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.enviarVerificacionEmail();
      return user;
    }catch(error){console.log(error); return null}
  }

  async login(email:string, password:string): Promise<Usuario>{
    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(email, password);
      await this.updateUserData(user);
      return user;
    }catch(error){console.log(error); return null}
  }

  async enviarVerificacionEmail(): Promise<void>{
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
      
    }catch(error){console.log(error)}
  }

  public isEmailVerificado(user:Usuario):boolean{
    return user.emailVerified === true ? true : false;
  }

  private updateUserData(usuario:Usuario){
    const usuarioRef:AngularFirestoreDocument<Usuario> = this.afs.doc(`usuarios/${usuario.uid}`);

    const data:Usuario = {
      uid:usuario.uid,
      email:usuario.email,
      emailVerified:usuario.emailVerified,
      displayName:usuario.displayName
    };

    return usuarioRef.set(data, {merge:true});
  }

}
