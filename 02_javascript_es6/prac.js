/* 정규표현식 사용 */

let target = 1;
console.log(target.match(/[2-4]+/g));

let target2 = 'asdfqwerasdfq';
console.log(target2.match(/[a-zA-Z]+/g));

/*
숫자만 2~4 => /\d{2, 4}/gi
영문자만 최소 10개 => /[a-z]{10, }/gi
한글만 2~10 => /[가-힣]{2, 10}/gi
영어 & 숫자만 1자 이상 => /\w+/gi
E-mail형태 => /\w+@[a-z]+.(net|com)/gi
일반전화 => /(02|0[3-6]\d)-\d{3,4}-\d{4}/gi
휴대폰 =>  /010-\d{3,4}-\d{4}/gi
주민등록번호 => /[0-9]{6}-[1-4]\d{6}/gi
 */