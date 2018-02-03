import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasvotComponent } from './casvot.component';

describe('CasvotComponent', () => {
  let component: CasvotComponent;
  let fixture: ComponentFixture<CasvotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasvotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasvotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
