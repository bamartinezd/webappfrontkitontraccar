import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { DevicesViewComponent } from './pages/devices-view/devices-view.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GoogleMapsModule } from "@angular/google-maps";
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './pages/home/home.component';
import { ChartsModule } from "ng2-charts";
import { BarChartComponent } from './components/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    DevicesViewComponent,
    SpinnerComponent,
    MapComponent,
    HomeComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
