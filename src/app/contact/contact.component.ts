import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  Fname:any;
  Lname:any;

  constructor() { 
    
  }
  LogInFun(){
    if(this.Fname=="sahana" && this.Lname=="reddy"){
      window.alert("Success")
    }
    else{
      window.alert("Fail")
    }

  }

  ngOnInit(): void {
  }
 

}
