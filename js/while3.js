//while 3
// 친구이름 입력을 받습니다
// 종료 문구는 quit 문구를 받으면 종료.


// 화면 요소 삭제 함수
function removeElement(param){
  console.dir(param.target.parentElement.parentElement);
  //  파라메터 기준을 타겟은 버튼이고 상위는 TD 이고 그 상위는 TR 이므로 
  param.target.parentElement.parentElement.remove();
  // param.target.remove();
  // return 
}


let str = "";

str += "<table class = 'table'><tbody>";
while (1) {
  str += "<tr>";
  let name = prompt('기입하실 이름을 입력해주세요 [단, quit 입력시 프로그램 종료!]');
  if (name.toLowerCase() == "quit") break;
  str += `<td>${name}</td><td><button onclick="removeElement(event)" class = 'btn btn-danger'>삭제</button></tr>`;
}
str += "</tbody></table>";
document.write(str);

