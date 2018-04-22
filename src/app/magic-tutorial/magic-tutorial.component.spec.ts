import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicTutorialComponent } from './magic-tutorial.component';

describe('MagicTutorialComponent', () => {
  let component: MagicTutorialComponent;
  let fixture: ComponentFixture<MagicTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
