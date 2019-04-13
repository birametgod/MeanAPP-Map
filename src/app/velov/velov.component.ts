import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { VelovService } from '../velov.service';
import { Velov } from '../velov';
import { TouristiqueService } from '../touristique.service';

@Component({
  selector: 'app-velov',
  templateUrl: './velov.component.html',
  styleUrls: ['./velov.component.css']
})
export class VelovComponent implements OnInit {
  coordinates: ICoordinate[] = [];
  searchFormGroup: FormGroup;
  stationVelov: Velov[] = [];
  displayedColumns = ['name', 'Velos', 'Stand'];
  lat = 45.735486;
  lng = 4.883498;
  locationChosen = false;

  constructor(private velovService: VelovService, private ptTouristiqueService: TouristiqueService) {}

  ngOnInit() {
    this.initForm();
  }

  onChoseLocation(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
    this.velovService.getCoordVelov(lat, lng);
    this.velovService.getVelovUpdated().subscribe((velovUpdated: Velov[]) => {
      this.transformCoordinates(velovUpdated);
    });
  }

  getVelov() {
    const result = this.searchFormGroup.get('search').value;
    this.velovService.getVelov(result);
    this.velovService.getVelovUpdated().subscribe((velovUpdated: Velov[]) => {
      this.transformCoordinates(velovUpdated);
    });
  }

  private transformCoordinates(velovUpdated: Velov[]) {
    this.stationVelov = velovUpdated;
    let res: ICoordinate = { name: null, available_bikes: null, available_bikes_stands: null, lat: null, lng: null };
    this.coordinates = velovUpdated.map((oneVelovUpdated: Velov) => {
      res = { ...res, name: oneVelovUpdated.properties.name };
      res = { ...res, available_bikes: oneVelovUpdated.properties.available_bikes };
      res = { ...res, available_bikes_stands: oneVelovUpdated.properties.available_bike_stands };
      oneVelovUpdated.geometry.coordinates.map((coordinate, number) => {
        if (number % 2 === 0) {
          res = { ...res, lng: coordinate };
        } else {
          res = { ...res, lat: coordinate };
        }
      });
      return res;
    });
  }

  addMarker(lat: number, lng: number) {
    // this.stationVelov = velovUpdated;
    // let res: ICoordinate = { name: null, available_bikes: null, available_bikes_stands: null, lat: null, lng: null };
    // this.coordinates = velovUpdated.map((oneVelovUpdated: Velov) => {
    //   res = { ...res, name: oneVelovUpdated.properties.name };
    //   res = { ...res, available_bikes: oneVelovUpdated.properties.available_bikes };
    //   res = { ...res, available_bikes_stands: oneVelovUpdated.properties.available_bike_stands };
    //   oneVelovUpdated.geometry.coordinates.map((coordinate, number) => {
    //     if (number % 2 === 0) {
    //       res = { ...res, lng: coordinate };
    //     } else {
    //       res = { ...res, lat: coordinate };
    //     }
    //   });
    //   return res;
    // });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.coordinates.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.coordinates.map(marker => marker[coordType]));
  }

  initForm() {
    this.searchFormGroup = new FormGroup({
      search: new FormControl('')
    });
  }
}

export interface ICoordinate {
  name: string;
  available_bikes: number;
  available_bikes_stands: number;
  lat: number;
  lng: number;
}

export interface IVelovSearchCriteria {
  search: string;
}
