import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivePriceComponent } from './archivePrice.component';

describe('ArchivePriceComponent', () => {
    let component: ArchivePriceComponent;
    let fixture: ComponentFixture<ArchivePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ArchivePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ArchivePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
