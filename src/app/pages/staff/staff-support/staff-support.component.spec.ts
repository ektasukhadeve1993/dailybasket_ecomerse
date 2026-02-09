import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSupportComponent } from './staff-support.component';

describe('StaffSupportComponent', () => {
  let component: StaffSupportComponent;
  let fixture: ComponentFixture<StaffSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
