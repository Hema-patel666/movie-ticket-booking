import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	products: Product[];
	selectedProduct: Product = { id : null , name: null, price: null}

	constructor(public apiService: ApiService,private router:Router) {
		this.apiService.readProducts1().subscribe((products: Product[])=>{
		this.products = products;
		console.log(this.products);
	}) }
	ngOnInit()
	{
	}
	createOrUpdateProduct(form){
		form.value.id = this.selectedProduct.id;
		form.value.name = this.selectedProduct.name;
		form.value.price = this.selectedProduct.price;
		if(this.selectedProduct && this.selectedProduct.id){
			this.apiService.updateProduct1(form.value).subscribe((product: Product)=>{
			console.log("Product updated" , product);
			this.apiService.readProducts1().subscribe((products: Product[])=>{
				this.products = products;
			})
		});
	}
	else{
		this.apiService.createProduct1(form.value).subscribe((product: Product)=>{
			console.log("Product created, ", product);
			this.apiService.readProducts1().subscribe((products: Product[])=>{
				this.products = products;
			})
		});
	}
}

selectProduct(product: Product){
	this.selectedProduct = product;
}

deleteProduct(id){
	this.apiService.deleteProduct1(id).subscribe((product: Product)=>{
		console.log("Product deleted, ", product);
		this.apiService.readProducts1().subscribe((products: Product[])=>{
			this.products = products;
		})
	});
}
}