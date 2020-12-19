import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ADMIN_ROUTE, BASIC_ROUTE} from './constant/const';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path: BASIC_ROUTE, component: HomeComponent},
  {path: ADMIN_ROUTE, component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
