import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  PHP_API_SERVER2= "http://localhost/php2";
  constructor(private httpClient: HttpClient) { }

  postImage(fd : FormData): Observable<string>{
    return this.httpClient.post<string>(`${this.PHP_API_SERVER2}/postImage.php`, fd );
  }

  getImage(): Observable<Blob> {
    return this.httpClient.get( `${this.PHP_API_SERVER2}/getImage.php`, { responseType: 'blob' })      
 }
}