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
    
    message.innerHTML = null;
    getDayOfBirth();
    getGender();
    getPlace();
    
}

function resetFields(){
    gender.innerHTML = null;
    birthDate.innerHTML = null;
    place.innerHTML = null;
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

function getGender(){
    var jmbgValue = jmbg.value;
    var res = jmbgValue.substr(9,3);
    
      if (res < 500){
          gender.innerHTML = "Muski";
      } else {
          gender.innerHTML = "Ženski";
      }
}

function getPlace(){
    var jmbgValue = jmbg.value;
    var res = jmbgValue.substr(7,2);

    if (res == 01){
          place.innerHTML = "stranci u BiH ";
   } 
    if (res == 02){
          place.innerHTML = "stranci u Crnoj Gori ";
   }
    if (res == 03){
          place.innerHTML = "stranci u Hrvatskoj ";
   }
    if (res == 04){
          place.innerHTML = "stranci u Makedoniji ";
   }
    if (res == 05){
          place.innerHTML = "stranci u Sloveniji ";
   }
    if (res == 06){
          place.innerHTML = " ";
   }
    if (res == 07){
          place.innerHTML = "stranci u Srbiji (bez pokrajina) ";
   }
    if (res == 08){
          place.innerHTML = "stranci u Vojvodini ";
   }
    if (res == 09){
          place.innerHTML = " stranci na Kosovu";
   }
    if (res == 10){
          place.innerHTML = " Banja Luka";
   }
    if (res == 11){
          place.innerHTML = " Bihać";
   }
    if (res == 12){
          place.innerHTML = " Doboj";
   }
    if (res == 13){
          place.innerHTML = " Goražde";
   }
    if (res == 14){
          place.innerHTML = " Livno";
   }
    if (res == 15){
          place.innerHTML = " Mostar";
   }
    if (res == 16){
          place.innerHTML = " Prijedor";
   }
    if (res == 17){
          place.innerHTML = "Sarajevo ";
   }
    if (res == 18){
          place.innerHTML = " Tuzla";
   }
    if (res == 19){
          place.innerHTML = "Zenica ";
   }
    if (res == 21){
          place.innerHTML = "Podgorica ";
   }
    if (res == 26){
          place.innerHTML = "Nikšić ";
   }
    if (res == 29){
          place.innerHTML = "Pljevlja ";
   }
    if (res == 30){
          place.innerHTML = "Osijek, Slavonija ";
   }
    if (res == 31){
          place.innerHTML = "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina";
   }
    if (res == 32){
          place.innerHTML = "Varaždin, Međimurje";
   }
    if (res == 33){
          place.innerHTML = "Zagreb ";
   }
    if (res == 34){
          place.innerHTML = "Karlovac ";
   }
    if (res == 35){
          place.innerHTML = "Gospić, Lika  ";
   }
    if (res == 36){
          place.innerHTML = "Rijeka, Pula, Istra ";
   }
    if (res == 37){
          place.innerHTML = "Sisak, Banovina ";
   }
    if (res == 38){
          place.innerHTML = "Split, Zadar, Dubrovnik, Dalmacija ";
   }
    if (res == 39){
          place.innerHTML = "Hrvatska ";
   }
    if (res == 41){
          place.innerHTML = "Bitola ";
   }
    if (res == 42){
          place.innerHTML = "Kumanovo ";
   }
    if (res == 43){
          place.innerHTML = "Ohrid ";
   }
    if (res == 44){
          place.innerHTML = "Prilep ";
   }
    if (res == 45){
          place.innerHTML = "Skoplje ";
   }
    if (res == 46){
          place.innerHTML = " Strumica";
   }
    if (res == 47){
          place.innerHTML = " Tetovo";
   }
    if (res == 48){
          place.innerHTML = "Veles ";
   }
    if (res == 49){
          place.innerHTML = " Štip";
   }
    if (res >= 50 && res <= 59){
          place.innerHTML = "Slovenija ";
   }
    if (res == 71){
          place.innerHTML = "Grad Beograd: Stari Grad, Savski Venac, Voždovac, Vračar, Palilula, Zvezdara, Rakovica, Čukarica, Novi Beograd, Zemun, Mladenovac, Barajevo, Grocka, Obrenovac, Sopot, Lazarevac";
   }
    if (res == 72){
          place.innerHTML = "Šumadijski okrug: Aranđelovac, Batočina, Knić, Kragujevac, Rača, Lapovo, Topola; Pomoravski okrug: Despotovac, Paraćin, Rekovac, Jagodina, Svilajnac, Ćuprija";
   }
    if (res == 73){
          place.innerHTML = "Nišavski okrug: Aleksinac, Svrljig, Niš, Gadžin Han, Doljevac, Merošina, Ražanj; Pirotski okrug: Babušnica, Bela Palanka, Dimitrovgrad, Pirot; Toplički okrug: Blace, Žitorađa, Prokuplje, Kuršumlija ";
   }
    if (res == 74){
          place.innerHTML = "Jablanički okrug: Leskovac, Vlasotince, Medveđa, Lebane, Bojnik, Crna Trava; Pčinjski okrug: Vranje, Bujanovac, Surdulica, Bosilegrad, Preševo, Trgovište, Vladičin Han ";
   }
    if (res == 75){
          place.innerHTML = "Zaječarski okrug: Zaječar, Boljevac, Knjaževac, Sokobanja; Borski okrug: Bor, Majdanpek, Kladovo, Negotin ";
   }
    if (res == 76){
          place.innerHTML = "Podunavski okrug: Smederevska Palanka, Velika Plana, Smederevo; Braničevski okrug: Veliko Gradište, Kučevo, Petrovac na Mlavi, Požarevac, Žagubica, Golubac, Žabari, Malo Crniće ";
   }
    if (res == 77){
          place.innerHTML = "Mačvanski okrug: Loznica, Krupanj, Ljubovija, Šabac, Bogatić, Koceljeva, Vladimirci, Mali Zvornik; Kolubarski okrug: Valjevo, Lajkovac, Ljig, Ub, Osečina, Mionoca ";
   }
    if (res == 78){
          place.innerHTML = "Raški okrug: Kraljevo, Vrnjačka Banja, Novi Pazar, Raška, Tutin; Moravički okrug: Gornji Milanovac, Čačak, Ivanjica, Lučani; Rasinski okrug: Aleksandrovac, Brus, Kruševac, Trstenik, Varvarin, Ćićevac ";
   }
    if (res == 79){
          place.innerHTML = "Zlatiborski okrug: Arilje, Bajina Bašta, Kosjerić, Nova Varoš, Požega, Priboj, Prijepolje, Sjenica, Užice, Čajetina ";
   }
    if (res == 80){
          place.innerHTML = "Južnobački okrug: Bač, Bačka Palanka, Bački Petrovac, Vrbas, Žabalj, Novi Sad, Srbobran, Sremski Karlovci, Temerin, Titel, Bečej, Beočin ";
   }
    if (res == 81){
          place.innerHTML = "Zapadnobački okrug: Apatin, Kula, Odžaci, Sombor ";
   }
    if (res == 82){
          place.innerHTML = "Severnobački okrug: Bačka Topola, Subotica, Mali Iđoš ";
   }
    if (res == 85){
          place.innerHTML = "Srednjebanatski okrug: Zrenjanin, Nova Crnja, Novi Bečej, Sečanj, Žitište";
   }
    if (res == 86){
          place.innerHTML = "Južnobanatski okrug: Alibunar, Bela Crkva, Vršac, Kovačica, Kovin, Pančevo, Opovo, Plandište";
   }
    if (res == 87){
          place.innerHTML = "Severnobanatski okrug: Ada, Kikinda, Kanjiža, Novi Kneževac, Senta, Čoka";
   }
    if (res == 88){
          place.innerHTML = "Sremski okrug: Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig";
   }
    if (res == 89){
          place.innerHTML = "Sremski okrug: Inđija, Pećinci, Ruma, Sremska Mitrovica, Stara Pazova, Šid, Irig ";
   }
    if (res == 91){
          place.innerHTML = "Kosovski okrug: Priština, Obilić, Podujevo, Štrpce, Lipljan, Glogovac, Kačanik, Kosovo Polje, Uroševac, Štimlje ";
   }
    if (res == 92){
          place.innerHTML = "Kosovsko Mitrovački okrug: Kosovska Mitrovica, Zvečan, Leposavić, Zubin Potok, Vučitrn, Srbica ";
   }
    if (res == 93){
          place.innerHTML = "Pećki okrug: Peć, Istok, Klina";
   }
    if (res == 94){
          place.innerHTML = "Pećki okrug: Dečani, Đakovica ";
   }
    if (res == 95){
          place.innerHTML = "Prizrenski okrug: Gora-Dragaš, Orahovac, Prizren, Suva Reka";
   }
    if (res == 96){
          place.innerHTML = "Gnjilane, Kosovska Kamenica, Vitina, Novo Brdo ";
   }    
}