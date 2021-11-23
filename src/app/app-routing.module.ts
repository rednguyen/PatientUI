import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
<<<<<<< HEAD
import { ContactComponent } from './contact/contact.component';
=======
import { ContactComponent } from './contact/contact/contact.component';
>>>>>>> origin

const routes: Routes = [
   {path: '', component: HomeComponent, pathMatch: 'full'},
   {path: 'about', component: AboutComponent},
   {path: 'form', component: FormComponent},
<<<<<<< HEAD
   {path: 'contact', component: ContactComponent},

=======
   {path: 'contact', component: ContactComponent}
>>>>>>> origin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
