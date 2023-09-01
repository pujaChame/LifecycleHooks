import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
   ngOnInit(): void {
     this.myObs.subscribe((val:any)=>{
     console.log(val);
     },(error:any)=>{
      console.log(error.message)
     },()=>{
      console.log("Observalbe has comleted emitting has value");
     })
   }
  
  //creating observable using observable constructor
   myObs=new Observable((response)=>{
    console.log("response start");
    setTimeout(()=>{response.next("1");},1000);
    setTimeout(()=>{response.next("2")},2000);
    //here we use the error state after that execution will stop
    //setTimeout(()=>{response.error(new Error("We have an error in the observable so execution stop here"))},3000);
    setTimeout(()=>{response.next("3")},3000);
    setTimeout(()=>{response.next("4")},4000);
    setTimeout(()=>{response.complete()},5000);
    setTimeout(()=>{response.next("5")},6000); //not get emmited after complete call
   });

   
   //creating observable using create method
  //  myObs=Observable.create((response:any)=>{
  //   setTimeout(()=>{response.next("A");},1000);
  //   setTimeout(()=>{response.next("B")},2000);
  //   //here we use the error state after that execution will stop
  // //  setTimeout(()=>{response.error(new Error("We have an error in the observable so execution stop here"))},3000);
  //   setTimeout(()=>{response.next("C")},3000);
  //   setTimeout(()=>{response.next("D")},4000);
  //   setTimeout(()=>{response.complete()},5000);
  //  })


//   //using of() operator we create observalbe
//   arr1=[1,2,3,4];
//   arr2=['A','B','C']
//  // myObs= of(this.arr1,this.arr2)
//   myObs=from(this.arr1)
}
