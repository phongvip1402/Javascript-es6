class Shape {
    constructor(name,description){
        this.name = name;
        this.description = description;
    }
     calculate(num = 1){
        return num*3;
    }
} 
class Circle extends Shape{
    constructor(name,description,width){
        super(name,description);
        this.width = width;
    }
}

const circle = new Circle('circle','note',12);
 console.log(circle.name);
 console.log(circle.description);
 console.log(circle.width);
 console.log(circle.calculate(4));
 const shape = new Shape('shapea','no desc');
 console.log(shape.calculate(3));

