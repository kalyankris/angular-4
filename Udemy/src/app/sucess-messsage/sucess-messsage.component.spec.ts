import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessMesssageComponent } from './sucess-messsage.component';

describe('SucessMesssageComponent', () => {
  let component: SucessMesssageComponent;
  let fixture: ComponentFixture<SucessMesssageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessMesssageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessMesssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
