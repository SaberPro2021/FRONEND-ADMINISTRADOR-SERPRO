import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelctionQuestionComponent } from './multiple-selction-question.component';

describe('MultipleSelctionQuestionComponent', () => {
  let component: MultipleSelctionQuestionComponent;
  let fixture: ComponentFixture<MultipleSelctionQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSelctionQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelctionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});