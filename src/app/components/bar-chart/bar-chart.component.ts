import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Position } from "../../models/position.model";
import { PositionsService } from "../../services/positions.service";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public products: any[] = [
    { color: 'blue', type: 'tie' },
    { color: 'blue', type: 'pants' },
    { color: 'red', type: 'tie' },
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  //Esto dejar como input usando el ejemplo de Devices -> DeviceView -> Cards
  public positions: Position[];
  public isLoading = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private positionsService: PositionsService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData() {
    this.getPositions();
  }

  private getPositions() {
    this.positionsService.GetPositions()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((result) => {
        this.positions = result;

        //const groupBy = (key,arr) => arr.reduce()
        //console.log(groupBy('color',this.products));

        //this.positions[0].attributes.distance

        const [{attributes}] = [...this.positions];
        console.log(`Array ${ JSON.stringify(attributes) }`);
        

      }, error => {
        console.log(error);
      });
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}