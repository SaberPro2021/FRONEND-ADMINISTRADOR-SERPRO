import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerproNgQuillComponent } from './serpro-ng-quill.component';

describe('SerproNgQuillComponent', () => {
  let component: SerproNgQuillComponent;
  let fixture: ComponentFixture<SerproNgQuillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerproNgQuillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerproNgQuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
