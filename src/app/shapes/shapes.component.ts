import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Square } from '../classes/shape';
import { Rectangle } from '../classes/shape';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {
  //const inputA: number = (document.getElementById(this.inputA) as HTMLInputElement).value;

  public square: Square[];
  public rectangle: Rectangle[];

  constructor(){
    this.square = [new Square (1)] //<HTMLInputElement>document.getElementById("inputA")).value]
    this.rectangle = [new Rectangle(1,2)]
  }

  ngOnInit(): void {
  }

}


  /*
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
  */
 