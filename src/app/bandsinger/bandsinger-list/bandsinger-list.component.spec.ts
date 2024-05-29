import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsingerListComponent } from './bandsinger-list.component';

describe('BandsingerListComponent', () => {
  let component: BandsingerListComponent;
  let fixture: ComponentFixture<BandsingerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BandsingerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandsingerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
