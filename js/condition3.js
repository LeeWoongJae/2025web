// let result = parseInt(Math.random()*11);
// let result2 = Math.floor(Math.random()*11);
// let result3 = 30 + Math.floor(Math.random()*11);


let result4
// console.log(result);
// console.log(result2);
// console.log(result3);
console.log(result4);

for(let i=1 ;i<=10;i++ ){
  result4 = 30 + Math.floor(Math.random()*71);
  if(result4 >=90){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' A 등급'+' 😀축하합니다 합격입니다!');
    
  }else if(result4 >= 80){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' B 등급'+' 😀축하합니다 합격입니다!');
    
  }else if(result4 >=70){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' C 등급');

  }else if(result4 > 60){
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' D 등급');

  }else{
    console.log(i+'번째 학생은 '+ result4+' 점수를 맞아서'+' F 등급'+' 🚀집으로 돌아가세요');
    

  }
}

