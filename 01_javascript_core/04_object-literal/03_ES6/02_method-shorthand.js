/* 02_method-shorthand(메소드 단축) */

var dog = {
    name: '뽀삐',
    eat: function (food) {
        console.log(` ${food}를 먹어요`);
    }
};

dog.eat('사료');

/* ES6 이후부터는 메소드를 정의할 때 콜론(:)과 function 키워드를 생략한 축약 표현을 사용할 수 있다. */
var dog2 = {
    name: '뽀삐',
    eat: function (food) {
        console.log(` ${food}를 먹어요`);
    }
}

dog2.eat('멍푸치노');