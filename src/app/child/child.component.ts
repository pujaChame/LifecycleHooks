import { AfterContentChecked, AfterContentInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,AfterContentInit,AfterContentChecked{
 ngAfterContentChecked(): void {
   console.log("ngAfterContentChecked is called !!!!!!");
   
 }
 ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked is called!!!!!!!");
  
 }
 ngAfterViewInit(): void {
  console.log("ngAfterViewInit is called.....");
  
 }
 ngDoCheck(): void {
 console.log("Ng Docheck Called!!!!!!");
 
 }
 
 ngOnInit(){
  console.log("ngOnInit Load....")
 } 
 
 ngAfterContentInit(): void {
  console.log("ngAfterInit Called.......")
 }
 @Input() counterReceived!:number;

 
 ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges Called........");
  console.log(changes)
  
 }

}
