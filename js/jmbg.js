var jmbg = document.getElementById("text");
var message =  document.getElementById("massage");
var birthDate = document.getElementById("birthDay")
var gender = document.getElementById("gender");
var place = document.getElementById("place");

function check(){
    var jmbgLenght = jmbg.value.length;
    var jmbgValue = jmbg.value;
    var day = jmbgValue.substr(0,2);
    var month = jmbgValue.substr(2,2);
              
    if (jmbgLenght != 13){
        message.innerHTML = "Morate uneti trinaest cifara";
        resetFields();
        return;
    }   
    
    if(day > 31){
        message.innerHTML = "Neispravan dan rodjenja";
        resetFields();
        return;
    } 
    
    if(month > 12){
        message.innerHTML = "Neispravan mesec rodjenja";
        resetFields();
        return
    } 
}