import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-fan-control',
  templateUrl: './fan-control.component.html',
  styleUrls: ['./fan-control.component.scss'],
})
export class FanControlComponent implements OnInit {

  fanStatusesDisplay = ['warning', 'success']
  fanStatus = true;
  fanStatusDisplay = 'success';
  constructor(private dataService: DataService) {
    this.dataService.getFanStatus().subscribe(data => {
      this.fanStatus = data.fan_status === 1;
      this.fanStatusDisplay = this.fanStatusesDisplay[data.fan_status]
    })
  }

  ngOnInit() {}

  onFanStatusChanged() {
    let status: number;
    switch (this.fanStatus) {
      case false: status = 0; break;
      case true: status = 1; break;
      default: break;
    }
    this.fanStatusDisplay = this.fanStatusesDisplay[status];
    this.dataService.toggleFan(status).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
