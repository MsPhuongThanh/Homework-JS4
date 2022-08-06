document.getElementById("count").onclick = function(){
    // Input:  
    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
  
    // Process
    var evenNumber = 0;
    var oddNumber = 0;
  
    if (number1 % 2 == 0) {
      evenNumber++;
    }else {oddNumber++;}
  
    if (number2 % 2 == 0) {
      evenNumber++;
    }else {oddNumber++;}
  
    if (number3 % 2 == 0) {
      evenNumber++;
    }else {oddNumber++;}
  
    // Output
    document.getElementById("count").innerHTML =
      "Số lượng số chẵn: " + evenNumber + "Số lượng số lẻ :" + oddNumber;
  };