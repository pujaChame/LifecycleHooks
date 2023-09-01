import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent {
   


}
//  let p =new Promise((resolve,reject)=>{
//   console.log("promise is pending");
//  setTimeout(()=>{
//  // console.log("I am promise am fullfilled")
//   resolve(true)
//  },3000) 
//  })
//  let p2 =new Promise((resolve,reject)=>{
//   console.log("promise is pending");
//  setTimeout(()=>{
//   //console.log("I am promise am rejcted")
//   reject(new Error("I am error"));
//  },3000) 
//  })
 
//  p.then((value)=>{
//   console.log(value);
  
//  })
// //  p2.catch((error)=>{
// //     console.log("some error occured");
    
// //  })

//  p2.then((value)=>{
//   console.log(value);
//  },(error)=>{
//   console.log(error)
//  })