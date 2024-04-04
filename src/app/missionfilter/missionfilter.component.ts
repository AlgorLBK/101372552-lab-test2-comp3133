// src/app/missionfilter/missionfilter.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionFilterComponent {
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedYear: string = '';

  constructor() {}

  onYearChange(): void {
    this.filterChanged.emit(this.selectedYear);
  }
}
