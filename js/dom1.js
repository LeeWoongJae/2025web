// dom1.js
// createElement() , appendChild() , setAttribute() , querySelector()

// Event
document.querySelector('#addBtn').addEventListener('click', addCallBack);
// funcName () vs funcName  : addEventListener '()' 를 추가하면 호출상관없이 페이지 로딩하면서 동시에 실행,
//                           '()' 를 추가 안하면 eventListener로 정의된 event를 실행하면 그때 순차진행
// console.log(addCallBack);
// console.log(document.querySelectorAll('ul button'));
document.querySelectorAll('ul button').forEach(function (item) {
  console.log(item);
  item.addEventListener('click', function () {
    item.parentElement.remove();
  });
});

// li 에 style 추가
document.querySelectorAll('li').forEach((item) => {
  item.addEventListener('mouseover', function () {
    item.style.backgroundColor = "cyan";
  });
  item.addEventListener('mouseout', function () {
    item.style.backgroundColor = "";
  });
});




function addCallBack() {
  let fruit = document.getElementById('fruit').value;
  let price = document.querySelector('#price').value;
  //잆력값이 있는지 체크
  if (!fruit || !price) {
    alert('값을 입력해주세요.');
    return;
  }

  let newlist = createLi(fruit, price);
  document.querySelector('ul').appendChild(newlist);
  document.getElementById('fruit').value = "";
  document.getElementById('price').value = 0;

};


function createLi(fruitName, fruitPrice) {
  let li = document.createElement('li');
  let span1 = document.createElement('span');
  span1.innerText = fruitName;
  let span2 = document.createElement('span');
  span2.innerText = fruitPrice + "won";
  let txt = document.createTextNode(" ");
  let delBtn = document.createElement('button');
  delBtn.innerText = "삭제";
  // delBtn.setAttribute('class', 'btn btn-danger'); // setAttribute 로 클래스및 속성을 추가할수있고
  delBtn.className = "btn btn-primary"; // .className 으로도 추가 가능



  delBtn.addEventListener('click', function () {
    delBtn.parentElement.remove();
  });

  li.appendChild(span1);
  span1.appendChild(txt);
  li.appendChild(span2);
  li.appendChild(delBtn);


  return li;
};

// document.querySelector('ul').appendChild(li);