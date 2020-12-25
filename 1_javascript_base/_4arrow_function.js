'use strict';

//Function

//1. 함수의 선언
// function name(param1, param2) {body ... return;}
//one function === one thing
//하나의 함수는 한가지 일만
// 동사로 지어야 함
// 오브젝트로 취급

function log(message){
    console.log(message);
}

log('출력')


// 2. Parameters
function changeName(obj){
    obj.name ='coder';
}

const ellie ={name:'ellie'};
changeName(ellie);
console.log(ellie);

//3. default parameters
// 파라미터 값이 전달 되지 않을 경우 default 값을 지정할 수 있음
function showMessage(message, from="unknown"){
    console.log(`${message} by ${from}`)
}
showMessage('hi!');

// 4. Rest parameters
// ... 으로 작성하면 배열 형태로 전달
// 
function printAll(...args){
    for(let i=0; i<args.length;i++){
        console.log(args[i])
    }
    console.log('------------')
    for( const arg of args){
        console.log(arg);
    }
    console.log('------------')
    args.forEach((arg)=> console.log(arg));
}
printAll('dream', 'coding','ellie');

// 5. 지역변수
let globalmessage ='global';
function printMessage(){
    let message ='hello';
    console.log(message)
    console.log(globalmessage)
}
printMessage();
//console.log(message);

//6. Return a value
function sum(a,b){
    return a +b;
}

const result =sum(1,2);
console.log(`sum: ${sum(1,2)}`);


// 7. Earlu return, early exit
// 조건이 맞지 않을 경우에는 함수를 빨리 종료
// 그 후 필요한 로직을 뒤에 작성 하는 것이 좋음
function upgradeUser(user){
    if(user.point <=10){
        return;
    }
    //long upgrade logic...
}

//8. function expression
const print =()=>{
    console.log('print');
}
print();
const printAgain =print;
const sumAgain =sum;
console.log(sumAgain(1,3));


// 9. Callback function using function expresion
// 조건이 될 인수를 받고
// 맞을때와 아닐 때의 콜백 함수를 지정하는 방식으로 자주 사용
function randomQuiz(answer, printYes,printNo){
    if(answer =='love you'){
        printYes()
    }else{
        printNo();
    }
}

const printYes = () =>{
    console.log('yes');
}

const printNo = () =>{
    console.log('no');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// 10. Arrow function
// 간결하게 작성하고 함수형으로 이용할 때 유용
// const add = function (a,b){
//     return a+b;
// } 

// const add =  (a,b)=>{
//     return a+b;
// }
const add =  (a,b)=>a+b;
console.log(add(1,1))