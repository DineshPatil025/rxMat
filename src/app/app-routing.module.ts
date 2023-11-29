import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashComponent } from './shared/components/post-dash/post-dash.component';

const routes: Routes = [
  {
    path:"",
    component: PostDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
