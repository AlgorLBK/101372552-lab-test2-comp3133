import { Component, OnInit, Input } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {
  @Input() flightNumber: string = '';
  missionDetails: any;

  constructor(private spacexService: SpacexService) {}

  ngOnInit() {
    if (this.flightNumber) {
      this.spacexService.getLaunchDetails(this.flightNumber).subscribe(data => {
        this.missionDetails = data;
      });
    }
  }
}
