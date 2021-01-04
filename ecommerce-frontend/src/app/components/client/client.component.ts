import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {LazyLoadComponentsUtil} from '../../util/lazy-load-components';
import {ClientOrderOverviewComponent} from './client-order-overview/client-order-overview.component';
import {ShippingAddressComponent} from './shipping-address/shipping-address.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, AfterViewInit {


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

  changeColor(e) {
    const elements = document.querySelectorAll('.active');
    [].forEach.call(elements, (el) => {
      el.classList.remove('active');
    });
    e.target.className = 'active';
  }

  async initDefaultMenu() {
    document.getElementById('order-btn').click();
  }

  loadOrderOverview() {
    LazyLoadComponentsUtil.loadComponent(ClientOrderOverviewComponent, this.entry, this.cvRef, this.resolver);
  }


  loadShippingAddressSettings() {
    LazyLoadComponentsUtil.loadComponent(ShippingAddressComponent, this.entry, this.cvRef, this.resolver);
  }
}
