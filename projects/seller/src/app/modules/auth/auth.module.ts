import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { SecurityCodeComponent } from './security-code/security-code.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    EmailComponent,
    SecurityCodeComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
