import { Injector, NgModule } from '@angular/core';
import { MyWebComponentComponent } from './my-web-component.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyWebComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    MyWebComponentComponent
  ],
  bootstrap: []
})
export class MyWebComponentModule { 
  constructor(private injector: Injector) { }

  public ngDoBootstrap() {
    
    let component;

    component = createCustomElement(MyWebComponentComponent, { injector: this.injector });
    customElements.define('my-web-component', component);
  }
}
