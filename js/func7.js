// function 7

console.log(typeof friends);
// console.log(typeof friend);

let friend ={
  name : "min",
  age : 20,
  phone : '010-2222-5523'
};
// for .. in
for (let prop in friend){
  console.log(`${prop}, val ${friend[prop]}`); // 객체이지만 배열처럼 순서가 있고 속성과 값이 가지고있어서 
}




//makeRow(friend={})
function makeRow(friend={name, age, phone}){
  let str ="";
 
  str += "<tr>";
  // str += `<td>${friend.name}</td>`;
  // str += `<td>${friend.age}</td>`;
  // str += `<td>${friend.phone}</td>`;
  for (let prop in friend){
    str += `<td>${friend[prop]}</td>`;
  }
  str += `</tr>`;
  return str;
}
let titles = ["이름" , "나이" , "연락처"];
console.log(Array.isArray(titles)); // 배열인지 아닌지 구분
let tlist="";
tlist += "<table class = 'table'>";
tlist += "<thead>";
for (let prop in titles){ // 배열 안 속성만큼 가져온다 !!
  tlist += `<th>${titles[prop]}</th>`;
}
tlist += "</thead>";



tlist += "<tbody>";
// 데이터 생성
// for (let i=0; i<firends.length; i++){
// tlist += makeRow(firends[i]);}
   
for (let friend of friends){ // 배열 만큼 반복.
  tlist += makeRow (friend);
}

tlist += "</tbody>";
tlist += "</table>";
document.write(tlist);