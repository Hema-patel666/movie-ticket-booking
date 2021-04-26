import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageUrl = null;
 photo: Blob;
 
  constructor(  private _service: StudentService,
    public _DomSanitizationService: DomSanitizer) { }

    ngOnInit(): void {
    }
    setPhoto(event){
      this.photo = event.target.files[0];
  // console.log(this.photo);
    }
  onClickSubmit(){
        const fd = new FormData();
        fd.append('stphoto',this.photo);
        this._service.postImage(fd).subscribe(res => console.log(res));
    }studentPhoto
  showImage()
  {  
      this._service.getImage().subscribe((res) => { 
        this.photo = res;
        console.log(this.photo);
        
        var myReader:FileReader = new FileReader();
        myReader.onloadend = (e) => {
          this.imageUrl = this._DomSanitizationService.bypassSecurityTrustUrl(<string>myReader.result);
          console.log(this.imageUrl);
        }
        myReader.readAsDataURL(this.photo);   
      });
    }    
    }    
  
 

