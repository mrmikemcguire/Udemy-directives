import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit {
  private _defaultColor: 'green';

  constructor(private _elRef: ElementRef) {}

  ngOnInit():any {
    this._elRef;
  }
}
