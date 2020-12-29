import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGlobalOverviewComponent } from './client-global-overview.component';

describe('ClientGlobalOverviewComponent', () => {
  let component: ClientGlobalOverviewComponent;
  let fixture: ComponentFixture<ClientGlobalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGlobalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGlobalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
