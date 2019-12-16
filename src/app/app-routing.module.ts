import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';

const routes: Routes = [{
  path: '', 
  component: LoginComponent
}, {
  path: 'adminPage',
  component: AdminComponent,
  canActivate: [RoleGuard],
    data: {role: 'Admin'}
}, {
  path: 'userPage',
  component: UserComponent,
  canActivate: [RoleGuard],
    data: {role: 'User'}
}, { 
  path: '**', 
  redirectTo: '' 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
