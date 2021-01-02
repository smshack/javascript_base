'use strict';

console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
console.log(3);

// 나중에 다시 불러서 사용하는 함수
// 콜백

// 즉각적으로 사용하는 콜백
const printImmediately = (print) => {
    print();
}

printImmediately(() => console.log('hello'))

// 비동기 적으로 처리해야 되는 콜랙

const printWithDelay = (print, timeout) => {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === `ellie` && password === `123`) ||
          (id === `gunwoo` && password === `1104`)
        ) {
          onSuccess(id);
        } else {
          onError(new Error(`not found`));
        }
      }, 2000);
    }
  
    getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === `ellie`) {
          onSuccess({ name: `ellie`, role: `admin` });
        } else {
          onError(new Error(`no access`));
        }
      }, 1000);
    }
  }
  
  
  const id = prompt(`enter your id`);
  const password = prompt(`enter your password`);
  
  const userStorage = new UserStorage();
  userStorage.loginUser(
    id,
    password,
    user => {
      userStorage.getRoles(
        user,
        userInfo => {
          alert(`name: ${userInfo.name}, role: ${userInfo.name}`);
        },
        error => {
          console.log(error);
        }
      );
    },
    error => {
      console.log(error);
    }
  );