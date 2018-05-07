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
    
    var control = isControlValid();
    
    if(control == false){
        message.innerHTML = "Neispravna kontrolna cifra";
        resetFields();
        return
    } 
    
    getDayOfBirth();
    
}

function isControlValid(){
    var jmbgValue = jmbg.value;
    var a1 = jmbgValue.substr(0,1);
    var a2 = jmbgValue.substr(1,1);
    var a3 = jmbgValue.substr(2,1);
    var a4 = jmbgValue.substr(3,1);
    var a5 = jmbgValue.substr(4,1);
    var a6 = jmbgValue.substr(5,1);
    var a7 = jmbgValue.substr(6,1);
    var a8 = jmbgValue.substr(7,1);
    var a9 = jmbgValue.substr(8,1);
    var a10 = jmbgValue.substr(9,1);
    var a11 = jmbgValue.substr(10,1);
    var a12 = jmbgValue.substr(11,1);
    var a13 = jmbgValue.substr(12,1);
   
    var s = 7*a1 + 6*a2 + 5*a3 + 4*a4 + 3*a5 + 2*a6 + 7*a7 + 6*a8 + 5*a9 + 4*a10 + 3*a11 + 2*a12;
    var k = s % 11;
    
    if(k == 0 && a13 == 0){
        return true;
    }
    if(k > 1 && a13 == 11-k){
        return true;
    }
    else{
        return false;
    }
    
}

function getDayOfBirth(){
    var jmbgValue = jmbg.value;
    var day = jmbgValue.substr(0,2);
    var month = jmbgValue.substr(2,2);
    var year = jmbgValue.substr(4,3);
       
    if(day <= 31 && month <= 12 ){
          birthDate.innerHTML = day + ". " + month + ". " + "1" + year + ".";
       }
    if(day <= 31 && month <= 12 && year <= 99){        
          birthDate.innerHTML = day + "." + month + "." + "2" + year + ".";
       }
}