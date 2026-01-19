
let portaStatus = porta("fechada");
console.log(portaStatus);

function porta(status){
    if(status === "aberta"){
        status = "fechada";
        return status;
    } if (status === "fechada") {
        status = "aberta";
        return status;
    }
}

