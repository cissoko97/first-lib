import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuceComponent } from './guce.component';

describe('GuceComponent', () => {
  let component: GuceComponent;
  let fixture: ComponentFixture<GuceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
