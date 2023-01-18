import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruefalseQuestionComponent } from './truefalse-question.component';

describe('TruefalseQuestionComponent', () => {
  let component: TruefalseQuestionComponent;
  let fixture: ComponentFixture<TruefalseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruefalseQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruefalseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
