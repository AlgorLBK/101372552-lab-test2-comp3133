import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3';

  constructor(private http: HttpClient) {}

  // Get all SpaceX launches
  getLaunches(): Observable<any> {
    return this.http.get(`${this.baseUrl}/launches`);
  }

  // Get SpaceX launches by year
  getLaunchesByYear(year: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/launches?launch_year=${year}`);
  }

  // Get details for a specific launch
  getLaunchDetails(flightNumber: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/launches/${flightNumber}`);
  }
}
