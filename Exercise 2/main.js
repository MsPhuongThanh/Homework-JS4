function answer(){
    // Input: khai báo biến 
var person = document.getElementById("who").value
var B = "bố";
var M = "mẹ";
var A = "anh trai";
var E = "em gái";

// Xử lý 
if (person = B){
document.getElementById("greetings").innerHTML = "<p>" + "Hi daddy" + "</p>";
}
if (person = M){
document.getElementById("greetings").innerHTML = "<p>" + "Hi mommy" + "</p>";  
}
if (person = A){
document.getElementById("greetings").innerHTML = "<p>" + "Hi bro" + "</p>";    
}
if (person = E){
    document.getElementById("greetings").innerHTML = "<p>" + "Hi sis" + "</p>";  
}

}