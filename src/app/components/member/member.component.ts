import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/classes/member';
import { MemberService } from 'src/app/services/member.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  public member: Observable<Member[]>;
  constructor( private router: Router, private memberService: MemberService) { }
   loadMember() {
      this.member = this.memberService.getMember();
   }
   memberEdit(id: string) {
   localStorage.removeItem('id');
   localStorage.setItem('id', id.toString());
   this.router.navigate(['/addmember'], { queryParams: { Id: id } });
  }
  ngOnInit() {
    localStorage.clear();
    this.loadMember();
  }
}
