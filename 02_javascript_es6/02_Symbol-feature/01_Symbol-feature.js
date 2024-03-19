/* 01. Symbol-feature(심볼 특징) */

let student = {
    name: "홍길동",
};

let id = symbol("id");  //"id" 심볼 생성
student[id] = 1;

console.log(student);

/* 객체가 가진 프로퍼티 확인(Symbol로 만든 숨김 프로퍼티는 배제된다.) */
console.log(Objec.keys(student))
console.log(Object.getOwnPropertyDescriptor(student));

for(let key in student) {
    console.log(key);
}