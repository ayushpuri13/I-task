import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component'
import {AuthGuard } from './auth.guard'

const routes: Routes = [
                         {path: 'login',component:LoginComponent},
                         {path: '',redirectTo:'login',pathMatch:'full'},
                         {path: 'userlist',component:UserlistComponent, canActivate:[AuthGuard]}
          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
