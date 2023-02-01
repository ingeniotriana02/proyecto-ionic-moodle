import { Injectable } from '@angular/core';

import pagina from '../../assets/data/paginas.json';

@Injectable({
  providedIn: 'root'
})
export class GetJSONService {

  constructor() { }

  getPaginas(){
    return pagina;
  }
}
