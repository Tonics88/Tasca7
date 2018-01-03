//Funció que donat un any ens torna true si es "bisiesto" o false en cas contrari.
function esBisiesto(x){
    if ( !(parseInt(x.any.substring( (x.any.length-2, x.any.length)))%4 && (x.any.substring(x.any.length-2, x.any.length))!="00")
    || x.any.substring(x.any.length-2, x.any.length)=="00" && (parseInt(x.any.substring(x.any.length-2, x.any.length))%400)==0){
        //En cas afirmatiu modificam els dies del mes de febrer de 28 a 29.
        mes.dies[1]=29;
        return true;
    }
    return false  
}

//Funció per asegurar que ens entren una data dintre de les nostres restricions.
function dataCheck(x,mes){
    while (x.any<1700 || x.any>2299){
        x.any=prompt("Any no compres entre 1700 i 2299 \nIntrodueix un altre any per favor")
    }
    while (x.mes<1 || x.mes>12){
         x.mes=prompt("Mes no compres entre Gener (1) i Decembre (12) \nIntrodueix un altre mes per favor")
    }
    //Miram si es "bisiesto" per actualitzar automaticament el nombre de dies del mes de febrer.
    esBisiesto(x);
    while (x.dia<1 || x.dia>mes.dies[x.mes-1]){
        x.dia=prompt("El mes "+mes.nom[x.mes-1]+" te "+mes.dies[x.mes-1]+" dies, tu has introduit: "+x.dia+
                    "\nIntrodueix un dia entre 1 i "+mes.dies[x.mes-1]+" per favor")
    }
    return x;
}

//Funció que segons on es troba l'any triat torna diferents valors
//no cal mirar si es més petit de 1700 perque a la funció dataCheck ja ho hem fet.
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

//Funció que fa servir les diferents funcions creades indicades a l'algoritme de la web de referencia
//per donar un valor que ens indica quin dia de la setmana es.
function calculDiaSetmana(x){
    var diaSet={
        A:valorSegle(x.any),
        B:valorAny(parseInt(x.any.substring(x.any.length-2, x.any.length))),
        C:valorBisiesto(x),
        D:valorMes(x.mes),
        E:1,//Aquí es el dia triat(x.dia) però per generar el calendari ens interesa sebre dia 1 del mes triat.
        R:0
    }
    R=(diaSet.A+diaSet.B+diaSet.C+diaSet.D+diaSet.E)%7
    console.log(diaSet);
    //L'algoritme de la web ens dona el valor 0 per diumenge fins a 6 per dilluns però
    //ens interesa que sigui de 0 dilluns fins 6 diumenge, per aixo feim el return així.
    return (R+6)%7;
}

function calendarConstructor(data,mes,primerDiaMes){
    //Començam el div que contendrà el calendaria.
    document.write('<div class="grid-container">');
    //Primera fila del calendari amb els noms dels dies de la setmana fent servir l'array anterior.
    for (i=0;i<7;i++){
        document.write('<div class="grid-dia-item">'+mes.dia[i]+'</div>');
    }
    //Cream els div dels dies previs al primer del mes triat si aquest no comença amb dilluns.
    for (i=primerDiaMes;i>0;i--){
        document.write('<div class="grid-prev-item"><br>'+(mes.dies[(parseInt(data.mes)+10)%12]-i+1)+'</div>');
    }
    //Controla a quin dia de la setmana ens trobam quan construim el calendari div a div
    //així sabem quants de dies queden per omplir la setmana fins al diumenge del seguent mes.
    var contSe=primerDiaMes;
    //Cream tants de div com de dies te el mes triat.
    for (i=0;i<mes.dies[data.mes-1];i++){
        if (contSe==7){
            contSe=0;
        }
        //Quan arribam al dia triat el marcam.
        if (i+1==data.dia){
            document.write('<div class="grid-select-item"><br>'+(i+1)+'</div>');
        } else {
            document.write('<div class="grid-item"><br>'+(i+1)+'</div>');
        }
        contSe++;
    }
    //La var contSe indica el dia de la setmana on hem quedat i ara, si cal, omplim fins arribar a diumenge.
    for (i=0;i<(7-contSe);i++){
        document.write('<div class="grid-prev-item"><br>'+(i+1)+'</div>');
    }
    document.write("</div>");
}

//web d'on hem tret l'algoritme: https://www.gaussianos.com/como-calcular-que-dia-de-la-semana-fue/