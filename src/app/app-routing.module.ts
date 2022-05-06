import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderoneComponent } from './headerone/headerone.component';
import { IntroComponent } from './intro/intro.component';
import { LoopingComponent } from './looping/looping.component';
import { RegisterComponent } from './register/register.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path:'headerone', component:HeaderoneComponent},
  {path:'intro', component:IntroComponent},
  {path:'register', component:RegisterComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent},
  {path:'looping',component:LoopingComponent},
  {path:'work',component:WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
