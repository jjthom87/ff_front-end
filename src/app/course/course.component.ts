import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http: HttpClient) { }

  users = []
  steveTWeights = []
  //weekNum = 0;

  populateFatties(res){
  	res.forEach((user) => this.users.push(user));
    // for(let i in this.users[0].weight){
    //   if(typeof this.users[0].weight[i] == "number"){
    //     this.weekNum++;
    //   }
    // }
    // for(let i = 0; i < this.users.length; i++){
    //   console.log(this.users[i].weight[0]);
    // }
    this.users.forEach((user) => {
      user.weight.pct = (user.current/user.weight.start).toFixed(4);
    })
    // for(let i in this.users.weight){
    //   console.log(this.users.weight[i])
    // }
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].name === "Subaru Steve"){
        for(let j in this.users[i].weight){
          if(typeof this.users[i].weight[j] === "number"){
            this.steveTWeights.push(this.users[i].weight[j])
          }
        }
      }
    }
    this.users.sort((a, b) => { return a.weight.pct - b.weight.pct });
  }

  ngOnInit() {
  	this.http.get(`https://floating-inlet-43356.herokuapp.com/api/fat-fucks`).subscribe((res:Response) => {
      //console.log(res); 
      this.populateFatties(res);
      console.log(this.steveTWeights)
    })
  // let chart = new CanvasJS.Chart("chartContainer", {
  //   theme: "light2",
  //   animationEnabled: true,
  //   exportEnabled: true,
  //   title:{
  //     text: "Monthly Expense"
  //   },
  //   data: [{
  //     type: "pie",
  //     showInLegend: true,
  //     toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
  //     indexLabel: "{name} - #percent%",
  //     dataPoints: [
  //       { y: 450, name: "Food" },
  //       { y: 120, name: "Insurance" },
  //       { y: 300, name: "Traveling" },
  //       { y: 800, name: "Housing" },
  //       { y: 150, name: "Education" },
  //       { y: 150, name: "Shopping"},
  //       { y: 250, name: "Others" }
  //     ]
  //   }]
  // });
    
  // chart.render();
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [220], label: 'Steve T'},
    {data: [253.6], label: 'Steve N'},
    {data: [236.4], label: 'Marc'},
    {data: [198.2], label: 'Jared'},
    {data: [233.4], label: 'Casale'}
  ];
  public lineChartLabels:Array<any> = ['Start', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    {
      //backgroundColor: '#fffaf4',
      borderColor: '#ff2723',
      pointBackgroundColor: '#69ff58',
      pointBorderColor: '#ff2723',
      pointHoverBackgroundColor: '#69ff58',
      pointHoverBorderColor: '#ff2723'
    },
    {
      //backgroundColor: '#fffaf4',
      borderColor: '#ce47ff',
      pointBackgroundColor: '#ffde22',
      pointBorderColor: '#ce47ff',
      pointHoverBackgroundColor: '#ffde22',
      pointHoverBorderColor: '#ce47ff'
    },
    {
      //backgroundColor: '#fffaf4',
      borderColor: '#4232ab',
      pointBackgroundColor: '#24a89f',
      pointBorderColor: '#4232ab',
      pointHoverBackgroundColor: '#24a89f',
      pointHoverBorderColor: '#4232ab'
    },
    {
      //backgroundColor: '#fffaf4',
      borderColor: '#5d804d',
      pointBackgroundColor: '#7a797d',
      pointBorderColor: '#5d804d',
      pointHoverBackgroundColor: '#7a797d',
      pointHoverBorderColor: '#5d804d'
    },
    {
      //backgroundColor: '#fffaf4',
      borderColor: '#827c41',
      pointBackgroundColor: '#fffaf4',
      pointBorderColor: '#827c41',
      pointHoverBackgroundColor: '#fffaf4',
      pointHoverBorderColor: '#827c41'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
