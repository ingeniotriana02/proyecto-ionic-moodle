import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentActionSheet(){

    const actionSheet = await this.actionSheetCtrl.create({
      subHeader: 'esto es otro texto',
      animated:true,
      backdropDismiss:false,
      header: 'Ejemplo',
      cssClass: 'clase-custom',
      buttons: [
        {
          text: 'Aceptar',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      subHeader: 'Mensaje importante',
      message: 'Esto es una alerta',
      buttons: ['OK'],
    });

    await alert.present();
  }

  mensaje = '';
  async AlertBotones(){
    const alert = await this.alertController.create({
      header: 'Alerta!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.mensaje = 'Alerta cancelada';
          },
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            this.mensaje = 'Alerta confirmada';
          },
        },
      ],
    });

    await alert.present();
  }

  async AlertEleccion(){
    const alert = await this.alertController.create({
      header: 'Selecciona tu color favorito',
      buttons: ['OK'],
      inputs: [
        {
          label: 'Rojo',
          type: 'radio',
          value: 'Rojo',
        },
        {
          label: 'Azul',
          type: 'radio',
          value: 'Azul',
        },
        {
          label: 'Verde',
          type: 'radio',
          value: 'Verde',
        },
      ],
    });

    await alert.present();

  }

  async AlertInputs(){
    const alert = await this.alertController.create({
      header: 'Porfavor, denos su información',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nombre',
        },
        {
          placeholder: 'Apodo (max 8 letras)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Cuentanos sobre ti',
        },
      ],
    });

    await alert.present();
  }

  async AlertCSS(){
    const alert = await this.alertController.create({
      header: 'Seguro?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Si',
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();

  }

  @ViewChild(IonModal) modal: IonModal;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }
}
