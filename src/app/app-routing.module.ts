import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "client/create",
    component: ClientCreateComponent
  },
  {
    path: "client/detail/:id",
    component: ClientDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
