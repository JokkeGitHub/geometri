class Shape {
    sideA: number;

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

class Square extends Shape {

    constructor(sideA: number){
        super(sideA);
    }
}

class Rectangle extends Shape {
    sideB: number;

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
/*
export abstract class Shape {
    abstract sideA: number;
    abstract sideB: number;
}
*/
