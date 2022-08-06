document.getElementById("alert").onclick = function(){
//Input
var a = +document.getElementById("firstside").value;
var b = +document.getElementById("secondside").value;
var c = +document.getElementById("thirdside").value;


// Process 
var triangle = "";
if (a == b == c){
    triangle = "Đây là tam giác đều";
}
else if (a == b|| b == c|| a == c){
    triangle = "Đây là tam giác cân ";
  }
else if ( a*a == b*b + c*c ||
    b*b == a*a + c*c ||
    c*c == a*a + b*b){
triangle = "Đây là tam giác vuông"; 
}else{
    triangle = " Đây là tam giác thường "
}
// Output
document.getElementById("showResult").innerHTML = triangle;

};