import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderSpellsComponent } from './deck-builder-spells.component';

describe('DeckBuilderSpellsComponent', () => {
  let component: DeckBuilderSpellsComponent;
  let fixture: ComponentFixture<DeckBuilderSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBuilderSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckBuilderSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
