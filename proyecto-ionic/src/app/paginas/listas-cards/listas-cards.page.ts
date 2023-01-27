import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas-cards',
  templateUrl: './listas-cards.page.html',
  styleUrls: ['./listas-cards.page.scss'],
})
export class ListasCardsPage implements OnInit {

  public usuarios:any[] = [
    {
      nombre:"Hugo",
      icono:"person",
      ciudad:"Sevilla",
      perfil:"../../../assets/icon/imagen1.jpg"
    },
    {
      nombre:"Luis",
      icono:"people",
      ciudad:"Madrid",
      perfil:"../../../assets/icon/imagen2.jpg"
    },
    {
      nombre:"Patricia",
      icono:"person-circle",
      ciudad:"Zaragoza",
      perfil:"../../../assets/icon/imagen3.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
