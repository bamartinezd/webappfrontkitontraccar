import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/models/device.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private imgDefault = '../../../assets/carDefault.png';

  @Input() device:Device;

  constructor() { }

  ngOnInit(): void {
    this.InitializeData();
  }

  private InitializeData() {
    this.validateDeviceModel();
  }

  private validateDeviceModel() {

    if (!this.device.photo) {
      this.device.photo = this.imgDefault;  
    }else{
      this.device.photo = `data:image/jpg;base64,${this.device.photo}`;
    }
  }
}
