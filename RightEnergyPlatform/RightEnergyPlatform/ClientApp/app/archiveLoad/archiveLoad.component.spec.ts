import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveLoadComponent } from './archiveLoad.component';

describe('ArchiveLoadComponent', () => {
  let component: ArchiveLoadComponent;
  let fixture: ComponentFixture<ArchiveLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
