//filter() 조건에 맞춰서 반환값을 가짐 / forEach()는 반환값 없이 실행
// console.log(screen.availWidth);

let numAry = [20, 11, 33, 50, 68, 71, 2];
let filterAry = numAry.filter((item, idx, ary) => {
  if (item % 2 == 0) {
    return true;
  }
});
console.log(filterAry);

// salary 가 5000 이 넘는 사원들을 empAry에 저장
let data = JSON.parse(json);
let empAry = [];

// for (let emp of data){
  // console.log(emp.salary);
      empAry = data.filter((item) => {
        if(item.salary >= 5000) return true // == return empAry += item
    })
  // };
console.log(empAry);

