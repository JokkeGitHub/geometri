import { Input } from "@angular/core";

class Shape {
    public sideA: number;

    constructor(sideA: number){
        this.sideA = sideA;
    }

    getArea() {    
        return this.sideA * this.sideA;
    }

    getCircumference() {
        return 2*(this.sideA+this.sideA);
    }
}

export class Square extends Shape {

    constructor(sideA: number){
        super(sideA);
    }
}

export class Rectangle extends Shape {
    public sideB: number;

    constructor(sideA: number, sideB: number){
        super(sideA);
        this.sideB = sideB;
    }

    override getArea(): number {
        return this.sideA*this.sideB;
    }

    override getCircumference(): number {
        return 2*(this.sideA+this.sideB);
    }
}
