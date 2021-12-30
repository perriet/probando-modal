let free = false;

const validarCliente = (time)=>{
    alert("son las " + time + " horas");
    let edad = prompt("cual es tu edad")
    if(edad != null){//la variable edad se vuelve null cuando apretan cancelar en el prompt
        if (edad > 18) {
            if (time >=2 && time < 7 && free ==false){
                alert("puedes pasar gratis");
                free=true;
            }else {
                alert("paga y pasa");
            }
        }else{
            alert("eres menor de edad asi que aqui no pasas");
        }
    }else {
        alert("vayase");
    }
}
validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);