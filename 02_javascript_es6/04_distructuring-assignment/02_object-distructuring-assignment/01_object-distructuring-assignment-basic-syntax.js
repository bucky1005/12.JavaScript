/* 01. object-distructuring-assignment-basic-syntax(객체 구조 분해 할당 기본 문법) */

let pants = {
    productName: '배기팬츠',
    color: '검정색',
    price: 30000,
    getInfo() {
        console.log(this.productName, 'Baggie jeans~');
    }
};

// let productName = pants.productName;
// let color = pants.color;
// let price = pants.price;

// let {productName, color, price} = pants;
let {color, productName, getInfo} = pants;        // 해당 객체가 가진 변수명과 일치하는 변수명을 사용하면 알아서 매칭해줌.

console.log(productName, color);

console.log(getInfo);
getInfo();

/* 객체 구조분해 할당으로 꺼낸 변수 대신 다른걸 쓰고 싶다면.. */
let {color: co, prive: pr, productName: pn} = pants;
console.log(co, pr, pn);