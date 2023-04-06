import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilieresComponent } from './components/filieres/filieres.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'filiere', component:FilieresComponent,
    pathMatch: 'full'
  },
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
