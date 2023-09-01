import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { PromisesComponent } from './promises/promises.component';
import { ChainingpromisesComponent } from './chainingpromises/chainingpromises.component';
import { ObservableComponent } from './observable/observable.component';
import { RxjsOperatorComponent } from './rxjs-operator/rxjs-operator.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    ChildComponent,
    PromisesComponent,
    ChainingpromisesComponent,
    ObservableComponent,
    RxjsOperatorComponent,
    UserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
