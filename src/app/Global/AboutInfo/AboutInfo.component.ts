import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ECTEMPLATE-AboutInfo',
  templateUrl: './AboutInfo.component.html',
  styleUrls: ['./AboutInfo.component.scss']
})
export class AboutInfoComponent implements OnInit {

   @Input() data : any;
   
   constructor() { }

   ngOnInit() {
   }

}
