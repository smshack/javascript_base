// 1. Use strict
//added in ES5
// use this for Valina Javascript
'use strict';

//2. Variable
//let(added in ES6)
// 변수
// 메모리에 쓸수 있는 박스를 만들고
// let name => 메모리에 저장된 값
let name ='ellie';
console.log(name);
name ='hello'
console.log(name);

//block /global scope
{
    let name ='jarry';
    console.log('지역 변수 사용')
    console.log(name);
}
console.log('전역 변수 사용')
console.log(name);

//var (don't ever use this!!)
// var hoisting( move declaration from bottom to top)
// *** var를 쓸 경우 문제점
// 변수를 선언후 값을 할당해야함
// 1.선언도 하기 전에 값을 할당하거나 하는 행동 가능
// 2. 블럭 scope 사용 불가 => 규모있는 프로젝트에서 예상치 못한 오류를 만들 수 있음
// 어디에 선언했느냐에 상관 없이 선언을 맨 위로 올리는 문제가 있어 사용하지 말것!!!


// 3. Constants
// 상수 => 선언 할당 뒤에 값 변경 물가
// 보안 (Security)
// thread safety
// reduce hunman mistakes
const daysInWeek =7;
const maxNumber =5;
console.log('--상수 사용')
console.log(daysInWeek,maxNumber);

// 4.데이터 타입(Variable types)
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function
const count =17;
const size=17.1;
console.log(`value: ${count}, type:${typeof count}`)
console.log(`value: ${size}, type:${typeof size}`)

// number - spical numeric values: infinity, -infinity, NaM
const infinity =1/0;
const negativeInfinity =-1/0;
const nAn ='not a number' /2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char ='c';
const brendan ='brendan';
const greeting='hello'+brendan;
console.log(`value:${greeting} ,type:${typeof greeting}`)


//bollean
//false :0, null, undefined, NaN ,''
// treu: any other value
const canRead =true;
const test =3<1;
console.log(`value:${canRead} ,type:${typeof canRead}`)
console.log(`value:${test} ,type:${typeof test}`)

//null
// 내가 명확하게 비어있는 값이라고 지정
let nothing =null;
console.log(`value:${nothing} ,type:${typeof nothing}`)

//undefiend
// 선언은 되었지만 값이 할당되지 않음
let x;
console.log(`value:${x} ,type:${typeof x}`)

//symbol, 고유한 식별자를 만들경우 사용
const symbol1 =Symbol('id');
const symbol2 =Symbol('id');
console.log(symbol1===symbol2)

// 값이 같다면 동일한 symbol 만들기
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1===gSymbol2)
console.log(`value:${symbol1.description} ,type:${typeof symbol1.description}`)

//5. Dynamic typing: 할당되었을때 데이터 타입이 결정
let text ='hello';
console.log(text.charAt(0));
console.log(`value:${text} ,type:${typeof text}`)
text=1;
console.log(`value:${text} ,type:${typeof text}`)
text='7'+5;
console.log(`value:${text} ,type:${typeof text}`)
text='7'/'5';
console.log(`value:${text} ,type:${typeof text}`)

//6. object, 
const ellie ={name:'ellie', age:'20'};
console.log(`value:${ellie} ,type:${typeof ellie}`)
console.log(ellie)