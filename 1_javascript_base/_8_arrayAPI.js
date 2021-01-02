'use strict'

// Q1. make a string out of an array
//주어진 배열을 string으로 변경
//join API 사용할 것
// join 안에 원하는 구분자를 넣어줄 수 있음
{
    const fruits = ['apple', 'banana', 'orange'];
    const result =fruits.join(' | ');
    console.log(result)

  }
  
  // Q2. make an array out of a string
  // split
  // 문자열을 배열로 만들기
  // 구분자를 지정해줘야 함
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result =fruits.split(',',2);
    console.log(result)
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
//reverse 배열을 반대로
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array);
    const copy = {...array}
    const result =array.reverse();
    console.log(result);
    console.log(array);
    console.log(copy)
  }
  
  // Q4. make new array without the first two elements
  //splice
  {
    const array = [1, 2, 3, 4, 5];
    const result =array.splice(0,2);
    console.log(array)
    console.log(result)
  }
  //slice
  {
    const array = [1, 2, 3, 4, 5];
    const result =array.slice(2,5);
    console.log(array)
    console.log(result)
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find((student,index) =>student.score === 90)
      console.log(result)
  }
  
  // Q6. make an array of enrolled students
  {
      const result =students.filter((student)=>student.score <90)
      console.log(result)
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // 배열 요소 한가지 한가지들을 새로운 값으로 변경
  {
      const result =students.map((student)=>student.score)
      console.log(result)
      const copy = [...students];
      const result2 =copy.map((student)=>student)
      console.log(result2)
  }
  
  // Q8. check if there is a student with the score lower than 50
  // 조건에 만족하는 값이 하나라도 있으면 true
  {
      const result =students.some((student) =>student.score <50);
      console.log(result);
  }
  console.log('-----')
  
  // Q9. compute students' average score
  // 원하는 시작점 부터 원하는 값을 누적할 때 사용
  // 평균 값을 구하기
  {
    //   const result =students.reduce((prev, curr)=>{
    //       console.log(prev);
    //       console.log(curr);
    //       console.log('-----')
    //       return prev+curr.score;
    //   },0)
    const result =students.reduce((prev,curr) => prev + curr.score,0)
      console.log(result/students.length)

  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result =students.map((student) =>student.score)
      .filter(score => score >=50)
      .join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  // 정렬
  {
      const result = students.map(student => student.score)
      .sort((a,b) => a-b)
      .join();
      console.log(result)
  }

  // 