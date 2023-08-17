import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditcardComponent } from './creditcard.component';

describe('CreditcardComponent', () => {
  let component: CreditcardComponent;
  let fixture: ComponentFixture<CreditcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ CreditcardComponent ],
      providers:[ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
