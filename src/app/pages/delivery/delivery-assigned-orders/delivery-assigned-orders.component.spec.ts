import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAssignedOrdersComponent } from './delivery-assigned-orders.component';

describe('DeliveryAssignedOrdersComponent', () => {
  let component: DeliveryAssignedOrdersComponent;
  let fixture: ComponentFixture<DeliveryAssignedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryAssignedOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryAssignedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
