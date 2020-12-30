import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LazyLoadComponentsUtil} from '../../util/lazy-load-components';
import {ProductComponent} from './product/product.component';
import {GlobalComponent} from './global/global.component';
import {AdminOrderOverviewComponent} from './admin-order-overview/admin-order-overview.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {


  @ViewChild('target', {read: ViewContainerRef, static: false}) entry: ViewContainerRef;

  constructor(private cvRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initDefaultMenu();
    }, 10);
  }


  async initDefaultMenu() {
    document.getElementById('overview-btn').click();
  }

  changeColor(e) {
    const elements = document.querySelectorAll('.active');
    [].forEach.call(elements, (el) => {
      el.classList.remove('active');
    });
    e.target.className = 'active';
  }

  loadProductComponent() {
    LazyLoadComponentsUtil.loadComponent(ProductComponent, this.entry, this.cvRef, this.resolver);
  }

  async loadGlobalOverview() {
    LazyLoadComponentsUtil.loadComponent(GlobalComponent, this.entry, this.cvRef, this.resolver);
  }

  async loadOrderOverview() {
    LazyLoadComponentsUtil.loadComponent(AdminOrderOverviewComponent, this.entry, this.cvRef, this.resolver);
  }
}
