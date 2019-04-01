import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelovComponent } from './velov.component';

describe('VelovComponent', () => {
  let component: VelovComponent;
  let fixture: ComponentFixture<VelovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
