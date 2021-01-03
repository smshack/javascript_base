'use strict'

// false : 0, -0 ,'', null, undefined
// true: not false

let obj ={
    name:'jarry'
}

if(obj){
    console.log(obj.name);
}
// obj가 존재 한다면 이 함수를 실행해라
// 아래의 코드 형식으로 많이 사용됨
obj &&console.log(obj.name)

{
    const jarry1={
        name:'Jarry',
        age:'28'
    };

    const name ="Jarry";
    const age='18';

    const jarry2 ={
        name:name,
        age:age,
    }
    // key와 value 가 동일하다면 하나로 통일 가능
    const jarry3 ={
        name,
        age
    }

    console.log(jarry1,jarry2,jarry3)
}

{
    const student ={
        name:'Anna',
        level:1
    }
    const {name,level} =student;
    console.log(name,level)

    const {name:studentName, level:studentLevel}=student;
    console.log(studentName,studentLevel)
}

const animals=['🐭','🐹']
{
    const first =animals[0];
    const second =animals[1];
    console.log(first,second)
}
{
    const [first,second]=animals;
    console.log(first,second);
}

{
    const obj1 ={key:'key1'}
    const obj2 ={key:'key2'}
    const array=[obj1,obj2]

    //array copy
    const arrayCopy =[...array]
    console.log(array);
    console.log(arrayCopy);

    const arrayCopy2 =[...array,{key:'key3'}]
    obj1.key='newKey';
    console.log(array, arrayCopy,arrayCopy2);

    const obj3 ={...obj1};
    console.log(obj3);
}

// Default parameters
{
    const printMessage = (message="default message") =>console.log(message)
    printMessage();
    printMessage('hihi');

}

const isCat =true;
{
    let component;
    if(isCat){
        component ='🐱'
    }else{
        component ='👩‍🔧';
    }
    console.log(component)
}

{
    const component =isCat ?'🐱':'👩‍🔧';
    console.log(component);
}
{
    const component = isCat && '🐱' || '👩‍🔧';
    console.log(component);
}

{
    const name =null;
    const userName =name || 'Guest';
    console.log(userName)
}
{
    const name =''
    const userName =name || 'Guest';
    console.log(userName);

    const num =0;
    const message=num || 'undefined';
    console.log(message);
}

{
    const name ='';
    const userName =name ?? 'Guest';
    console.log(userName)

    const num =0;
    const message =num ?? 'undefined';
    console.log(message);
}