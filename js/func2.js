// func 2
// window.onload;

function calc(n1 = 0, n2 = 0) { // 초기값지정으로 만약 파라메터를 따로 지정 안했다면 기본값으로 0으로 처리
  let result = 0;
  result = n1 + n2;
  return result;
}
console.log(calc(10));



function printStar(param) {
  let str = "";
  for (let i = 1; i <= param; i++) {
    str += '⭐';
  }
  console.log(str);
}
printStar(3);



// 구구단을 출력하는 함수
function printGugudan(dan = 2) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
    document.write(`<p>${dan} * ${i} = ${dan * i}</p>`);

  }
}
printGugudan(3);