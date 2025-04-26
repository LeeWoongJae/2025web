// condition6exe.js
// 1. 두 수를 입력을 받는다 prompt > 큰 값을 콘솔에 출력.
//  ex)  "두 수중에서 큰값은 29 입니다"

// 2. 임의의 두 수를 대입 > 40~70 정도의 범위를 생성 > 두 수중에서 "2개의 수중에서 큰값은 ?? , 작은 값은 ?? 입니다" 출력

// 3. condition3.js 에 "A","B","C"~"F"   90점 이상중에 95점이상이면 A+ 등급 부여 85점이상 B+ 같이 좀더 자세하게 

// 4. 반복문 537페이지 연습 (optional)


// 1번 숙제 시작
console.log("\t\t\t\t1번숙제 절취선\n---------------------------------------------------");

let a = 0; b=0;
// a = prompt("첫번째 수를 입력하세요 (최대 100)");
// b = prompt("두번째 수를 입력하세요 (최대 100)");
// console.log(a,b);
if (a > b){
    console.log("1번 숙제 >> 입력하신 두 수중에 큰 값은 "+ a + " 입니다");
}else if(a < b){
    console.log("1번 숙제 >> 입력하신 두 수중에 큰 값은 "+ b + " 입니다");
}else{
    console.log("1번 숙제 >> 두 수의 값이 서로 같습니다");
}
console.log("---------------------------------------------------");


console.log("\t\t\t\t2번숙제 절취선\n---------------------------------------------------");

// 2번 숙제 시작
let c = 0, d = 0 , e = 0;
// console.log(c,d);

c = 40+parseInt(Math.random()*31); // 40 + X 가 70이하로만 나오게 
d = 40+parseInt(Math.random()*31); 
e = parseInt(Math.random()*10);
console.log(">> Math.random() 확인용 e의 값은 : ["+e+"] << ");
if(c > d){
    console.log("2번 숙제 >> 생성된 두 수중에 큰 값은 "+c+" 입니다.");
}else{
    console.log("2번 숙제 >> 생성된 두 수중에 큰 값은 "+d+" 입니다.");
}
console.log("---------------------------------------------------");


console.log("\t\t\t\t3번숙제 절취선\n---------------------------------------------------");
// 3번 숙제 시작

let result4 = 0;
for(let i=1 ;i<=10;i++ ){
  result4 = 30 + Math.floor(Math.random()*71);
  if(result4 >= 95){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' A+ 등급'+' 😄 축하합니다 합격입니다!');
  }else if(95 > result4 >= 90){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' A 등급'+' 😀 축하합니다 합격입니다!');
  }else if(90 > result4 >= 85){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' B+ 등급'+' 😀 축하합니다 합격입니다!');
  }else if(85>result4 >= 80){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' B 등급'+' 😀 축하합니다 합격입니다!');
  }else if(80 > result4 >= 75){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' C+ 등급'+' 🙂 아슬아슬하니 조금더 분발해주세요!');
  }else if(result4 >=70){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' C 등급'+' 🙂 조금 부족하니 더 분발해주세요!');
  }else if(result4 > 60){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' D 등급'+' 😫 집중해서 다시 도전해봐요!');
  }else{
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' F 등급'+' 🚀집으로 돌아가세요');
  }
}
console.log("---------------------------------------------------");
