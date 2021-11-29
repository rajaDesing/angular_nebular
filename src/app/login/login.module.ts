import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [LoginComponent, IndexComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NbCardModule,
    NbLayoutModule
  ]
})
export class LoginModule { }
