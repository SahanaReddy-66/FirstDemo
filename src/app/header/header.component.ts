import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  ShowButton: any;
  display:boolean= true;
  bodyy:boolean=true;
  lefshow:boolean=true;
  midshow:boolean=true;
  rightshow:boolean=true;

  isName: boolean = true;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  headerone() {
    this.router.navigate(['/headerone'])
    this.display = false;
    this.bodyy = false;
    this.lefshow = false;
    this.midshow = false;
    this.rightshow = false;

  }
  Intro() {
    this.router.navigate(['/intro'])
    this.display = false;
    this.bodyy = false;
    this.lefshow = false;
    this.midshow = false;
    this.rightshow = false;
  }
  Register() {
    this.router.navigate(['/register'])
    this.display = false;
    this.bodyy = false;
    this.lefshow = false;
    this.midshow = false;
    this.rightshow = false;
  }
  Contact() {
    this.router.navigate(['/contact'])
    this.display = false;
    this.bodyy = false;
    this.lefshow = false;
    this.midshow = false;
    this.rightshow = false;
  }
  Footer() {
    this.router.navigate(['/footer'])
    this.display = false;
    this.bodyy = false;
    this.lefshow = false;
    this.midshow = false;
    this.rightshow = false;
  }
  looping(){
    this.router.navigate(['/looping'])
    this.display = false;
    this.bodyy = false;
    this.lefshow = false;
    this.midshow = false;
    this.rightshow = false;
  }
  work(){
    this.router.navigate(['/work'])
    this.display = false;
    this.bodyy = false;
    this.lefshow = false;
    this.midshow = false;
    this.rightshow = false;
  }
  myfunction() {
    debugger;
    if (this.isName == true) {
      this.ShowButton = true;
    }
  }
}
