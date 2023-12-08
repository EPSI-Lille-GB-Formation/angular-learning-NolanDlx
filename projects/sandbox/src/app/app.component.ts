import { Component } from '@angular/core';
import { HighlightDirective } from './highligt.directive'; 

@Component({
  selector: 'app-root',
  template: `
    <h1>Découverte des directives avec Angular</h1>
 
    <a>Go to Google</a>
 
    <p appHighlight>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
      recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
      asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
      recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
      asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
      recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
      asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sint,
      recusandae aliquam illo aliquid doloribus neque natus magnam et! Eius
      asperiores ullam amet explicabo veniam aspernatur sint id sunt autem?
    </p>
  `,
  styles: [],
})
export class AppComponent {}