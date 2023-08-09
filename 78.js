document.addEventListener("DOMContentLoaded", function() {

	wyswietl();
    
    document.querySelector("button").onclick = function(){

        zapisz();

    }

});


class Kontakt{
    constructor(imie, nazwisko, telefon){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
    }
}


zapisz = () =>{
    let imie = document.querySelector("#imie").value;
    let nazwisko = document.querySelector("#nazwisko").value;
    let telefon = document.querySelector("#telefon").value;

    let daneJSON = localStorage.getItem("KT");
    let dane;
    if(daneJSON == null){
        dane = [];
    }
    else{
    
        dane = JSON.parse(daneJSON);
    }
        
    let kontakt = new Kontakt(imie, nazwisko, telefon);
    dane.push(kontakt);

    daneJSON = JSON.stringify(dane);
    localStorage.setItem("KT", daneJSON);

    wyswietl();
    
}
usun = (index) =>{
    let daneJSON = localStorage.getItem("KT");
    let dane = JSON.parse(daneJSON);
    dane.splice(index, 1);
    daneJSON = JSON.stringify(dane);
    localStorage.setItem("KT", daneJSON);

    wyswietl();

}



wyswietl = () =>{

    let daneJSON = localStorage.getItem("KT");

    let html;
    if(daneJSON == null || daneJSON == "[]"){
        html = "<h3>Brak danych</h3>";
    }
    else{
    
        let dane = JSON.parse(daneJSON);

        html ="<ul>";

        for(let x in dane){

            html += `<li>`;
                html += `${dane[x].imie} ${dane[x].nazwisko} ${dane[x].telefon} `
                html += `<b onclick='usun(${x})'>usun </b>`;
            html += `</li>`;
            
        }

        html += "</ul>";
    }

    document.querySelector("div#showUser").innerHTML = html;

}
