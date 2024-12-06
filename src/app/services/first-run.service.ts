import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirstRunService {
  headers = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) {}

  public checkFirstRun(): Observable<any> {
    return this.http.get('http://localhost:58555/sqlite/welcome?67235472354rtwfrd7=huszdfvbuhdsr', {
      headers: this.headers,
    });
  }
}
