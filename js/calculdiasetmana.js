function checkData(x){
    var mes=["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","decembre"];
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