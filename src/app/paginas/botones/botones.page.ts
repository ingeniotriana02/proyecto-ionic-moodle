import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {

  public valor:number = 0

  constructor() { }

  ngOnInit() {
  }


  sumar(){    
    this.valor += 1;
    document.getElementById('valor').innerHTML = this.valor.toString();
  }

  restar(){
    this.valor -= 1;
    document.getElementById('valor').innerHTML = this.valor.toString();
  }

}
