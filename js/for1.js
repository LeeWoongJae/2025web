// for1.js
let sum = 0;
for (let i = 0; i < 6; i++) {
  // 0~5까지 증감식을 적는다
  //  1) 초기값 2> 조건식  3> 증감식
  sum += i;
  console.log("현재의 I의 값은 : " + i);
  console.log("SUM의 값은 : " + sum);
}
console.log("-----------------------\n");

console.log("1~5까지 더한 SUM의 값은 : " + sum);

console.log("------------------------\n");

// 1~20 까지 반복 => 짝수인 경우 합을 구하고 싶음.
sum = 0;
let even = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    sum += i;
    even += ["\t"+i];
  }
}
console.log("짝수인 경우의 합은 : " + sum);

console.log("짝수 배열은 : " + even);
