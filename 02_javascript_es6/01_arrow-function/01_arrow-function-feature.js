/* 01. arrow-function-feature(화살표 함수의 특징) */

/* 1. 화살표 함수는 자체적으로 this를 가지지 않는다. (화살표 함수를 호출한 객체의ㅣ 의미가 아니다.) */
/* 객체의 메소드 안에서 동일한 객체의 프로퍼티를 대상으로 콜백 함수를 적용할 때 사용할 수 있다. */
let theater = {
    store: "강남점",
    titles: ["파묘", "Dune2", "웡카", "가여운 것들", "포켓몬스터"],

    showMovieList() {
        console.log(this.store);

        /*
          화살표 함수 사용(store의 값이 나옴)
          반드시 화살표함수를 사용해야 this.가 가리키는 객체가 theater가 되고, store에 값이 들어감.
          화살표 함수는 스스로를 가리키는 this를 사용할 수 없고, 자신보다 상위레벨(상위 스코프)에 있는 객체를 this로 가리키게 됨
         */
        /* forEach: Array에서 제공하는 메소드로 배열의 요소별로 돌아가면서 콜백 함수를 실행하는 함수 */
        this.titles.forEach(
            title => console.log(this.store + ": " + title)
            );

        /* 익명 함수의 this는 자기 자신을 가리키게 되므로 store에 아무런 값이 들어가지 않음. */
        // this.titles.forEach(
        //     function(title) {
        //         console.log(this.store + ": " + title);
        //     }
        // )
    }
}

theater.showMovieList();

/* 2. 화살표 함수는 new와 함께 호출할 수 없다. */
/* 생성자 함수로 쓰지 않는 일반 함수는 화살표 함수로 만든다. */
const arrowFunc = () => {};

const normalFunc = function() {

};

// new arrowFunc();         // arrow 함수는 객체를 생성할 수 없음.(에러 발생)
new normalFunc();           // 자바스크립트의 나머지 함수들은 모두 객체를 생성할 수 있음.

/* 3. 화살표 함수는 arguments를 지원하지 않는다. */
let test = function () {
    const arrowFunc = () => console.log(arguments);
    // console.log(arguments);
    arrowFunc(10, 20);
}

test(1, 2, 3, 4, 5);

/*
  화살표 함수는 다른 함수의 인수로 전달되어 콜백 함수로 사용되는 경우가 많다.
  위와 같은 특징들은 콜백 함수 내부의 this가 외부 함수의 this와 다르기 때문에 발생하는 문제를 해결하기위해
  의도적으로 설계된 것이라 할 수 있다.(arguments도 마찬가지)
  따라서 화살표 함수를 사용할 때는 어느정도 개념을 정확히 인지하고 써야한다.
 */