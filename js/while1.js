// 1~10 까지 값중에서 홀수값만 콘솔에 출력.(for)

// for (let i = 1; i < 11; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// } // end of for

// 조건이 만족하는 동안 반복 횟수는 상관없이
// let num = 1;
// while (1) {
//   if (num % 2 == 1) console.log(num);
//   num++;
//   if (num > 10) break;
// }

  // 0~ 100사이 임의의 값을 생성 , 50보다 작은 값이 나오면 종료
  let ran = 0;
while(1){
  ran = Math.floor(Math.random()*101);
  if (ran < 50 )
      break; 

  console.log(ran);
}
// end of program
console.log(ran+" 프로그램 종료");