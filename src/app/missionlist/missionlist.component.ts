import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html'
})
export class MissionListComponent implements OnInit {
  missions: any[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit() {
    this.loadLaunches();
  }

  loadLaunches(year?: string) {
    if (year) {
      this.spacexService.getLaunchesByYear(year).subscribe(data => {
        this.missions = data;
      });
    } else {
      this.spacexService.getLaunches().subscribe(data => {
        this.missions = data;
      });
    }
  }

  onFilterChanged(selectedYear: string) {
    this.loadLaunches(selectedYear);
  }
}
