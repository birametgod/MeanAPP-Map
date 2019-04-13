import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Touristique } from './touristique';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = environment.apiUrl + '/touris/';

@Injectable({
  providedIn: 'root'
})
export class TouristiqueService {
  private ptTouristiqUpdated = new Subject<Touristique[]>();
  constructor(private httpClient: HttpClient, private route: Router) {}

  getPtTouristique(): void {
    this.httpClient.get<Touristique[]>(BACKEND_URL).subscribe((touristResult: Touristique[]) => {
      this.ptTouristiqUpdated.next(touristResult);
    });
  }

  getPtTouristiqueUpdated() {
    return this.ptTouristiqUpdated.asObservable();
  }
}
