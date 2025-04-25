let isTrue = true;
let num = 5;
let num1 = 4;
isTrue = num > 5; // false

isTrue = (--num >= 4) || (num1++ == 5) // isTrue = (--num >= 4) && (num1++ == 5)

if (isTrue){
  console.log('True');
}else{
  console.log('false');
}