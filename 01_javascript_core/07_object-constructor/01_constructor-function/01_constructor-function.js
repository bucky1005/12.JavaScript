/* 01. constructor-function() */

/* 1. 객체 리터럴 방식 */
const student1 = {
    name: '유관순',
    age: 16,
    getInfo: function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

const student2 = {
    name: '장발장',
    age: 18,
    getInfo: function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
} 

/* 객체 리터럴 방식으로 수백명의 학생 객체를 만들어야 된다면? 코드가 겁내 길어짐 */

/* 2. 생성자 함수 방식 */
/* 
  객체를 생성하기 위한 프로퍼티들을 하나의 템플릿 개념으로 생성자 함수로써 작성하면
  동일한 프로퍼티를 가지는 여러 객체들을 쉽게 생성해 낼 수 있다.
 */
function Student(name, age) {       // new를 붙이면 객체 생성, new 안쓰면 함수처럼도 사용 가
    console.log('생성자 함수 안의 this', this);

    /* 이 생성자 함수를 통해 생성될 객체가 this이다. */
    this.name = name;               // 함수의 매개변수를 의미
    this.age = age;
    this.getInfo = function() {

        /* 메소드를 호출한 객체가 this이다. */
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

const student3 = new Student('마동석', 44);
const student4 = new Student('장이수', 39);

/* 각 객체의 메소드 호출 */
console.log(student3.getInfo());
console.log(student4.getInfo());