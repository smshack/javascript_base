'use strict';

//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+2 =${1 + 2}`)

//2. Number operators
console.log(1 + 1);// 더하기
console.log(1 - 1);// 빼기
console.log(1 * 1);// 곱하기
console.log(1 / 1);// 나누기
console.log(5 % 2); //나머지
console.log(2 ** 3);//제곱

//3. Increment and decrement operators
let counter = 2;
console.log(counter)
const preIncremnet = ++counter;
console.log(preIncremnet);
console.log(counter)
//counter =counter+1;
//preIncrement =counter;
//증가 시키고 할당

const postIncremnet = counter++;
console.log(counter)
console.log(postIncremnet);
//postIncremnet =counter;
//counter =counter+1;
//할당 하고 증가


//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x=x+y;
x -= y;
x *= y;
x /= y;


//5. Comparison Operators(비교연산자)
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


//6. Logical operators: || , && , !
// 체크시 무거운걸 뒤로
const value1 = true;
const value2 = 4 < 2;
//|| (or) ,finds the first trythy value 
//하나라도 참이면 참
console.log(`or: ${value1 || value2 || check()}`);

//&& (and) ,finds the first falsy value
//전부 참이여야 참
console.log(`or: ${value1 && value2 && check()}`);

//간단하게 널체크시 많이 사용됨
let nullableObeject = null;
if (nullableObeject != null) {
    nullableObeject.something;
}

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('wait');
    }
    return true;
}

// !(not)
// 참 거짓 반대로
console.log(!value1);


//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 타입에 상관 없이 값만 비교
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 타입까지 비교
// 검사시 === 사용하는 것이 좋음
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//equality 
console.log(0 == false);//true
console.log(0 === false);//false
console.log('' == false);//true
console.log('' === false);//false
console.log(null == false);//false
console.log(null === false);//false


//8. conditional operators:if
// if, else if, else

const name = 'coder';
if (name === 'ellie') {
    console.log('welcome, ellie!')
} else if (name === 'coder') {
    console.log('you are amazing coder')
} else {
    console.log('unknow')
}

//9. Ternary operator :?
//condition ? value1:value2
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch statement
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('chrom,firefox')
        break;
    default:
        console.log('same all');
        break;
}

//11. loop

let i = 3;
while (i > 0) {
    console.log(`while ${i}`)
    i--;
}
i = 3;
do {
    console.log(`while ${i}`)
    i--;
} while (i > 0)

for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline vaiable for: ${i}`)
}

//nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i:${i}, j:${j}`)
    }
}

//break, continue
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`)
    }
}

for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`)

}