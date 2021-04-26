import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Product } from '../admin/product';

@Injectable({
providedIn: 'root'
})

export class ApiService {
redirectUrl: string;
baseUrl:string = "http://localhost/php2";
PHP_API_SERVER1= "http://localhost/php2";

	constructor(private httpClient: HttpClient) {}
	
	readProducts1(): Observable<Product[]>{
		return this.httpClient.get<Product[]>(`${this.PHP_API_SERVER1}/index1.php`);
	}
	createProduct1(product: Product): Observable<Product>{
		return this.httpClient.post<Product>(`${this.PHP_API_SERVER1}/create_product.php`, product);
	}
	updateProduct1(product: Product){
		return this.httpClient.put<Product>(`${this.PHP_API_SERVER1}/update_product.php`, product);
	}
	deleteProduct1(id: number){
		return this.httpClient.delete<Product>(`${this.PHP_API_SERVER1}/delete_product.php/?id=${id}`);
	}


public userlogin(username, password)
 {
alert(username)
return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
}

}
