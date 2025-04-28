// function 1 js
// 2개의 수를 더하고 , 큰값에 10을 더하고 , 작은 값에 5를 더한 후에 
// 합을 구하는 함수를 만든다
function calc(x, y) {
  if (x > y) {x += 10;y += 5;}
  else {x += 5;y += 10;}
  let result = x + y;
  // console.log(result);
  return result;
}

// while (1){
//   let num1 = parseInt(prompt('10이하의 수를 입력해주세요[단, 0을 입력시 종료]'));
//   if(num1 == 0) break;
//   let num2 = parseInt(prompt('10이하의 수를 입력해주세요[단, 0을 입력시 종료]'));
//   if(num2 == 0 ) break;
//   calc(num1, num2);
// }
let result = calc(4,2);
console.log(`결과값은 : ${result}`);
result = calc(7,6);
document.write(`${result}`);
result = calc(5,3);
document.querySelector('#result').value = result;

