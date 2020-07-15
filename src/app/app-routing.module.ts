import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from 'src/app/components/member/member.component';
import { AddmemberComponent } from 'src/app/components/addmember/addmember.component';

const routes: Routes = [
  { path: 'addmember', component: AddmemberComponent},
  { path: 'member', component: MemberComponent },
  { path: '', redirectTo: 'addmember', pathMatch: 'full'}
 ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
