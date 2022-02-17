function proveraForme(forma){

    if(forma.ime.value == ""){
        alert("Molimo Vas unesite ime!");
        forma.ime.focus();
        return false;
    }

    if(forma.prz.value == ""){
        alert ("Molimo Vas unesite prezime!");
        forma.prz.focus();
        return false;
    }

    if(forma.jmbg.value == ""){
        alert("Molimo Vas unesite JMBG!");
        forma.jmbg.focus();
        return false;
    }

    if(forma.email.value == ""){
        alert("Molimo vas unesite email adresu!");
        forma.email.focus();
        return false;
    }

    var imeVel = forma.ime.value;
    if(imeVel[0] != imeVel[0].toUpperCase()){
        alert("Ime mora poceti sa velikom slovom!")
        forma.ime.focus();
        return false;
    }

    var prezVel = forma.ime.value;
    if(prezVel[0] != prezVel[0].toUpperCase()){
        alert("Prezime mora poceti sa velikom slovom!")
        forma.prz.focus();
        return false;
    }

    var jmbg = forma.jmbg.value;
    if(jmbg.length != 13){
        alert("JMBG mora imati 13 karaktera!");
        forma.jmbg.focus();
        return false;
    }

    var email = forma.email.value;
    if(!email.include ("@")){
        alert("Mail mora sadrzai znak @");
        forma.email.focus();
        return false;
    }

    return true;
}


function omoguciSelect(){

    var select = document.getElementById("paketi");
    if(select.disabled == true){
        select.disabled = false;
    }else{
        select.disabled = true;
    }
}

function promeniBoju(){
    var select = document.getElementById("paketi");
    var pozadina = document.querySelector(".container");

    if(select.value == "1"){
        pozadina.style.backgroundColor = "silver";
    }else if(select.value == "2"){
        pozadina.style.backgroundColor = "gold";
    }else if(select.value == "3"){
        pozadina.style.backgroundColor ="skyblue";
    }
}

function obojiPozadinu(){
    var premium = document.getElementById("paket");
    var pozadina = document.querySelector(".container");
    if(premium.checked == false){
        pozadina.style.backgroundColor = "#cdb4db";
    }
}