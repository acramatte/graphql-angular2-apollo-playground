import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import {ApolloModule} from 'angular2-apollo';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri:'http://localhost:4000/graphql'
  })
});

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApolloModule.withClient(client)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
