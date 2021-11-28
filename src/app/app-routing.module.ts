import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
   {path: '', component: HomeComponent, pathMatch: 'full'},
   {path: 'about', component: AboutComponent},
   {path: 'form', component: FormComponent},
   {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
