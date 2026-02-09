import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCompletedOrdersComponent } from './delivery-completed-orders.component';

describe('DeliveryCompletedOrdersComponent', () => {
  let component: DeliveryCompletedOrdersComponent;
  let fixture: ComponentFixture<DeliveryCompletedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryCompletedOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryCompletedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
