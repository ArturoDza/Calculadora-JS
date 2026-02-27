const txtOp1 = document.getElementById("op1")
const txtoperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")


btnCalcular.addEventListener('click',calcular)

function calcular(){
    const operacion = txtoperacion.value
    const op1 = txtOp1.value
    const op2 = txtOp2.value

    if(operacion == "+" || operacion == "-" || operacion == "*" || 
        operacion == "/"){
    pResultado.innerText = "Calculo posible"
    }else{
    pResultado.innerText = "Calculo imposible de realizar"
    }
    
}