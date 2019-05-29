import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingViewHomeComponent } from './betting-view-home.component';

describe('BettingViewHomeComponent', () => {
  let component: BettingViewHomeComponent;
  let fixture: ComponentFixture<BettingViewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BettingViewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
