import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public infoContent = 'Info de prueba.';
  public zoom = 12;
  public center: google.maps.LatLngLiteral;
  public options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 21,
    minZoom: 0,
  };

  public markers = [{
    position: {
      lat: 4.61,
      lng: -74.13,
    },
    label: {
      color: 'white',
      text: 'Marker label ',
    },
    title: 'Marker title ',
    info: 'Marker info ',
    options: {
      animation: google.maps.Animation.BOUNCE,
    },
  }];

  constructor() { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
}
