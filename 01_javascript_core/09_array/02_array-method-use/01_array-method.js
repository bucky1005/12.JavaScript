/* 01. array-method(배열 메소드) */

const foodList = ['불고기', '치킨', '김치삼겹살', '해물파전', '짜장면', '불고기']

/* indexOf */
console.log(`foodList.indexOf('불고기):  + ${foodList.indexOf('불고기')}`);
console.log(`foodList.indexOf('김치삼겹살'): + ${foodList.indexOf('김치삼겹살')}`);

/* includes */
console.log(`foodList.includes('불고기'):  + ${foodList.includes('불고기')}`);
console.log(`foodList.includes('김치삼겹살'): + ${foodList.includes('김치삼겹살')}`);

const chineseFood = ['짜장면', '짬뽕', '탕수육'];

/* push */
chineseFood.push('팔보채');
chineseFood.push('양장피');


console.log(`push 후: ${chineseFood}`);

/* pop */
chineseFood.pop();

console.log(`chineseFood.pop(): ${chineseFood.pop()}`);
console.log(`chineseFood.pop(): ${chineseFood.pop()}`);
console.log(`pop 후 : ${chineseFood} `);

const chickenList = ['후라이트', '양념치킨', '파닭'];

/* unshift */
console.log(`chickenList.unshift(): ${chickenList.unshift('간장치킨')}`);
console.log(`chickenList.unshift(): ${chickenList.unshift('마늘치킨')}`);

console.log(`unshift 후: ${chickenList}`);

/* shift */
console.log(`chickenList.shift(): ${chickenList.shift()}`);
console.log(`shift 후: ${chickenList}`);

/* concat: 두 개 이상의 배열을 결합하여 새로운 배열을 반환(결합 순서도 유의미) */
const idol1 = ['서태지와 아이들', '소녀시대'];
const idol2 = ['샤이니', '하이라이트'];
const idol3 = ['에스파', '르세라핌'];

console.log(`idol1을 기준으로 idol2 배열을 concat: ${idol1.concat(idol2)}`);
console.log(`idol1을 기준으로 idol2 배열을 concat: ${idol1.concat(idol2)}`);
console.log(`idol3 기준으로 idol1, idol2 배열을 concat: ${idol3.concat(idol1, idol2)}`);

/* slice: 배열의 요소 선택 잘라내기 */
/* splice: 배열의 index 위치의 요소 제거 및 추가 */
const front = ['HTML', 'CSSM', 'JavaScript', 'Vue'];

console.log(`front ${front.slice(1, 3)}`);
console.log(`front ${front}`);

/* splice(인덱스, 제거할 길이, 추가할 값1, 추가할 값2, ...) */
console.log(`front.splice(3, 1, "JDBC"):  ${front.splice(3, 1, "JDBC")}`);

/* join: 배열을 우리가 원하는 구분자와 함께 결합하여 문자열로 반환 */
const snackList = ['사탕', '초콜릿', '껌', '마이쮸'];
console.log(`snackList.join(): ${snackList.join()}`);
console.log(`snackList.join('/'): ${snackList.join('/')}`);