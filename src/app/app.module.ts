import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HttpClient, HttpHandler, HttpClientJsonpModule } from '@angular/common/http';

import { FindStoreService } from './model/find-store.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeckFormComponent } from './deck-form/deck-form.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { RouterModule, Routes } from '@angular/router';
import { DeckBuilderColorsComponent } from './deck-builder-colors/deck-builder-colors.component';
import { DeckBuilderCreaturesComponent } from './deck-builder-creatures/deck-builder-creatures.component';
import { MagicTutorialComponent } from './magic-tutorial/magic-tutorial.component';
import { MagicPhasesComponent } from './magic-phases/magic-phases.component';
import { DeckBuilderSpellsComponent } from './deck-builder-spells/deck-builder-spells.component';
import { DeckBuilderCurrentComponent } from './deck-builder-current/deck-builder-current.component';
import { FindstoreComponent } from './findstore/findstore.component';
import { MagicFormatsComponent } from './magic-formats/magic-formats.component';
import { BoosterPackComponent } from './booster-pack/booster-pack.component';


const appRoutes: Routes = [
  { path: 'deckbuilder', component: DeckBuilderComponent,
      children: [
        { path: 'formRenew', redirectTo: '/deckbuilder/form', pathMatch: 'full'},
        { path: '', component: DeckFormComponent},
        { path: 'colors', component: DeckBuilderColorsComponent},
        { path: 'creatures', component: DeckBuilderCreaturesComponent},
        { path: 'spells', component: DeckBuilderSpellsComponent},
        { path: 'currentDeckRenew', redirectTo: '/deckbuilder/currentDeck', pathMatch: 'full'},
        { path: 'currentDeck', component: DeckBuilderCurrentComponent}
      ]},
  { path: 'magic', component: HomeComponent, data: {title: 'MAGIC!'} },
  { path: 'tutorial', component: MagicTutorialComponent },
  { path: 'booster', component: BoosterPackComponent },
  { path: 'phases', component: MagicPhasesComponent },
  { path: 'formats', component: MagicFormatsComponent },
  { path: 'findstore', component: FindstoreComponent },
  { path: '', redirectTo: '/magic', pathMatch: 'full'}
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeckFormComponent,
    DeckBuilderComponent,
    DeckBuilderColorsComponent,
    DeckBuilderCreaturesComponent,
    MagicTutorialComponent,
    MagicPhasesComponent,
    DeckBuilderSpellsComponent,
    DeckBuilderCurrentComponent,
    FindstoreComponent,
    MagicFormatsComponent,
    BoosterPackComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatStepperModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [FindStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
