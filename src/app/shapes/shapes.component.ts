import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Square } from '../classes/square';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {
  
  inputA: number = 0;
  inputB: number = 0;

  public square: Square = {
    sideA: 0,
    sideB: 0,
    result: 0,
    getArea: function (): number {
      return this.result = this.sideA * this.sideB;
    }
  }  

  constructor() { }

  ngOnInit(): void {
  }

}
