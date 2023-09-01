import { Component, Input } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent  implements OnChanges, OnInit,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  
  @Input() counterValReceived!:number;
  clickMe(){
    
  }
  constructor(){
   console.log("constructor is getting excuted");
   
  }

  
  ngOnDestroy(): void {
   console.log("onDestroy called");
   
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }
  ngDoCheck(): void {
  console.log("NgDocheck Executed")
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges executed");
    console.log(changes);

  }
  ngOnInit(): void {
   console.log("ngOnInit Called")
  }

}
