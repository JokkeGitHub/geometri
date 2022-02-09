import { getLocaleEraNames } from '@angular/common';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output} from '@angular/core';
import { Shape } from '../classes/shape';
import { Square } from '../classes/shape';
import { Rectangle } from '../classes/shape';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {

  inputA: number = 0;
  squareArea: number = 0;

  square: Square = new Square(this.inputA);

  constructor(){
  }

  ngOnInit(): void {
  }

  getArea(inputA: number){
    
    let area = this.square.getArea();
    return area;
  }

}
 