import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/classes/member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.scss']
})
export class AddmemberComponent implements OnInit {
  massage: string;
  dataSaved = false;
  addMember: FormGroup;
  MemberIdUpdate = '0';
  constructor(private router: Router, private memberService: MemberService) { }

  createMember(member: Member) {
    if (this.MemberIdUpdate !== '0') {
      member.Id = this.MemberIdUpdate;
      this.memberService.createMember(member).subscribe(
        () => {
          if (this.MemberIdUpdate === '0') {
            this.massage = 'Saved Successfully';
          } else {
            this.massage = 'Update Successfully';
          }
          this.dataSaved = true;
          this.router.navigate(['/member']);
        });
      }
  }

  onFormSubmit() {
    const member = this.addMember.value;
    this.createMember(member);
  }

  memberEdit(id: string) {
    this.memberService.getMemberById(id).subscribe(member => {
      this.massage = null;
      this.dataSaved = false;
      this.MemberIdUpdate = id;
      this.addMember.controls.Name.setValue(member.Name);
      this.addMember.controls.Department.setValue(member.Department);
      this.addMember.controls.City.setValue(member.City);
    });
  }
  clearform() {
    this.addMember.controls.Name.setValue('');
    this.addMember.controls.Department.setValue('');
    this.addMember.controls.City.setValue('');
  }
  ngOnInit() {
    this.addMember = new FormGroup({
      Name: new FormControl(),
      Department: new FormControl(),
      City: new FormControl(),
  });

    const Id = localStorage.getItem('id');
    if (Id !== null) {
    this.memberEdit(Id);
  }}
}
