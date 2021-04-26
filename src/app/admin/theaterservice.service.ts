import { Injectable } from '@angular/core';
import {Theater} from './theater';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TheaterserviceService {
  PHP_API_SERVER = "http://localhost/php2";

	constructor(private httpClient: HttpClient) {}

	readProducts(): Observable<Theater[]>{
		return this.httpClient.get<Theater[]>(`${this.PHP_API_SERVER}/theat.php`);
	}
	createProduct(product: Theater): Observable<Theater>{
		return this.httpClient.post<Theater>(`${this.PHP_API_SERVER}/create_theater.php`, product);
	}
	updateProduct(product: Theater){
		return this.httpClient.put<Theater>(`${this.PHP_API_SERVER}/update_theater.php`, product);
	}
	deleteProduct(id: number){
		return this.httpClient.delete<Theater>(`${this.PHP_API_SERVER}/delete_theater.php/?id=${id}`);
	}
}
