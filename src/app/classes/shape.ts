export class Shape {
    protected sideA: number;

    constructor(sideA: number){
        this.sideA = sideA;
    }
}

export class Square extends Shape {
    
    constructor(sideA: number){
        super(sideA);
        this.sideA = sideA;
    }
    
    getArea(): number {
        return this.sideA * this.sideA;
    }

    getCircumference(): number {
        return 2*(this.sideA+this.sideA);
    }
}

export class Rectangle extends Shape {
    public sideB: number;

    constructor(sideA: number, sideB: number){
        super(sideA);
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea(): number {
        return this.sideA*this.sideB;
    }

    getCircumference(): number {
        return 2*(this.sideA+this.sideB);
    }
}
