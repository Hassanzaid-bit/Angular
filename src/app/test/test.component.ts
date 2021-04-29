import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
                Welcome {{ name }}
            </h2>
            <h2 [style.color]="hasError ? 'red' : 'green'"> Codevolution </h2>
            <h2 [ngStyle] = "titleStyles"> Style binding 3 </h2>
            `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Hassan";
  public hasError = true
  public isSpecial = true
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetuser(){
    return "Hello " + this.name
  }

}
