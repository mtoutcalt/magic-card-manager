import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicFormatsComponent } from './magic-formats.component';

describe('MagicFormatsComponent', () => {
  let component: MagicFormatsComponent;
  let fixture: ComponentFixture<MagicFormatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicFormatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
