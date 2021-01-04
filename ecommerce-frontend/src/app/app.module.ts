import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
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
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddProductCategoryDialogComponent} from './components/admin/product/add-product-category-dialog/add-product-category-dialog.component';
import {AddProductBrandDialogComponent} from './components/admin/product/add-product-brand-dialog/add-product-brand-dialog.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ProductPipe} from './pipes/product.pipe';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FilterComponent} from './components/home/filter/filter.component';
import {ProductOverviewComponent} from './components/home/product-overview/product-overview.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ProductBindingComponent} from './components/home/product-binding/product-binding.component';
import {CartDialogComponent} from './components/navbar/cart-dialog/cart-dialog.component';
import {ClientComponent} from './components/client/client.component';
import {ClientOrderOverviewComponent} from './components/client/client-order-overview/client-order-overview.component';
import {ClientGlobalOverviewComponent} from './components/client/client-global-overview/client-global-overview.component';
import {ShippingAddressComponent} from './components/client/shipping-address/shipping-address.component';
import {ClientOrderProductPreviewComponent} from './components/client/client-order-overview/client-order-product-preview/client-order-product-preview.component';
import {AdminOrderOverviewComponent} from './components/admin/admin-order-overview/admin-order-overview.component';
import {EditProductDialogComponent} from './components/admin/product/edit-product-dialog/edit-product-dialog.component';

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
    RegistrationComponent,
    AddProductCategoryDialogComponent,
    AddProductBrandDialogComponent,
    ProductPipe,
    NavbarComponent,
    FilterComponent,
    ProductOverviewComponent,
    ProductBindingComponent,
    CartDialogComponent,
    ClientComponent,
    ClientOrderOverviewComponent,
    ClientGlobalOverviewComponent,
    ShippingAddressComponent,
    ClientOrderProductPreviewComponent,
    AdminOrderOverviewComponent,
    EditProductDialogComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAz8PX_PdPZo7WmWuxLYVMDiJUOozl0Fn4',
      authDomain: 'soy-smile-249718.firebaseapp.com',
      databaseURL: 'https://soy-smile-249718.firebaseio.com',
      projectId: 'soy-smile-249718',
      storageBucket: 'soy-smile-249718.appspot.com',
      messagingSenderId: '870517553704',
      appId: '1:870517553704:web:d238ce266071d519f8131d',
      measurementId: 'G-JGV7HTSL0B'
    }),
    AngularFireStorageModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ProductComponent, AddProductBrandDialogComponent,
    AddProductCategoryDialogComponent, GlobalComponent, AddProductDialogComponent, CartDialogComponent, ShippingAddressComponent,
    ClientGlobalOverviewComponent, ClientOrderOverviewComponent, EditProductDialogComponent,
    AdminOrderOverviewComponent, ClientOrderProductPreviewComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {
}
