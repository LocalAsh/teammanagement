import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Member } from 'src/app/classes/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
   Url = 'https://localhost:44319/api/members';

  constructor(private http: HttpClient) { }
   createMember(member: Member) {
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
     return this.http.post<Member[]>(this.Url, member, httpOptions);
   }
   getMember(): Observable<Member[]> {
    return this.http.get<Member[]>(this.Url);
   }
   getMemberById(id: string) {
    return this.http.get<Member>(this.Url + '/?id=' + id);
   }
   UpdateMember(id: string, member: Member) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Member[]>(this.Url + '/?id=' + id, member, httpOptions);
   }
}
