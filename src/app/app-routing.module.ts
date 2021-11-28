import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
      {
        path: 'auth',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
