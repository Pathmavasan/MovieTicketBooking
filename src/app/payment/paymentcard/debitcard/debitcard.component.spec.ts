import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DebitcardComponent } from './debitcard.component';

describe('DebitcardComponent', () => {
  let component: DebitcardComponent;
  let fixture: ComponentFixture<DebitcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule],
      declarations: [ DebitcardComponent ],
      providers:[ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
