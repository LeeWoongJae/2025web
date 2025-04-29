// func8 js
// console.log(json);
// JSON.parse vs JSON.stringify 

let data = JSON.parse(json); // json 문자열을 객체로 변환
console.log(data);
console.clear();


// 버튼 삭제 templete
let btnTemplete = "<button class='btn btn-danger' onclick='delTr(event)'>삭제</button>";

// 속성 
let fields = ['id', 'gender', 'first_name' , 'salary','email'];

// emp_list 를 출력 (table)
let elist = "<table class='table'><thead><tr>";
for(let field of fields){
  elist += `<th>${field}</th>`;
}
elist+="</thead><tbody>";
for (let emp of data) {
  // console.log(emp);
  elist += makeTr(emp);
}
elist+="</tbody></table>";
document.write(elist);

// ----------------------------------------------------
// Event
// Button Click Event
document.querySelector('button.btn-primary')//
          .addEventListener('click' , function(){
            // 입력값
            let searchGen = document.querySelector('#userGender').value;
            let elist = "";
            for (let emp of data){
              if(searchGen.toLowerCase() == 'all' || searchGen == emp.gender){
                elist += makeTr(emp);
              }
            }
            document.querySelector('table.table>tbody').innerHTML = elist;
          });
// select 안의 값이 input
document.querySelector('select#selectGen').addEventListener('change' , function(){
  let selectGen = document.querySelector('#selectGen').value;
  // console.log(document.querySelector('#selectGen').value);
  elist = "";
  for (let emp of data){
    if(selectGen.toLowerCase() == 'all' || selectGen == emp.gender){
      elist += makeTr(emp);
      // console.log(elist);
    }
  }
  document.querySelector('table.table>tbody').innerHTML = elist;
});







// function delTr(emp = {}){

// }

function makeTr(emp={}){ // tr 생성 함수
  let str = "<tr>";
  for(let field of fields){
    // console.log(emp[field]);
    str += `<td>${emp[field]}</td>`;
  }
  str += `<td>${btnTemplete}</td>`;
  str += "</tr>";
  return str;
} // end of makeTr
