//for 2
// 1 ~ 10 cycle 
// 2의 배수 3의 배수
// 2의 배수는 sum2 변수에 저장
// 3의 배수는 sum3 변수에
let
  sum1 = 0
sum2 = 0,
  sum3 = [],
  sum4 = [],
  least = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0 && i % 3 == 0) {
    least = i;
    console.log("최소공배수는 \t\t[" + i + "] ");
    sum1 += i;
    sum3 += ["  " + i];
    sum2 += i;
    sum4 += ["  " + i];
  } else if (i % 2 == 0) {
    sum1 += i;
    sum3 += ["  " + i];
  } else if (i % 3 == 0) {
    sum2 += i;
    sum4 += ["  " + i];
  }
}
console.log("2의 배수 들은 " + sum3 + " 이고 합은 " + sum1);
console.log("3의 배수 들은 " + sum4 + " 이고 합은 " + sum2);