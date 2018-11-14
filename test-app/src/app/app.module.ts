import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
                           { path: 'login', component: LoginComponent },
                           { path: 'list', component: ListComponent },
                           { path: '', redirectTo: '/login', pathMatch: 'full' }
                         ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
