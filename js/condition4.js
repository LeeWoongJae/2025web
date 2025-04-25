// 1~10 임의의 값을 생성 > 변수에 저장 > 값이 2의 배수인지 3의 배수인지 
//  2와 3의 배수가 아닌 수가 나올경우 구분하는 조건문을 만들고 출력을 "2의 배수입니다" "3의 배수입니다" 등등 출력

let ranNum = parseInt(1 + Math.random() * 10);

if (ranNum % 2 == 0) {
  console.log('2의 배수 입니다 \t' + ranNum);
} else if (ranNum % 3 == 0) {
  console.log('3의 배수 입니다 \t' + ranNum);
} else {
  console.log('2와 3의 배수가 아닙니다!', +'\t' + ranNum);
}

let a = 10.01
console.log(a);
a = parseInt(a);
console.log(a);