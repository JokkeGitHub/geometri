import { Area } from "../interfaces/area";
import { Shape } from "./shape";

export class Square extends Shape implements Area {
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number){
        super();
        
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea(){
        return this.sideA*this.sideB;
    }
}
