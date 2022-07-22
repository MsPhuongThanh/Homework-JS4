function order(){
//Input: khai báo biến 
var a = +document.getElementById("number1").value*1;
var b = +document.getElementById("number2").value*1;
var c = +document.getElementById("number3").value*1;

//Xử lý : So sánh các số 
if (a<b){
     if(b<c){
        document.getElementById("message").innerHTML = "<p>" + a + b + c +"</p>";
    }
    else{
      if (a<c){
        document.getElementById("message").innerHTML = "<p>" + a + c + b +"</p>";
      }
      else {
        document.getElementById("message").innerHTML = "<p>" + c+ a + b +"</p>";
      }      
    }
}
else {
    if (b>c){
        document.getElementById("message").innerHTML = "<p>" + c + b + a +"</p>";
    } else {
        if(a<c){
            document.getElementById("message").innerHTML = "<p>" + b + a + c +"</p>";
        }
        else{
            document.getElementById("message").innerHTML = "<p>" + a + b + c +"</p>";
        }
    }
}
}