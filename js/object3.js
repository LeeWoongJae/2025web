// indexOf()

let numArr = [10, 20, 33, 54, 16, 74];
let result = numArr.indexOf(33); // 찾을 값 또는 요소가 존재하지 않는 경우 -1 반환
console.log(result);

console.log("--------------------------");

let strAry = ['kildong-hong', 'kilsong-kim', 'dong-you'];
strAry.forEach( function (item){
  if(item.indexOf("dong-") != -1){ // 값에 kildong이 들어간 요소들의 index가 존재하는것만 출력
    console.log(item);
  }
  
});
console.log("---------------------------");

// numArr(variable) => 10 ~ 50 사이의 값을 10개를 지정. 
// => console 출력 => forEach를 사용해서 출력
let numArr1 = [];
for (let i = 0 ; i < 10 ; i++){
  numArr1.push(Math.floor(Math.random()*41)+10);
}

// numArr1 = [11, 22, 7];
let resultArr = numArr1.every((item) => // == (function (item) { ~ });
  item >= 10 && item <= 50 // == return item >= 10 && item <= 50
);
console.log(resultArr);


numArr1.forEach((item) => console.log(item));