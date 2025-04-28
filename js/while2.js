// while2 
// 사용자에게 1 ~ 10 까지 임의의 수를 입력하도록 요청 입력
// 범위 이외의 수가 들어오면 바로 종료 , 입력했던 값들의 합을 콘솔출력
let sum = 0 , sumArr=[];
while (1){
  let answer = parseInt(prompt('1 ~ 10 까지의 수를 입력해주세요'));
  sumArr += answer+" ";
  sum += answer;
  if(1> answer || answer > 10) break;
  
  
}
console.log('입력하셨던 숫자들은 : '+sumArr);
console.log('----------------------------------------\n');
console.log('값을 합산합니다... \n\n 입력하셨던 값들의 합은 : '+sum+' 입니다!');