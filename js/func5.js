// func 5


let names = ["홍길동", "박춘식", "김춘삼", "아리아나"];
let search = prompt('검색할 이름을 입력하세요.');
// for (let i=0; i<names.length; i++){
//   if(names[i] == search){console.log(`${search} (은/는) 존재하는 이름입니다`);}
//   else{alert(`검색하신 ${search} (은/는) 리스트에 존재하지 않습니다😅`); break;}
// }
let start = true , i= 0 , exist = false;
while (start){
  if(i == names.length){break;}
  if(search == names[i++]){
    exist = true; break;}
  else if (search.length == 0){alert('공백입니다 이름을 입력해주세요'); break;}
}
if(exist == true) alert(`검색하신 이름은 존재하는 이름입니다`);
else alert(`검색하신 이름은 존재하지 않는 이름입니다`);