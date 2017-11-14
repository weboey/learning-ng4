import { Component,OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';

  rowCount:number=15;
  textList:string[]=[];

  ngOnInit():void {
    this.textList=[];
    for(let i=0;i<this.rowCount;i++){
      this.textList.push(`text-${i}`);
    }
  }

  page(index){
    switch (index){
      case 1:console.log(1);this.rowCount=index*15;this.ngOnInit();break;
      case 2:console.log(2);this.rowCount=index*15;this.ngOnInit();break;
      case 3:console.log(3);this.rowCount=index*15;this.ngOnInit();break;
    }
  }
}
