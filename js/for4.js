document.write('<h3>test</h3>');
// 구구단 출력
// ex ) <p>3 * 1 = 3</p> ...
document.write('<section>');
for (let m = 2; m <= 9; m++) {
document.write(`<article class ="gugudan">`);
  for (let i = 1; i <= 9; i++) {
    document.write(`<p> ${m} * ${i} = ${m * i} </p>`);
  } // end of for
document.write('</article>');
}
// end of for
document.write('</section>');

let str = "";
// str+= "<div id = 'tDiv'>";
str += "<table class='table table-striped'>";
str += "<tbody>";
// table 방식의 표현법
for (let m = 2; m <= 9; m++) {
str += "<tr class ='gugudan'>";
  for (let i = 1; i <= 9; i++) {
    str += `<td><p> ${m} * ${i} = ${m * i} </p></td>`;
  } // end of for
str += "</tr>";
}
// end of for
str+="</tbody>";
str+="</table>";
//str += "</div>";
// end of table
document.write(str);


