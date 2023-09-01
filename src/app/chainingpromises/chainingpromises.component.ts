import { Component } from '@angular/core';

@Component({
  selector: 'app-chainingpromises',
  templateUrl: './chainingpromises.component.html',
  styleUrls: ['./chainingpromises.component.css']
})
export class ChainingpromisesComponent {
  constructor(){
    cherry();
  }
}
async function cherry(){
  let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("First Promise");
    },2000)
  });
  let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Second promise");
    },3000)
  });

  console.log("First promise callled");
  let a=await p1;
  console.log(a);
  console.log("Second promise called");
  let b=await p2;
  console.log(b);
}
console.log("I am executed first.....")
//let result=cherry();