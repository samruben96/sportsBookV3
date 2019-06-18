import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingConfirmationPageComponent } from './betting-confirmation-page.component';

describe('BettingConfirmationPageComponent', () => {
  let component: BettingConfirmationPageComponent;
  let fixture: ComponentFixture<BettingConfirmationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingConfirmationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
