import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderColorsComponent } from './deck-builder-colors.component';

describe('DeckBuilderColorsComponent', () => {
  let component: DeckBuilderColorsComponent;
  let fixture: ComponentFixture<DeckBuilderColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBuilderColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckBuilderColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
