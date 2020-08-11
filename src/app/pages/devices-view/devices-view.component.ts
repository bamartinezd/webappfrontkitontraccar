import { Component, OnInit } from '@angular/core';
import { DeviceService } from "../../services/device.service";
import { Device } from "../../models/device.model";
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.scss']
})
export class DevicesViewComponent implements OnInit {

  public deviceItems: Device[]=[];
  public isLoading = true;
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.InitializeData();
  }

  private InitializeData() {
    this.getDevices();
  }

  private getDevices():void {
    this.deviceService.getDevices()
    .pipe(finalize(()=>{
      this.isLoading = false;
    }))
    .subscribe((result) => {
      this.deviceItems = result 
    }, error => {
      console.log(error);
    });
  }

}
