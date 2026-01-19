//torrar("pao de forma",undefined, 10.90);


function torrar(pao, nome = 'Silas', valor) {
    console.log("torrada feita com" + pao);
    console.log("ela e um pedido de " + nome);
    console.log("valor total: " + valor);
}

porta("fechada");

function porta(status){
    if(status === "aberta"){
        status = "fechada";
        console.log("porta " + status);
    } else {
        status = "aberta";
        console.log("porta " + status);
    }
}