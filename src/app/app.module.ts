
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from 'src/shared/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ListUserComponent,
    UserCreateComponent
  ],
  imports: [
    FormsModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule,
    CalendarModule,
    RadioButtonModule,
    MultiSelectModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    UserCreateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
