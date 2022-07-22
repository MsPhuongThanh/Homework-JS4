function triangle(){
//khai báo biến 
var a = +document.getElementById("firstside").value*1;
var b = +document.getElementById("secondside").value*1;
var c = +document.getElementById("thirdside").value*1;


// Xử lý 

if (a===b===c){
    document.getElementById("alert").innerHTML = "<p>" +Tam giác đều+ "</p>";
}
else if (a===b|| b===c|| a===c){
    document.getElementById("alert").innerHTML = "<p>" +Tam giác cân+ "</p>";
  }

if ( Math.pow(a, 2) == Math.pow(b, 2)+ Math.pow(c, 2)){
    document.getElementById("alert").innerHTML = "<p>" +Tam giác vuông+ "</p>";

}
else if (Math.pow(b, 2) == Math.pow(a, 2)+ Math.pow(c, 2)){
    document.getElementById("alert").innerHTML = "<p>" +Tam giác vuông+ "</p>";
}
else if (Math.pow(c, 2) == Math.pow(a, 2)+ Math.pow(b, 2)){
    document.getElementById("alert").innerHTML = "<p>" +Tam giác vuông+ "</p>";
}
}