// func 6
// Array + obj
let num = 10,
  obj = {
    name: "kildong",
    age: 20,
    phone: "010-1111-2222",
    pets: [{
      name: "양양",
      age: 2,
      검진일: ['2025-01-2', '2025-03-11']
    }, {
      name: '멍멍이',
      age: 3,
      검진일: ['2025-12-12']
    }]
  };

console.log(obj.pets[1].검진일[0]);

// 배열 obj
let friends = [
  {name: 'kildong',age: 10,phone: '010-1111-2222'},
  {name: 'kilsim',age: 12,phone: '010-1111-3332'},
  {name: 'dudong',age: 9,phone: '010-3311-1122'}
];
let max = 0;
for (let i = 0; i < friends.length; i++) {
  if (max < friends[i].age) {
    max = friends[i].age;

  }
}console.log(max);