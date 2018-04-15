import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMoreComponent } from './no-more.component';

describe('NoMoreComponent', () => {
  let component: NoMoreComponent;
  let fixture: ComponentFixture<NoMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
