import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsingerDetailComponent } from './bandsinger-detail.component';

describe('BandsingerDetailComponent', () => {
  let component: BandsingerDetailComponent;
  let fixture: ComponentFixture<BandsingerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BandsingerDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BandsingerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
