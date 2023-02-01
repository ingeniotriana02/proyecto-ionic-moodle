import { Component} from '@angular/core';
import { GetJSONService } from '../servicio/get-json.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public paginas : any[];

  constructor(private servicioPaginas:GetJSONService) {}

  ngOnInit(){
    this.paginas = this.servicioPaginas.getPaginas();
  }

}
