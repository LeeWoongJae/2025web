// object5
// date 
let now = new Date();
now = new Date("01/01/2025");
console.log(now.getDay());
// 요일 : 0 ~ 6

console.log(now.getDate()+" 은/는 "+getKorDay(now.getDay())+" 입니다");

function getKorDay(day = 1) {
  switch (day) {
    case 0: return '일요일';
    case 1: return '월요일';
    case 2: return '화요일';
    case 3: return '수요일';
    case 4: return '목요일';
    case 5: return '금요일';
    case 6: return '토요일';
  }
}
now.setDate(21);