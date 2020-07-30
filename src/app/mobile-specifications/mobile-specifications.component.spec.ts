import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSpecificationsComponent } from './mobile-specifications.component';

describe('MobileSpecificationsComponent', () => {
  let component: MobileSpecificationsComponent;
  let fixture: ComponentFixture<MobileSpecificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSpecificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
