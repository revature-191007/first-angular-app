import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuppyComponent } from 'src/app/components/puppy/puppy.component';
import { KittenComponent } from 'src/app/components/kitten/kitten.component';

const routes: Routes = [{
  path: 'puppies',
  component: PuppyComponent
}, {
  path: 'kittens',
  component: KittenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
