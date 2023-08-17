import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NGXLogger,TOKEN_LOGGER_CONFIG } from 'ngx-logger';
import { CancelcartComponent } from './cancelcart.component';

describe('CancelcartComponent', () => {
  let component: CancelcartComponent;
  let fixture: ComponentFixture<CancelcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelcartComponent ],
      providers:[NGXLogger,{provide:TOKEN_LOGGER_CONFIG,useValue:{
        level: 'debug',
      serverLogLevel: 'off',
      disableConsoleLogging: false, }}]
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
