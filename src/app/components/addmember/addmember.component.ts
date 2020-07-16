import { Component, OnInit } from '@angular/core';
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
  buttonText: string;
  Id: string;
  addMember: FormGroup;
  constructor(private router: Router, private memberService: MemberService) { }

  createMember(member: Member) {
      this.memberService.createMember(member).subscribe(
        () => {
          this.router.navigate(['/member']);
        });
  }

  updateMember(id: string, member: Member) {
    member.Id = id;
    this.memberService.updateMember(id, member).subscribe(
      () => {
        this.router.navigate(['/member']);
      });
  }

  onFormSubmit() {
    const member = this.addMember.value;
    if (this.Id !== null) {
    this.updateMember(this.Id, member);
    } else {
      this.createMember(member);
    }
  }

  memberEdit(id: string) {
    this.memberService.getMemberById(id).subscribe(member => {
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

    this.Id = localStorage.getItem('id');
    if (this.Id !== null) {
    this.memberEdit(this.Id);
    this.buttonText = 'Update Member';
  }else {
    this.buttonText = 'Add Member';
  }}
}
