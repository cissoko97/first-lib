import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-guce',
  template: `
    <p>
      guce works!
      {{ test ?? 'Bonjour le monde de la programmation'}}
    </p>
  `,
  styles: [
  ]
})
export class GuceComponent implements OnInit , OnChanges {

  @Input() test!: string;


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
  }



}
