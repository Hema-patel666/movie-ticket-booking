import { Component } from '@angular/core';
import { ApiService } from './admin/api.service';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {

  
constructor(private dataService: ApiService) {


}
ngOnInit() {
    
  }
       
 
  }
