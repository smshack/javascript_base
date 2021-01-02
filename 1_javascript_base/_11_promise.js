'use strict'

//## 1. Producer (생산자)

//새 Promise가 생성되면 executor라는 콜백함수가 자동으로 실행됩니다. (코딩 할 때 조심!!)
const promise = new Promise((resolve, reject) => {
    // 시간이 오래 걸리는 무거운 처리 (network, read files ..)
    console.log(`doing something...`);
    setTimeout(() => {
      resolve(`ellie`); // 성공 하면
      // reject(new Error(`no network`)); // 실패 하면
    }, 2000);
  });

  //## 2. Consumer (소비자)
//- then, catch, finally

promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => { // 성공하든 실패하든 마지막에 실행됨
    console.log(`finally`);
  })

//   ## 3. Promise chaining(연결하기)
// - then은 값을 바로 전달 할 수 도 있고, 리턴으로 Promise를 전달해도 된다.
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
  
  fetchNumber
    .then(num => {
      return num * 2; // > 2
    })
    .then(num => num * 3) // > 6
    .then(num => { // > 5
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      });
    })
    .then(num => console.log(num)); // > 5

//     ## 4. Error handling

// - catch 로 error를 헨들링 할 수 있다
// - error가 발행해도 catch를 이용하면 전체적인 Promise 체인에 문제가 발생하지 않도록 빵꾸처리를 할 수 있다.

const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🐓`), 1000);
    // setTimeout(() => reject(new Error(`error! 🐓`)), 1000);
  });
};
const getEgg = hen =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍗`), 1000);
    // setTimeout(() => reject(new Error(`error! ${egg} => 🍗`)), 1000);
  });

getHen()
  .catch(error => {
    console.log(error);
    return `💀`; // 빵꾸처리
  })
  .then(hen => getEgg(hen))
  .catch(error => {
    console.log(error);
    return `💀`; // 빵꾸처리
  })
  .then(egg => cook(egg))
  .catch(error => {
    console.log(error);
    return `💀`; // 빵꾸처리
  })
  .then(result => console.log(result))
  .catch(error => {
    console.log(error);
  })

// 정직한 코드
// getHen()
//   .then((hen) => {
//     return getEgg(hen);
//   })
//   .then((egg) => {
//     return cook(egg);
//   })
//   .then((result) => {
//     console.log(result);
//   })

// 파라미터가 1개일때 함수이름만 쓰면, 암묵적으로 함수의 매개변수로 전달 됨.
// getHen()
//   .then(getEgg)
//   .then(cook)
//   .then(console.log);


// ## 5. callback to promise

// - 콜백 지옥 코드 수정
// - 콜백함수를 인자로 전달 안해도 됨!!


class UserStorage {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            (id === `ellie` && password === `123`) ||
            (id === `gunwoo` && password === `1104`)
          ) {
            resolve(id);
          } else {
            reject(new Error(`not found`));
          }
        }, 2000);
      });
    }
  
    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === `ellie`) resolve({ name: `ellie`, role: `admin` });
          else reject(new Error(`no access`));
        }, 1000);
      });
    }
  }
  
  const id = prompt(`enter your id`);
  const password = prompt(`enter your password`);
  
  const userStorage = new UserStorage();
  userStorage // 겁나 깔끔 😋
    .loginUser(id, password)
    .then(user =>  userStorage.getRoles(user))
    .then(userInfo => alert(`name: ${userInfo.name}, role: ${userInfo.role}`))
    .catch(error => console.log(error));