import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-looping',
  templateUrl: './looping.component.html',
  styleUrls: ['./looping.component.scss']
})
export class LoopingComponent implements OnInit {
  names: any;
  title: any;
  User: any;
  input: any;
  errorMsg: any;
  isColor=false;
  random:any;

  constructor() {
    this.names = [{ name: 'sahana', age: 22 }, { name: 'Swathi', age: 23 },
    { name: 'laya', age: 24 }, { name: 'Chandana', age: 25 }, { name: 'Rekha', age: 26 },
    ]
    this.title = 'This is one way data binding';
    this.User = "Hello"
    this.input = "Please enter name";
    

  }
  ButtonFunction(event: any) {
    console.log(this.input)
    if (this.input == "sahana") {
      // window.alert("Logged in Suuccessfully")
      this.errorMsg = false;
    }
    else {
      // window.alert("the Credentials are incorrect")
      this.errorMsg = true;
    }

  }
  clickFunction(event: any) {
    console.log(this.random);
  }

  ngOnInit(): void {
  }

}
