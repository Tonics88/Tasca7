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

function valorSegle(any){
    var segles={
        anys: [1799,1899,1999,2099,2199,2299],
        valor: [5,3,1,0,-2,-4]
    }
    for(i in segles.anys){
        if (any<=segles.anys[i]){
                return segles.valor[i];
        }
    }
}

function valorAny(any){
    return Math.trunc(any+any/4);
}

function valorBisiesto(x){
    if (esBisiesto(x) && (x.mes==1 || x.mes==2)){
        return -1;
    } else {
        return 0;
    }
}

function valorMes(mes){
    valor=[6,2,2,5,0,3,5,1,4,6,2,4]
    return valor[mes-1];
}

function calculDiaSetmana(x){
    var diaSet={
        A:valorSegle(x.any),
        B:valorAny(parseInt(x.any.substring(x.any.length-2, x.any.length))),
        C:valorBisiesto(x),
        D:valorMes(x.mes),
        E:1,//en teoria es el dia triat
        R:0
    }
    R=(diaSet.A+diaSet.B+diaSet.C+diaSet.D+diaSet.E)%7
    console.log(diaSet);
    return (R+6)%7;
}

function calendarConstructor(data,mes,y){
    var x=data.dia;//var dia de la setmana triat
    //var y=0;//var que indica dia de la setmana de dia 1 d'aquest mes
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
//web d'on hem tret l'algoritme: https://www.gaussianos.com/como-calcular-que-dia-de-la-semana-fue/