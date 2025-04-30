// obj1.js
// this => 1. 객체안에서 this는 객체자체를 가리킨다
//         2. 함수안에서 this는 window를 가리킨다
//         3. Event안에서 this는 이벤트가 존재하는 자신을 가리킨다
function sum() {
  console.log(this); // this 는 window를 가리킨다
}
sum();

let obj = {
  name: "kildong",
  age: 20,
  showName: function () {
    console.log(this);
    return `이름은 ${this.name}`; // this는 객체를 가리킨다
  },
  setName(name) { // == setName : function (name) { ~ }
    this.name = name;
  }
};
obj.setName('Zhone');
let result = obj.showName();
console.log(result);

// var date = new Date();
// console.log(date);

class Person {
  // name + age attribute 선언
  // showName() , setName() 메서드
  constructor(name, age) { // constructor : 생성자
    this.name = name;
    this.age = age;
  };

  showName() {return `이름은 ${this.name} 입니다.`;};
  setName(name) {this.name = name;};

  showAge(){return `나이는 ${this.age} 입니다`;};
  setAge(age){this.age = age;};
};
let kim = new Person('김정남' , 29); // new [Class ()][name()][Method] : instance 생성
kim.setName('홍준표');
kim.setAge(73);
console.log(kim.showName());
console.log(kim.showAge());


