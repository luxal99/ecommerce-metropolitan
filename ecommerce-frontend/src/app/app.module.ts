import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AdminComponent} from './components/admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {ProductComponent} from './components/admin/product/product.component';
import {GlobalComponent} from './components/admin/global/global.component';
import {HeadingComponent} from './directives/heading/heading.component';
import {AddProductDialogComponent} from './components/admin/product/add-product-dialog/add-product-dialog.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ProductComponent,
    GlobalComponent,
    HeadingComponent,
    AddProductDialogComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ProductComponent, GlobalComponent, AddProductDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {
}
