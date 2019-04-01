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

  constructor(private velovService: VelovService) {}

  ngOnInit() {
    this.initForm();
    this.searchFormGroup.valueChanges.pipe(debounceTime(1000)).subscribe((result: IVelovSearchCriteria) => {
      this.velovService.getVelov(result.search);
    });
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
