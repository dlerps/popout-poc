import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BroadcastComponent } from './broadcast/broadcast.component';
import {PopoutWindowModule} from "angular-popout-window";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    BroadcastComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PopoutWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
