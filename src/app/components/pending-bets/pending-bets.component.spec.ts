import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBetsComponent } from './pending-bets.component';

describe('PendingBetsComponent', () => {
  let component: PendingBetsComponent;
  let fixture: ComponentFixture<PendingBetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
