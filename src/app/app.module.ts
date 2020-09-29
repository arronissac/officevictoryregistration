import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { NavigationComponent } from './navigation/navigation.component';

const firebaseConfig = {
  apiKey: "AIzaSyAR-pwmIzmeivIeegiOKqB2-jTGuvkALrI",
  authDomain: "victoryofficemdu.firebaseapp.com",
  databaseURL: "https://victoryofficemdu.firebaseio.com",
  projectId: "victoryofficemdu",
  storageBucket: "victoryofficemdu.appspot.com",
  messagingSenderId: "986492349032",
  appId: "1:986492349032:web:3839cd26090cf850e129dd",
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StatusComponent,
    Register2Component,
    Register3Component,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  AngularFirestoreModule,
  FormsModule
  
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
