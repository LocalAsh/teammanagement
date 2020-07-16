import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Member } from 'src/app/classes/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
   url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://localhost:44319/api/members/';
   }
   createMember(member: Member) {
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
     return this.http.post<Member[]>(this.url, member, httpOptions);
   }
   getMember(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url);
   }
   getMemberById(id: string) {
    return this.http.get<Member>(this.url + id);
   }
   updateMember(id: string, member: Member) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Member[]>(this.url + id, member, httpOptions);
   }
}
