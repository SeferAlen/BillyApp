import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatChipsModule, MatMenuModule, MatSliderModule } from '@angular/material';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.Interceptor';
import { TokenInterceptor } from './helpers/token.Interceptor';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';
import { UserService } from './services/user.service';
import { BillsService } from './services/bill.service';
import { PasswordComponent } from './password/password.component';
import { BillComponent } from './bill/bill.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    PasswordComponent,
    BillComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSliderModule,
    FormsModule,
    MatMenuModule
  ],
  entryComponents: [],
  providers: [
    {
       provide: MatDialogRef,
       useValue: {}
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuardService,
    RoleGuardService,
    UserService,
    BillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
