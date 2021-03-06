import { ControlService } from './Services/control.service';
import { CallapiService } from './Services/callapi.service';
import { StreamService } from './Services/stream.service';
import { routes } from './app.routes';
import { FirstComponent } from './first/first.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginService } from 'app/Services/login.service';
import { OtherComponent } from './other/other.component';
import { RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { SharedService } from 'app/Services/shared.service';

@NgModule({
  declarations: [
    AppComponent,FirstComponent, OtherComponent, NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [ LoginService,SharedService,StreamService,
    CallapiService,ControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
