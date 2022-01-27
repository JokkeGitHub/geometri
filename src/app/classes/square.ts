import { Area } from "../interfaces/area";
import { Shape } from "./shape";

export class Square extends Shape implements Area {
    sideA: number;
    sideB: number;
    result: number;

    constructor(sideA: number, sideB: number){
        super();
        
        this.sideA = sideA;
        this.sideB = sideB;
        this.result = this.getArea();
    }

    getArea(){
        return this.sideA*this.sideB;
    }
}
