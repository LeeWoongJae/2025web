window.onload;
// function 3exe
// 1. 함수이름은 max(10 ,7) => "두수 중에서 큰값은 10입니다"
// 2. sumUpTo(5) => "1ㅂ부터 5까지 합은 15입니다"
// 3. diff(34, 17) => "두수의 차이는 17입니다"


// 1번 문제 
console.log('-----------1번문제-------------');
document.write('-----------1번문제-------------');

function max(x, y) {
  if (x > y) {
    console.log("두 수중에서 큰 값은 " + x + " 입니다");
    document.write(`<p>두 수중에서 큰 값은 ${x} 입니다</p>`);
  } else if(x < y) {
    console.log("두 수중에서 큰 값은" + y + " 입니다");
    document.write(`<p>두 수중에서 큰 값은 ${y} 입니다</p>`);
  } else{
    console.log("두 수는 값이 동일합니다");
    document.write(`<p>두 수는 값이 동일합니다</p>`);
  }
}
max(10, 15);

console.log('-----------2번문제-------------');
document.write('-----------2번문제-------------');

function sumUpTo(x) { //2. sumUpTo(5) => "1부터 5까지 합은 15입니다"
  let sum = 0
  for (let i = 1; i <= x; i++) {
    sum += i;
  }
  console.log(`1 부터 ${x}까지 합은 ${sum} 입니다!`);
  document.write(`<p>1 부터 ${x}까지 합은 ${sum} 입니다!</p>`);
}
sumUpTo(5);

console.log('-----------3번문제-------------');
document.write('-----------3번문제-------------');

function diff(x, y) { // 3. diff(34, 17) => "두수의 차이는 17입니다"
  let result = 0;
  result = Math.abs(x - y);
  console.log(`두수의 차이는 ${result} 입니다`);
  document.write(`<p>두 수의 차이는 ${result} 입니다</p>`);
}
diff(34, 17);
// end of function