import { NgModule } from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {SockDisplayComponent} from './sock-display/sock-display.component';
import {CartComponent} from './cart/cart.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {UserManagementComponent} from './user-management/user-management.component';
import {SockManagementComponent} from './sock-management/sock-management.component';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {AuthGuard} from './shared/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeScreenComponent},
  { path: 'socks', component: SockDisplayComponent},
  { path: 'cart', component: CartComponent, runGuardsAndResolvers: 'always'},
  { path: 'user', component: UserComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'adminpanel', component: AdminPanelComponent, canActivate: [AuthGuard]},
  { path: 'usermanagement', component: UserManagementComponent, canActivate: [AuthGuard]},
  { path: 'sockmanagement', component: SockManagementComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
