import { Component, OnInit } from '@angular/core';

// Echart
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  GraphicComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  chart!: echarts.ECharts;

  list:{value:number, name: string, itemStyle:{ color: string }}[] = [
      { value: 1048, name: 'In Progress', itemStyle: {color : '#F4AF29'} },
      { value: 735, name: 'Direct', itemStyle: {color : '#5CDD9F'} },
      { value: 580, name: 'Email', itemStyle: {color : '#AEB2BA'} },
      { value: 484, name: 'Union Ads', itemStyle: {color : '#F36184'} },
  ];

  statistics: {name: string, value: number, unit?:string}[] = [
    {name: 'Total Students Enrolled ', value: 50},
    {name: 'Badges ', value: 5},
    {name: 'Completion Rate', value: 68, unit: '%'},
    {name: 'Students At Risk', value: 5}
  ];

  badges: {name: string, totalGoals: number, completed: number, inProgress: number, notStarted: number, rate: number}[] = [
    {name: 'Badge Title', totalGoals: 5, completed: 4, inProgress: 1, notStarted: 0, rate: 73},
    {name: 'Badge Title', totalGoals: 5, completed: 4, inProgress: 1, notStarted: 0, rate: 73},
    {name: 'Badge Title', totalGoals: 5, completed: 4, inProgress: 1, notStarted: 0, rate: 73},
    {name: 'Badge Title', totalGoals: 5, completed: 4, inProgress: 1, notStarted: 0, rate: 73},
    {name: 'Badge Title', totalGoals: 5, completed: 4, inProgress: 1, notStarted: 0, rate: 73},
    {name: 'Badge Title', totalGoals: 5, completed: 4, inProgress: 1, notStarted: 0, rate: 73},
  ]

  constructor(){
    echarts.use([
      PieChart,
      TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
      GraphicComponent,
      LegendComponent
    ]);
  }
  
  ngOnInit(): void {
    this.drawChart()  
  }
  
  drawChart() {
    this.chart = echarts.init(document.getElementById('pie-chart'));

    this.chart.setOption({
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: '{value|50}\n{text|Total Students}',
              rich: {
                value: {
                  fill: '#344054',
                  fontSize: 32,
                  fontWeight: '600',
                  lineHeight: 34,
                },
                text: {
                  fontWeight: '500',
                  fill: '#667085',
                  fontSize: 14,
                  lineHeight: 14,
                },
              },
              textAlign: 'center',
            },
          },
        ],
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data : this.list
        }
      ]
    })
  }
}
