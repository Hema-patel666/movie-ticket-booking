import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import {TheaterserviceService } from '../theaterservice.service';
import { Theater} from '../theater';

@Component({
selector: 'app-theater',
templateUrl: './theater.component.html',
styleUrls: ['./theater.component.css']
})

export class TheaterComponent implements OnInit {
	products: Theater[];
	selectedProduct: Theater = { id : null , name: null, address: null , comment: null, date:  null }
	constructor(private theaterService: TheaterserviceService) {
		this.theaterService.readProducts().subscribe((products: Theater[])=>{
		this.products = products;
		console.log(this.products);
	}) }
	
	ngOnInit()
	{
	}
	createOrUpdateProduct(form){
		form.value.id = this.selectedProduct.id;
		form.value.name = this.selectedProduct.name;
		form.value.address = this.selectedProduct.address;
		form.value.comment= this.selectedProduct.comment;
		form.value.date = this.selectedProduct.date;
		if(this.selectedProduct && this.selectedProduct.id){
			this.theaterService.updateProduct(form.value).subscribe((product: Theater)=>{
			console.log("Theater updated" , product);
			this.theaterService.readProducts().subscribe((products: Theater[])=>{
				this.products = products;
			})
		});
	}
	else{
		this.theaterService.createProduct(form.value).subscribe((product: Theater)=>{
			console.log("Theater created, ", product);
			this.theaterService.readProducts().subscribe((products: Theater[])=>{
				this.products = products;
			})
		});
	}
}

selectProduct(product:Theater){
	this.selectedProduct = product;
}

deleteProduct(id){
	this.theaterService.deleteProduct(id).subscribe((product: Theater)=>{
		console.log("Theater deleted, ", product);
		this.theaterService.readProducts().subscribe((products: Theater[])=>{
			this.products = products;
		})
	});
}
}


