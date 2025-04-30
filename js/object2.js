// obj2.js
// 관련 메소드 : push , pop , unshift , shift , forEach

let arr1 = [1,2,3]; // new Array();
arr1[3] = 4;
arr1.push(5);
arr1.unshift(6);
arr1.pop();
arr1.shift();
arr1.splice(1, 1, 55, 12, 18); // 1 ind , 0 delCount , add value or items[]

// every
let result = arr1.every(function(item , ind , ary){
  return item % 2 == 1; // [every모든] item 의 값들이 조건에 충족해야 True 반환
});
console.log(result);

// some
let result1 = arr1.some((item) => //allow func [실행구문이 1개 뿐이라면 '{' , '}' ,  return 삭제 ]
   item % 2 == 1 // [some하나이상] item 의 값들이 조건에 충족해야 True 반환
);
console.log(result1);


arr1.forEach(function(item  ,ind, ary){
  // annoymous func
  console.log(item, ind);


});


// console.log(arr1);
