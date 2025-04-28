//for3
let sum = 0,
  cnt = 0
  ary = [];


for (let i = 1; i < 5; i++) {
  let inputValue = parseInt(prompt("1~10까지의 숫자를 입력하세요."));
  ary += [inputValue+" "];
  if (inputValue <= 10 && inputValue >= 1) {
    //alert('지정한 범위의 숫자만 입력해주세요!');
    cnt++;
    sum += inputValue;
    // continue;
   
  }

}
console.log("입력하신 숫자의 평균값은" + sum / cnt);
console.log(`입력하신 숫자의 합은 ${sum}`);
console.log("입력하신 숫자들은 "+ary);
