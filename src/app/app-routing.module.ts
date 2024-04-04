import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { WorkComponent } from './Components/work/work.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: "", component: ProfileComponent },
  {path: "work", component: WorkComponent },
  {path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
