import { Component, OnInit } from '@angular/core';
import { LabelsConstants } from "../../constants/labels.constants";
import { RoutesConstants } from "../../constants/routes.constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public CONSTANTS = {...LabelsConstants.NAVBAR};
  public ROUTES = {...RoutesConstants.ROUTES};

  constructor() { }

  ngOnInit(): void {
  }

}
