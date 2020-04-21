import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {FanStatus} from "../models/fan-status";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiServer = 'http://192.168.0.94:8000'

  constructor(private httpClient: HttpClient) { }

  getFanStatus() {
    return this.httpClient.get<FanStatus>(`${this.apiServer}/fan/status`).pipe(
        map((data) => {
          return data;
        })
    )
  }

  toggleFan(status: number) {
    return this.httpClient.get<FanStatus>(`${this.apiServer}/fan/control/${status}`).pipe(
        map((data) => {
          return data;
        })
    )
  }

}
