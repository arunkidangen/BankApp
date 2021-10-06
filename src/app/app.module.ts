import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteconfirmationComponent } from './deleteconfirmation/deleteconfirmation.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    TransactionsComponent,
    DeleteconfirmationComponent,
    HighlightDirective,
    AnimationDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
