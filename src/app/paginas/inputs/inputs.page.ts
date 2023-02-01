import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `Puedes usar ${maxLength - inputLength} caracteres más`;
  }

  constructor() { }

  ngOnInit() {
  }

}
