/* 01. property */
/* 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다. */

var obj =  {
    normal: 'normal value',
    '@ s p a c e @': 'space value',     // 띄어쓰기나 특수 기호(_, $ 제외)를 사용하면 홀따옴표(')로 
                                        // 프로퍼티명을 지정해야 한다.
    '': '',                             // 빈문자열도 가능하나 권장하지 않는다.
    0: 1,                               // 숫자인 프로퍼티 키는 내부적으로 문자열로 바뀐다.
    var: 'var',                         // 예약어도 프로퍼티 키로 사용 가능하나 권장하지 않는다.
    normal: 'new value'                 // 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가
                                        // 기존 프로퍼티를 덮어쓴다.
};

console.log(obj);

/* 동적 프로퍼티 추가 구문(기존에 없는 프로퍼티에 접근하면 프로퍼티가 생성된다.) */
obj.test = 'test value';
// obj['test'] = 'test value';     // 아래 두 줄과 동일한 코드

// var key = 'test';
// obj[key] = 'test value';

console.log(obj.test);
console.log(obj.normal);