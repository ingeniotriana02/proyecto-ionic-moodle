import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-avanzados',
  templateUrl: './avanzados.page.html',
  styleUrls: ['./avanzados.page.scss'],
})
export class AvanzadosPage {//implements OnInit {

  constructor(private pickerCtrl: PickerController) { }
  async openPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'languages',
          options: [
            {
              text: 'JavaScript',
              value: 'javascript',
            },
            {
              text: 'TypeScript',
              value: 'typescript',
            },
            {
              text: 'Rust',
              value: 'rust',
            },
            {
              text: 'C#',
              value: 'c#',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            window.alert(`You selected: ${value.languages.value}`);
          },
        },
      ],
    });

    await picker.present();

  //ngOnInit() {
  }

}
