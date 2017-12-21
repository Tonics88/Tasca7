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
    if (x.mes==2){

    } else if (x.mes==4 || x.mes==6 || x.mes==9 || x.mes==11){
        while (x.dia<1 || x.dia>30){
            //añadir contador de numero de intentos
            x.dia=prompt("El mes de "+mes[x.mes-1]+" te 30 dies, tu has introduit: "+x.dia+"\nIntrodueix un dia entre 1 i 30 per favor")
       }
    }else {
        while (x.dia<1 || x.dia>31){
            //añadir contador de numero de intentos
            x.dia=prompt("El mes de "+mes[x.mes-1]+" te 31 dies, tu has introduit: "+x.dia+"\nIntrodueix un dia entre 1 i 30 per favor")
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
    console.log(data.mes);
    console.log(data.mes-1);
    console.log(mes.dies[data.mes-1]);
    console.log(mes.dies[0]);

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