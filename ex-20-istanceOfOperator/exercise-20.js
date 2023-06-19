class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class  AreaCalculator {
  constructor(area) {
    this.area = area;
  }

  static Area (side) {
    return side * side;
   }

  static Area (width, height) {
    return width * height;
   }

  static Area (radius) {
  return Math.PI * radius;
  }


}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(new AreaCalculator(square));
console.log( new AreaCalculator(rectangle));
console.log(new AreaCalculator(circle));