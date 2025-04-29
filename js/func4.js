// function 4.js


// 함수 + 반복문 + 배열
let num = 10;
let numArr = [1, 2]; // 0 1 2 3 4 ... n 번째 index
numArr[2] = 20;
numArr[3] = 50;
numArr[4] = 70;
numArr[5] = 90;
numArr[6] = 60;
console.log(numArr[2]);
console.log(numArr[3]);
console.log(`배열의 크기 : ${numArr.length}`); // 해당 배열의 크기


// Array  +  for 
for (let i = 0; i < numArr.length; i++) {
  console.log(`[i]의 값 : ${i} , 배열의 값 : ${numArr[i]}`);
}

// 배열의 값을 연산가능 
console.log(`numArr[6] - numArr[2] => [ ${numArr[6] - numArr[2]} ]`);

// 배열의 요소의 합
let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  sum += numArr[(i)]; // i 번째의 배열안에 값이 계속 합연산된다
  i++;
}
console.log(`for 문 합한 결과 => ${sum}`);

// 배열 명 ages[] => 친구들의 나이를 담아둠 => [21,22,33,24,25,26]
// 배열의값중 나이가 많은 사람을 찾아내는 것 + 점차적으로 나이순 대로 정렬

let ages = [22, 23, 30, 32, 25, 26];
let maxAge = 0;
let minAge = 0;
for (let i = 0; i < ages.length; i++) { // [22, 23, 30, 32, 25, 26];
  
  if (ages[i] > ages[i+1]) {
    minAge = ages[i];
    // console.log(minAge);
    ages[i] = ages[i+1];
    ages[i+1] = minAge;
    console.log(ages[i]);
  }
  
}
console.log(`나이 순서대로 정렬 => ${ages}`);

// Function getMax();
function getMax(param = []){
  for (let i = 0; i < param.length; i++) {
    if (maxAge < param[i]) {
      maxAge = param[i];
    }
  }
  console.log(`나이가 제일 많은 것은 => ${maxAge}`);
}
getMax(ages);

// minVal(매개값 배열)
// 제일 작은 값을 반환 return val;
let min = 1000;
function getMinVal(param1 = []){
  for (let i = 0; i < param1.length; i++){
    console.log(i , param1[i]);
    if(min > param1[i])
      {
        min = param1[i];

      }
    // console.log(result);
  }
  return min;
}
let result = getMinVal([20, 28, 22, 30]);
console.log(`결과는 ${result}`);
