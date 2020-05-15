import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninuserComponent } from './signinuser.component';

describe('SigninuserComponent', () => {
  let component: SigninuserComponent;
  let fixture: ComponentFixture<SigninuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
