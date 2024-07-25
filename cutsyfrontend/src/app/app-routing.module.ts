import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { BasicInfoComponent } from './registration/basic-info/basic-info.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactInfoComponent } from './registration/contact-info/contact-info.component';
import { PasswordInfoComponent } from './registration/password-info/password-info.component';
import { ConfirmationComponent } from './registration/confirmation/confirmation.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'login', component: LoginComponent },
        { path: 'test', component: ForgetPasswordComponent },

        {
          path: 'registration',
          component: RegistrationComponent,
          children: [
            { path: '', redirectTo: 'personal', pathMatch: 'full' },
            { path: 'personal', component: BasicInfoComponent },
            { path: 'confirmation', component: ConfirmationComponent },
            { path: 'address', component: ContactInfoComponent },
            { path: 'account', component: PasswordInfoComponent },
          ],
        },
        {
          path: '',
          component: MainComponent,
          children: [
            /*  {
              path: 'SingleMinistre/:id',
              component: SingleMinistreComponent,
              canActivate: [authGuard, MinistreGuard],
            },
            {
              path: 'dashboard/:id',
              component: MinistredashboardComponent,
              canActivate: [MinistreGuard],
            },
            {
              path: 'dashboard',
              component: DashboardComponent,
              canActivate: [authGuard, SuperAdminGuard],
            },
            { path: 'minister', component: MinisterComponent },

            //  { path: 'ManageMinistre', component: MinistreCrudComponent },
            //  { path: 'testingCharts', component: TestingchartsComponent },
            {
              path: 'SingleMinistre',
              component: SingleMinistreComponent,
              canActivate: [SuperAdminGuard],
            },
          */
          ],
          // canActivate: [authGuard],
        },
        // { path: 'notfound', component: NotfoundComponent },

        //  { path: 'nav', component: NavComponent },
        //   { path: 'test', component: SingleMinistreComponent },

        { path: '**', redirectTo: 'login' }, // Wildcard route for handling undefined paths
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
