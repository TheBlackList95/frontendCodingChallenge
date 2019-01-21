import { Component, Input } from '@angular/core';

/*
  This "Card" component is considered as a stateless component that represents a repository unit.
  To avoid redundacy : we have created this component to use it after that in "Repository" component as 
  a repository unit through iteration
*/

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})

export class CardComponent {
  constructor() {}

  // These vars are considered as an inputs or props of "Card" component to get data from other components
  @Input() avatar: string;
  @Input() name: string;
  @Input() description: string;
  @Input() stars: string;
  @Input() issues: string;
  @Input() interval: string;

  customStyle = {
    width : '110px',
    height: '11àpx'
  };
}
