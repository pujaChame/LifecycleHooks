import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll_service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[EnrollService] //here we provide our service
})
export class UserComponent { 
  title:string="User"
   //here in constuctor we can inject our service using dependancy injection we are creating instance of service 
   //angular provide us instance of class using DI
   constructor(private enroll:EnrollService){

   }
   tempFunction(){
    this.enroll.onEnrollclicked(this.title)
   }
   
}
