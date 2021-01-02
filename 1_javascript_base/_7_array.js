'use strict'

//Array

//1. Array declarationŒ
const arr1 = [1,2,3,4];

//2. Index position
const fruits =['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// 3.Looping over an arrayŒ
for(let i =0; i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit)
}

fruits.forEach((fruit) =>console.log(fruit));

fruits.push('🍊',"🍐");
console.log(fruits);

//pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
// 매우 느림
fruits.unshift('🥭','🍈');
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits)

fruits.push('🥑','🍒','🍑');
console.log(fruits)
// 시작하는 인덱스, 지우고 싶은 개수
// 지우고 싶은 개수를 지정하지 않으면 뒤에걸 전부 지운다
fruits.splice(1, 2)
console.log(fruits)
fruits.splice(1,1,'🍏','🌶')
console.log(fruits)
const fruits2 =['🥭','🍠'];
//concat 은 배열들을 합해서 새로운 배열을 리턴한다
const newFruits =fruits.concat(fruits2);
console.log(newFruits)

//5. Searching
//finde the index
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍑'));

console.log(fruits.includes('🍑'));
console.log(fruits.includes('🥓'));




