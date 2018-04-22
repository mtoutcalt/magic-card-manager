import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicPhasesComponent } from './magic-phases.component';

describe('MagicPhasesComponent', () => {
  let component: MagicPhasesComponent;
  let fixture: ComponentFixture<MagicPhasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicPhasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicPhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
