'use strict'

//Object
//object = {key:value};
//1. object
const ellie ={name:'ellie',age:4};
console.log(ellie)
const print =(object)=>{
    console.log(object.name);
    console.log(object.age);
}

print(ellie);


//2. key?
// key를 이용해서 배열에서 인덱스 사용하는 것처럼 값을 받아올수 있음
console.log(ellie.name);
console.log(ellie['name']);

const printValue =(obj,key)=>{
    console.log(obj[key]);
}
printValue(ellie,'name');
printValue(ellie,'age');
// 4. constrator function
// 오브젝트 생성시 key와 value와 같다면 생략 가능
const Person =(name,age) =>{
    return {name,age}
}
const person1 ={name:'bob',age:2};
const person2 ={name:'steve',age:3};
const person3 ={name:'dave',age:4};
const person4 = Person('ellie',30);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);


//5. in poerator
// 들어 있는 키값 확인(in)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);


//6. for..in -- for ..of
// for .. in 
// for .. of
console.log(ellie)
for (let k in ellie){
    console.log(k);
}

//for (value of iterable)
const array =[1,2,3,4,5];

for(let value of array){
    console.log(value);
}
array.forEach(value => {
    console.log(value)
});

// 7. cloning
// object.assign)dest, [obj1,obj2,obj3...]
const user1 ={name:'ellie',age:'20'};
const user2 =user1;
user2.name ='coder';
//위처럼 사용하면 오브젝트를 변경하면 위에 같이 묶인 값도 같이 변경
console.log(user1);
//오브젝트를 복사해서 다시 할당하는 방법이 필요
// 이거 유용하겠다
const user3 ={...user1};

console.log(user3);
user3.name='user3';
console.log(user1);
console.log(user3);
