import { Component, OnInit } from '@angular/core';
import { GetJSONService } from '../../servicio/get-json.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuType: string = 'push';

  public paginas : any[];

  constructor(private servicioPaginas:GetJSONService) {}

  ngOnInit(){
    this.paginas = this.servicioPaginas.getPaginas();
  }

}
