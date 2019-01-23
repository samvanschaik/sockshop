import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SockDisplayComponent } from './sock-display/sock-display.component';
import {ApiService} from './shared/api.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {CartService} from './shared/cart.service';
import { CartComponent } from './cart/cart.component';
import {AppRoutingModule} from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {UserService} from './shared/user.service';
import {AuthenticationService} from './shared/authentication.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SockManagementComponent } from './sock-management/sock-management.component';
import { SockModifyComponent } from './sock-modify/sock-modify.component';
import { SockCreationComponent } from './sock-creation/sock-creation.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import {AuthGuard} from './shared/auth-guard.service';
import { UserModifyComponent } from './user-modify/user-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    SockDisplayComponent,
    HeaderComponent,
    CartComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    AdminPanelComponent,
    UserManagementComponent,
    SockManagementComponent,
    SockModifyComponent,
    SockCreationComponent,
    WelcomeScreenComponent,
    UserModifyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    CartService,
    CartComponent,
    UserService,
    AuthenticationService,
    FormsModule,
    AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
