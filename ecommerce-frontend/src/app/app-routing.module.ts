import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ADMIN_ROUTE, BASIC_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE} from './constant/const';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './service/auth.service';
import {ProductOverviewComponent} from './components/home/product-overview/product-overview.component';


const routes: Routes = [
  {path: BASIC_ROUTE, component: HomeComponent},
  {path: REGISTRATION_ROUTE, component: RegistrationComponent},
  {path: LOGIN_ROUTE, component: LoginComponent},
  {path: PRODUCT_ROUTE.substring(1), component: ProductOverviewComponent},
  {path: ADMIN_ROUTE, component: AdminComponent, canActivate: [AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
