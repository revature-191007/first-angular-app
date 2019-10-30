import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from 'src/app/components/directives/directives.component';
import { MainComponent } from './components/main/main.component';
import { PuppyComponent } from './components/puppy/puppy.component';
import { KittenComponent } from './components/kitten/kitten.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    MainComponent,
    PuppyComponent,
    KittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
