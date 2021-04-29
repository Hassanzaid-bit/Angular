import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
                Welcome {{ name }}
            </h2>
            <button (click)="onClick()"> Greet </button>
            <button (click)="greeting = 'Welcome vishwas'"> Greet </button>
            {{ greeting }}
            `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Hassan";
  public greeting = "";

  onClick(){
    console.log("Welcome to code evolution " + this.name)
    this.greeting = "Welcome to code evolution " + this.name
  }
  constructor() { }

  ngOnInit(): void {
  }

}
