function esBisiesto(x){
    if ( (x.any.substring( (x.any.length-2, x.any.length))%4 && (x.any.substring(x.any.length-2, x.any.length))!="00")
    || x.any.substring(x.any.length-2, x.any.length)=="00" && (x.any.substring(x.any.length-2, x.any.length)%400)==0){
        mes.dies[1]=29;
        return true;
    }
    return false
    
}

function dataCheck(x,y){
    var mes=y.nom;
    while (x.any<1700 || x.any>2299){
        //añadir contador de numero de intentos
        x.any=prompt("Any no compres entre 1700 i 2299 \nIntrodueix un altre any per favor")
    }
    while (x.mes<1 || x.mes>12){
         //añadir contador de numero de intentos
         x.mes=prompt("Mes no compres entre Gener (1) i Decembre (12) \nIntrodueix un altre mes per favor")
    }
console.log(esBisiesto(x));
    if (x.mes==2){
        if (esBisiesto(x)){
            while (x.dia<1 || x.dia>29){
                //añadir contador de numero de intentos
                x.dia=prompt("El mes de "+mes[x.mes-1]+" te 29 dies, tu has introduit: "+x.dia+"\nIntrodueix un dia entre 1 i 29 per favor")
           } 
        } else {
            while (x.dia<1 || x.dia>28){
                //añadir contador de numero de intentos
                x.dia=prompt("El mes de "+mes[x.mes-1]+" te 28 dies, tu has introduit: "+x.dia+"\nIntrodueix un dia entre 1 i 28 per favor")
           }
        }
        
    } else if (x.mes==4 || x.mes==6 || x.mes==9 || x.mes==11){
        while (x.dia<1 || x.dia>30){
            //añadir contador de numero de intentos
            x.dia=prompt("El mes de "+mes[x.mes-1]+" te 30 dies, tu has introduit: "+x.dia+"\nIntrodueix un dia entre 1 i 30 per favor")
       }
    }else {
        while (x.dia<1 || x.dia>31){
            //añadir contador de numero de intentos
            x.dia=prompt("El mes de "+mes[x.mes-1]+" te 31 dies, tu has introduit: "+x.dia+"\nIntrodueix un dia entre 1 i 31 per favor")
       }
    }
    return x;
}

function calculDiaSetmana(x){

}

function calendarConstructor(data,mes){
    var x=data.dia;//var dia de la setmana triat
    var y=0;//var que indica dia de la setmana de dia 1 d'aquest mes
    var z=mes.dies[data.mes-1];

    var dia=["Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte","Diumenge"];
    document.write('<div class="grid-container">');
    for (i=0;i<7;i++){
        document.write('<div class="grid-dia-item">'+dia[i]+'</div>');
    }
    for (i=y;i>0;i--){
        document.write('<div class="grid-prev-item"><br>'+(31-i)+'</div>');
    }
    var contse=y;
    for (i=0;i<z;i++){
        if (contse==7){
            contse=0;
        }
        if (i+1==x){
            document.write('<div class="grid-select-item"><br>'+(i+1)+'</div>');
        } else {
            document.write('<div class="grid-item"><br>'+(i+1)+'</div>');
        }
        contse=contse+1;
    }  
    for (i=0;i<(7-contse);i++){
        document.write('<div class="grid-prev-item"><br>'+(i+1)+'</div>');
    }
    document.write("</div>");
}