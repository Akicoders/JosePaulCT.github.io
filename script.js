var operandoa;
var operandob;
var operacion;
function init(){
    //variables
    var resultado = document.getElementById("resultado");
    //botones
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eigth");
    var nine = document.getElementById("nine");
    var dividir = document.getElementById("dividir");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var multiplicar = document.getElementById("multiplicar");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three= document.getElementById("three");
    var resta = document.getElementById("resta");
    var equal = document.getElementById("equal");
    var reset = document.getElementById("reset");
    var zero = document.getElementById("zero");
    var plus = document.getElementById("plus");
}
one.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
two.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
three.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
four.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
five.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
six.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
seven.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
eigth.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nine.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
zero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}

reset.onclick = function(e){
    resetear();
}

plus.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}


resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicar.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}

dividir.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}

equal.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

function limpiar()
{
    resultado.textContent = "";
}

function resetear()
{
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver()
{
    var res = 0;
    switch(operacion)
    {
        case "+":
            res= parseFloat(operandoa) + parseFloat(operandob)
        break;

        case "-":
            res= parseFloat(operandoa) - parseFloat(operandob)
        break;

        case "*":
            res= parseFloat(operandoa) * parseFloat(operandob)
        break;

        case "/":
            res= parseFloat(operandoa) / parseFloat(operandob)
        break;
    }
    resetear();
    resultado.textContent = res;
    }