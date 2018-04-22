import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderCreaturesComponent } from './deck-builder-creatures.component';

describe('DeckBuilderCreaturesComponent', () => {
  let component: DeckBuilderCreaturesComponent;
  let fixture: ComponentFixture<DeckBuilderCreaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBuilderCreaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckBuilderCreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
