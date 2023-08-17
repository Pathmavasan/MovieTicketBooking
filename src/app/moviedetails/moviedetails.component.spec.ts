import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MoviedetailsComponent } from './moviedetails.component';
beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,RouterTestingModule],
    declarations: [ MoviedetailsComponent ]
  })
  .compileComponents();
}));

describe('MoviedetailsComponent', () => {
  let component: MoviedetailsComponent;
  let fixture: ComponentFixture<MoviedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
