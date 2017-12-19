function llegirNumero(text,num) {
    var x;
    var continuar=false;
    for (var i=0; !(x>=num || continuar); i++){
        if (i>2){
            continuar=confirm("NO estas ficant cap numero, vols sortir?");
            if (continuar==true){
                return;
            }
            i=0;
        }
        x=prompt(text);
    }
    return x;
}