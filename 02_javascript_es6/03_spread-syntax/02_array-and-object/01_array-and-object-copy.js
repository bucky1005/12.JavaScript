/* 01. 01_array-and-object-copy(스프레드 문법을 이용한 배열 객체 복사) */

/* 1. 배열 복사 */
let arr = [10, 30, 20];
let arrCopy = [...arr];         // 스프레드 문법을 활용한 깊은 복사

console.log(arr);
console.log(arrCopy);
console.log(arr === arrCopy);

/* 2. 객체 복사 */
let obj = { name: '홍길동', age: 20, addr: '서울시', hobby: ['축구', '야구'] };
let objcopy1 = {...obj };
let age = 30;
let name = '고길동'
let objCopy = {...obj, age, name};    // ...obj는 전개연산자이면서 나머지 연산자의 역할을 하기도 함.

console.log(obj);
console.log(objcopy1);
console.log(objCopy);
console.log(obj === objCopy);