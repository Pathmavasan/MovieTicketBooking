import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelcartComponent } from './cancelcart.component';

describe('CancelcartComponent', () => {
  let component: CancelcartComponent;
  let fixture: ComponentFixture<CancelcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
