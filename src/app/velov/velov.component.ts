import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { VelovService } from '../velov.service';
import { Velov } from '../velov';

@Component({
  selector: 'app-velov',
  templateUrl: './velov.component.html',
  styleUrls: ['./velov.component.css']
})
export class VelovComponent implements OnInit {
  searchFormGroup: FormGroup;
  stationVelov: Velov[] = [];
  displayedColumns = ['name', 'Velos', 'Stand'];
  lat = 45.735486;
  lng = 4.883498;

  constructor(private velovService: VelovService) {}

  ngOnInit() {
    this.initForm();
  }

  onChoseLocation(event: Event) {
    console.log(event);
  }

  getVelov() {
    const result = this.searchFormGroup.get('search').value;
    this.velovService.getVelov(result);
    this.velovService.getVelovUpdated().subscribe((velovUpdated: Velov[]) => {
      console.log(velovUpdated);
      this.stationVelov = velovUpdated;
    });
  }

  initForm() {
    this.searchFormGroup = new FormGroup({
      search: new FormControl('')
    });
  }
}

export interface IVelovSearchCriteria {
  search: string;
}
