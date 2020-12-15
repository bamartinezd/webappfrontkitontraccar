import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { Device } from "../models/device.model";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private API = "/devices";
  private URL_BASE = `${environment.url_base}`;
  private AUTH_USR = environment.auth_usr;
  private AUTH_PWD = environment.auth_pwd;
  
  constructor(private http: HttpClient) { }

  /**
   * getDevices
   */
  public getDevices(): Observable<Device[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa(`${this.AUTH_USR}:${this.AUTH_PWD}`)}`
      })
    };

    return this.http.get<Device[]>(`${this.URL_BASE}${this.API}`,httpOptions);
  }
}
