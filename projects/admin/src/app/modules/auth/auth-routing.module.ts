import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { SecurityCodeComponent } from './security-code/security-code.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: SigninComponent },
      { path: 'create-account', component: SignupComponent },
      { path: 'email', component: EmailComponent },
      { path: 'code', component: SecurityCodeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
