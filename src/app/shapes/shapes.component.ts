import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Square } from '../classes/square';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {
  
  square: Square = {
    sideA: 0,
    sideB: 0,
    getArea: function (): number {
      return this.sideA*this.sideB;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
