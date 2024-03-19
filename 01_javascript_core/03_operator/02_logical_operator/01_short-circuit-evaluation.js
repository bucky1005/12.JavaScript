/* 01. short-circuit-evaluation(논리 연산자) */

/* 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것 */

/* 1. OR의 경우 */
console.log('apple' || 'banana');   // apple, true || true 인 셈으로 apple이 이미 true이므로 banana는 생략한다.
console.log('' || 'banana');        // banana
console.log('apple' || false); 

/* 2. And의 경우 */
console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);

var num = 1;

if(num % 2 == 0) {
    console.log('짝수입니다.');
} else {
    console.log('홀수입니다.');
}

/* 단축 평가를 활용하여 같은 결과를 얻을 수 있다. */
num % 2 == 0 && console.log('짝수입니다.');         // &&는 왼쪽이 맞으면 오른쪽이 실행
num % 2 == 0 || console.log('홀수입니다.');         // ||는 왼쪽이 틀리면 오른쪽이 실행
