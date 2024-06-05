import { Component } from '@angular/core';
import { RoutesConstants } from '../../constants/routes.constants';
import { LabelsConstants } from '../../constants/labels.constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public CONSTANTS = {...LabelsConstants.NAVBAR};
  public ROUTES = {...RoutesConstants.ROUTES};

  constructor() { }

  ngOnInit(): void {
  }
}
