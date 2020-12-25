'use strict';

//1. class declarations
class Person{
    //constructor(생성자-오브젝트 생성시 필요 데이터)
    constructor(name,age){
        //fields
        this.name =name;
        this.age =age;
    }

    //methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}

const ellie =new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak()


// 2. Getter and Setter
class User {
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get age() {
        return this._age;
    }

    set age(value){
        // if(value<0){
        //     throw Error('age can not be negative');
        // }
        this._age=value<0 ?0 :value;
    }
}

const user1 = new User('Steve','Job',-1);
console.log(user1.age);

class Experiment{
    publicField=2;
    #privateField=0;
}
// 최신 브라우저에서 못씀
const experiment =new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 상속 & 다양성
class Shape{
    constructor(width,height,color){
        this.width =width;
        this.height =height;
        this.color =color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    //오버라이딩 사용
    // 상속 받은 함수를 재정의해서 사용한다
    draw(){
        //부모의 함수를 가져다 쓴다 (super)
        super.draw();
        console.log('triangle')
    }
    getArea() {
        return this.width * this.height/2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea())

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea())

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);