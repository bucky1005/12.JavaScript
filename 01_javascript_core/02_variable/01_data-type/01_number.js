/*
  data-type은 값의 종류를 말하며 자바스크립트(ES6)는 7개의 데이터타입
  (string, number, boolean, symbol, undefined, null, object)을 제공한다.
 */

/* 01. 숫자 타입 */
/* 정수, 실수, 음수 모두 숫자(number) 타입이다. (내부적으로는 실수로만 인식) */
var integer = 10;
var double = 5.5;
var negatie = -10;

console.log(typeof integer);
console.log(typeof double);
console.log(typeof negatie);

console.log(10 / 4);


/*
  숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
  Infinity: 양의 무한대
  -Infinity: 음의 무한대
  NaN: 산술 연산 불가(not a number)
 */
console.log(10 / 0);          // 0을 실제 0으로 인식하지 않고, 0.0000.... 의 매우 작은 수로 인식하기 때문에 연산의 결과값이 infinity로 출력된다.
console.log(10 / -0);         // 결과값: -infinity
console.log(1 * '문자열');    // 결과값: NaN, 문자열은 홀따움표(') 또는 쌍따옴표(") 모두 사용 가능하다.