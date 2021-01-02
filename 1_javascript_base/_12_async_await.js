'use strict'

// # async & await

// - 프로미스 체이닝을 계속 하다보면 코드의 가독성이 떨어짐
// - async 와 await는 Promise를 간결/간편하고 동기적으로 실행되는것 처럼 보이게 만들어주는 API
// - async 와 await는 새로운 것이 추가 된게 아니라, 기존에 존재하는 Promise 위에 조금 더 간편한 API를 제공함 이런 것을 syntactic sugar 라고 한다 (Class도 마찬가지..)

// # 비동기 처리를 반드시 해야하는 이유

// - JS 엔진은 블록({})안에 코드를 동기적으로 실행(처리) 함
// - 시간이 오래 걸리는 코드를 비동기 처리를 전혀 하지 않으면, 다음 코드에 문제가 발생할 수 있음
// - 예를 들어 서버에서 data를 받아와서 웹페이지에 출력하는 시나리오가 있다
// - data를 받아 오는데 10초가 걸림, 근데 비동기 처리를 안하면 텅 빈 data를 출력 해버림
// - **Promise 상황극**: 내가 언제 유저의 data를 받아 올진 모르겠지만 내가 약속할께, Promise라는 object를 가지고 있으면, 여기에 니가 then 이라는 콜백함수만 등록해 놓으면, 유저의 data가 준비 되는대로 니가 등록한 콜백함수를 불러줄께

// 1. async
// 1.1 기존 방식(Promise)
// 프로미스를 사용하면 반드시 resolve와 reject를 호출해야 함
function fetchUser() {
    return new Promise((resolve, reject) => {
      // return `ellie`; // 프로미스 pending 상태
          resolve(`ellie`); // 프로미스 fulfilled 상태
          // reject(new Error(`error`)); // 프로미스 rejected 상태
    });
  }
  
  const user = fetchUser();
  // console.log(user);
  user.then(user => console.log(user));

//   ### 1.2 async 사용

// - async를 사용하면 함수의 코드 블록이 자동으로 Promise로 변환이 되어짐 (대박!)
// 1. 함수 선언식
async function fetchUser2() {
    return `ellie`;
  }
  
  // 2. 함수 표현식
  const fetchUser3 = async function() {
    return `ellie`;
  };
  
  // 3. 화살표 함수
  const fetchUser4 = async () => {
    return `ellie`;
  };
  
  // fetchUser().then(data => console.log(data)); // 함수로 바로 호출
  const user2 = fetchUser4(); // 변수에 할당해서 호출
  user2.then(data => console.log(data));
  console.log(user2);


  // 2. await
  function delay(ms){
      return new Promise(resolve =>setTimeout(resolve,ms))
  }

  async function getApple(){
      await delay(3000)
      return '🍎'
  }

  async function getBanana(){
      await delay(3000)
      return '🍌'
  }

//   function pickFruits(){
//       return getApple()
//       .then(apple=>{
//           return getBanana().then(banana=> `${apple}+${banana}`)
//       });
//   }

const pickFruits= async () =>{
   const applePromise =getApple();
   const bananaPromise = getBanana();
   const apple = await applePromise;
   const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
  pickFruits().then(console.log)


  // 3. useful Promise APIs

  const picAllFruits = () =>
  Promise.all([getApple(), getBanana()])
  .then(fruits=>fruits.join(' + '))

  picAllFruits().then(console.log)

  const pickOnlyOne = () => Promise.race([getApple(),getBanana()]);
  pickOnlyOne().then(console.log)