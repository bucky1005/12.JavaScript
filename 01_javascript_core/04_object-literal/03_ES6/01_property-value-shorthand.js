/* 01. property-value-shorthand(프로퍼티 값 단축 구문) */

var id = 'p-0001';
var price = 30000;

var product1 = {
    id: id,
    price: price
};
console.log(product1);

/*
  ES6에서는 프로퍼티 값으로 변수를 사용하는 경우
  변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다.
  프로퍼티 키는 변수 이름과 일치되게 자동으로 생성된다.
 */
var product2 = {id, price};     // product1과 동일한 구문
console.log(product2);