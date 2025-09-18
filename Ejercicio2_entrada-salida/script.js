
// 1º recuperar el boton
let boton1 = document.querySelector("#calc_btn");

// 2º asignarle instrucciones para cuando sea clicado

boton1.addEventListener("click", function(){
//2º a) recuperar texto de la caja
let entrada_inp = document.querySelector("#entrada_inp") ;
let numero = entrada_inp.value ;
//2º b) calcular el doble
let doble = numero*2 ;

/*if(numero!= int || numero != double)
    {
        let mensaje = error;
result_lbl.textContent= mensaje;

    } */
//2º c) mostrar en pantalla
let result_lbl = document.querySelector("#resul_lbl");
result_lbl.textContent = doble ;

});