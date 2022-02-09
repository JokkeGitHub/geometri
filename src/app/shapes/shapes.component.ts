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
  squareCircumference: number = 0;
  square: Square = new Square(0);

  rectangle: Rectangle = new Rectangle(0, 0);

  msg:string = "";

  constructor(){
  }

  ngOnInit(): void {
  }

  calculateSquare(){
    this.square.sideA = this.inputA;
    this.squareAreaFunction();
    this.squareCircumferenceFunction();
  }

  squareAreaFunction(){
    this.squareArea = this.square.getArea();
    return this.squareArea;
  }

  squareCircumferenceFunction(){
    this.squareCircumference = this.square.getCircumference();
    return this.squareCircumference;
  }

}
 