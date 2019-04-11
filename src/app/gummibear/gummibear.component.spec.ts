import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GummiBearComponent } from './gummibear.component';

describe('GummiBearComponent', () => {
  let component: GummiBearComponent;
  let fixture: ComponentFixture<GummiBearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GummiBearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GummiBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
