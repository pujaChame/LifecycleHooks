import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EnrollService } from './Services/enroll_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lifecyclehooks';
 OnEnroll(){
   const enService=new EnrollService();
   enService.onEnrollclicked(this.title);

 }


  constructor(){
   // console.log("Constructor Laoded......")
  }
  
  count=0;
  incrementCounter(){
    this.count++;
  }

}
