/* 02. method */
/* 자바 스크립트의 함수는 객체이다. 함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수도 있다. */

var name = '사모예드';

// 리터럴 객체(함수를 포함한 프로퍼티는 객체라고 한다.)
var dog = {
    name: '뽀삐',           // 데이터를 프로퍼티 key와 value 형태로 저장
    eat: function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);      // 메소드에서의 this는 메소드를 호출한 객체를 뜻함.
        console.log(`${name}(은)는 ${food}를 맛있게 먹어요`);      // this를 생략한 경우 전역 변수를 뜻함.

        return '다 먹었네';
    }
};  // 리터럴 객체는 ';'를 붙이는 것이 원칙

food = '오리 목뼈';

console.log(dog.eat('사료'));             // this가 의미하는 dog는 해당 라인의 dog임.