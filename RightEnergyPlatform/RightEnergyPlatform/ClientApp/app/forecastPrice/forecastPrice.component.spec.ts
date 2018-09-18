import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastPriceComponent } from './forecastPrice.component';

describe('ForecastPriceComponent', () => {
  let component: ForecastPriceComponent;
  let fixture: ComponentFixture<ForecastPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
