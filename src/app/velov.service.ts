import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Velov } from './velov';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const BACKEND_URL = environment.apiUrl + '/station/';

@Injectable({
  providedIn: 'root'
})
export class VelovService {
  private velovUpdated = new Subject<Velov[]>();
  constructor(private httpClient: HttpClient, private route: Router) {}

  getVelov(address: string): void {
    const queryParams = `?address=${address}`;
    this.httpClient.get<Velov[]>(BACKEND_URL + queryParams).subscribe((velovResult: Velov[]) => {
      this.velovUpdated.next(velovResult);
    });
  }

  getCoordVelov(lat: number, lng: number) {
    const queryParams = `?lat=${lat}&lng=${lng}`;
    this.httpClient.get<Velov[]>(BACKEND_URL + 'coordinates' + queryParams).subscribe((velovResult: Velov[]) => {
      this.velovUpdated.next(velovResult);
    });
  }

  getVelovUpdated() {
    return this.velovUpdated.asObservable();
  }
}
