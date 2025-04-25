//varible2.js
let num1 = 100;
let r_num = 200;
let nameOfFriend = "홍길동";

let birthOfDate = new Date();
console.log(birthOfDate);

let isOK = true;
isOK = 10 < 5;

if (isOK) {
  // isOK 값이 True일 경우 {} 블럭 실행
  console.log('isOK는 진실입니다');
} else {
  console.log('isOK는 거짓입니다');
}

let numArr = [10, 20, 30, 31];

console.log(numArr[0]);

let strArr = ["Halo, nice", "good"];

//객체 Object 
let person = {
  name: "이웅재",
  age: 11,
  height: 111.2,
  weight: 20,
  personInfo:function() {console.log('이름은 '+person.name+' 입니다'+' 나이는 '+person.age+' 입니다');}
};
console.log(strArr);
console.log(person.name);
person.personInfo();

// undefined , null
let whatIsThis;
whatIsThis = document.querySelector('#uservalue'); // <<- id 오타로 인해 null 이 대입
console.log(whatIsThis); // 결과 콘솔창에  null 로 출력
