import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  msg: any;
  showName:any;
  display:any;
  iscolor=true;
  listOfEmployees = [
    {
      firstName: "Kevin",
      lastName: "Robinson",
      age: "34",
      department: "Human Resource",
      reportingManager: "George Thomson",
      hobbies: [
        "Playing rugby",
        "Reading novels",
        "Yoga"
      ],
      referredBy: [
        {
          isExistingEmployee: false,
          name: "Jay Clark",
          state: "Alabama",
          city: "Montgomery"
        }
      ]
    },
    {
      firstName: "Mathew",
      lastName: "Smith",
      age: "37",
      department: "Finance",
      reportingManager: "Newman Pos",
      hobbies: [
        "Playing Video Games",
        "Swimming",
        "Scuba diving",
        "Mountaineering"
      ],
      referredBy: [
        {
          isExistingEmployee: true,
          name: "Elaine Benes",
          state: "New York",
          city: "New York"
        }
      ]
    },
    {
      firstName: "Jerry",
      lastName: "Seinfeld",
      age: "28",
      department: "Marketing",
      reportingManager: "George Costanza",
      hobbies: [
        "Watching sitcom",
        "Cooking",
      ],
      referredBy: [
        {
          isExistingEmployee: true,
          name: "George Costanza",
          state: "New York",
          city: "New York"
        }
      ]
    },
    {
      firstName: "Kramer",
      lastName: "Cosmo",
      age: "33",
      department: "Marketing",
      reportingManager: "George Costanza",
      hobbies: [
        "Travelling",
        "Listening music",
        "Story writing"
      ],
      referredBy: [
        {
          isExistingEmployee: true,
          name: "Walter Yankee",
          state: "Nevada",
          city: "Las Vegas"
        }
      ]
    },
    {
      firstName: "Dave",
      lastName: "Jackson",
      age: "36",
      department: "R&D",
      reportingManager: "Trish Leno",
      hobbies: [
        "Playing chess",
        "Solving Sudoku",
      ],
      referredBy: [
        {
          isExistingEmployee: false,
          name: "John Wades",
          state: "Los Angeles",
          city: "California"
        }
      ]
    },
    {
      firstName: "Bob",
      lastName: "Duthcman",
      age: "41",
      department: "Finance",
      reportingManager: "Jane Lance",
      hobbies: [
        "Playing chess",
        "Solving Sudoku",
      ],
      referredBy: [
        {
          isExistingEmployee: false,
          name: "Chris Neymar",
          state: "Los Angeles",
          city: "California"
        }
      ]
    },
  ]

  constructor() {
    this.msg = false;
  }

  ngOnInit(): void {
  }
  show() {
    this.msg = "true";
  }
  hide() {
    this.msg = "false";
  }
  ngmodel(){
    this.display="true";
    
  }

}
