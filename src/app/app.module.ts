import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MemberComponent } from './components/member/member.component';
import { AddmemberComponent } from './components/addmember/addmember.component';
import { AppRoutingModule } from './app-routing.module';
import { MemberService } from 'src/app/services/member.service';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    AddmemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
