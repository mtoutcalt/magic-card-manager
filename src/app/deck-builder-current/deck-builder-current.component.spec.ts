import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderCurrentComponent } from './deck-builder-current.component';

describe('DeckBuilderCurrentComponent', () => {
  let component: DeckBuilderCurrentComponent;
  let fixture: ComponentFixture<DeckBuilderCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBuilderCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckBuilderCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
