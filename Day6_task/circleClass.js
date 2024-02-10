class Circle {
    constructor(radius=1.0, color='red') {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }

    setRadius() {
        this.radius = this.radius;
    }

    getColor() {
        return this.color;
    }

    setColor() {
        this.color = this.color;
    }

    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    } 

    getArea () {
        return Math.PI * this.radius **2;
    }
    
    getCirumference() {
        return 2 * Math.PI * this.radius;
    }
}

let circle1 = new Circle(10,'black');
let circle2 = new Circle();
let circle3 = new Circle(20,'green');

console.log(circle2.getRadius());
console.log(circle2.getColor());
console.log(circle1.toString());
console.log(circle3.getArea());
console.log(circle3.getCirumference());


