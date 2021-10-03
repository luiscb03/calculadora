var historialS = [];

//metodo para buscar si hay coma (,) en alguno de los numeros Extremo
function extreme(cadena) {
    var resp = false;
    var arreglo = cadena.split('');
    arreglo.forEach(element => {
        if (element == '.'){ resp = true}; 
    });
    return resp;
}

//metodo para buscar si hay coma (,) en alguno de los numeros
function buscarComa(cadena) {
    var comaE = false;
    var esta = cadena.search('.');
    if (esta == 1) {
        comaE = true;
    }
    return comaE;
}

function escribir(x) {

    var decimal1 = extreme(document.getElementById('num1').textContent);
    var decimal2 = extreme(document.getElementById('num3').textContent);

    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num3');
    var operador = document.getElementById('operador');
    var resultan = document.getElementById('resultado');

    if (num2.textContent != '' && num2.textContent != '' && operador.textContent != '' && resultan.textContent != '0') {
        alert('primero debes eliminar todo');
    }else if ((x == '+' || x == 'x' || x == '/' || x == '.') && (num1.textContent == '')) {
        alert('Primero debes ingresar algun numero');
    }else if (num1.textContent == '' || (num2.textContent == '' && operador.textContent == '') 
        && (x != '-' && x!='+' && x!='x' && x!='/' && x!='.')) {
            num1.innerHTML += x;
    }else if (num1.textContent == '' && x == '-') {
        num1.innerHTML += x;
    }else if (x=='.' && num1.textContent=='-' ) {
        num1.innerHTML += '0.';
    }else if (x=='.' && num1.textContent != '' && (decimal1 == false) && num2.textContent=='') {
        num1.innerHTML += x;
    }else if (num1.textContent != '' && operador.textContent == '' && (x=='+' || x=='-' || x=='x' || x=='/')) {
        operador.innerHTML = x;
    }else if ((num1.textContent != '' && operador.textContent != '') && x!='+' && x!='-' && x!='x' && x!='/' && x!='.') {
        num2.innerHTML += x;
    }else if (num2.textContent == '' && x == '-') {
        num2.innerHTML += x;
    }else if (x=='.' && num2.textContent=='-' ) {
        num1.innerHTML += '0.';
    }else if (x=='.' && num2.textContent != '' && (decimal2 == false)) {
        num2.innerHTML += x;
    }
}

function suma(n1, n2) {
    let sum;
    let str;
    if (n1!=null && n2!=null) {
        sum = n1+n2;
        str = n1+' + '+n2+' = '+sum;
        historialS.push(str);
    }else{
        sum = 0;
    }
    return sum;
}

function resta(n1, n2) {
    let rest;
    let str;
    if (n1!=null && n2!=null) {
        rest = n1-n2;
        str = n1+' - '+n2+' = '+rest;
        historialS.push(str);
    }else{
        rest = 0;
    }
    return rest;
}

function mult(n1, n2) {
    let multi;
    let str;
    if (n1!=null && n2!=null) {
        multi = n1*n2;
        str = n1+' x '+n2+' = '+multi;
        historialS.push(str);
    }else{
        multi = 0;
    }
    return multi;
}

function division(n1, n2) {
    let div;
    let str;
    if (n2 == 0) {
        alert('No es posible dividir entre 0');
        div = 'Error';
    }else if(n1!=null && n2!=null){
        div = n1/n2;
        str = n1+' / '+n2+' = '+div;
        historialS.push(str);
    }else{
        div = 0;
    }
    return div;
}

function resolver() {
    var lista = document.getElementById('lista');
    var numero1 = parseFloat(document.getElementById('num1').textContent);
    var numero2 = parseFloat(document.getElementById('num3').textContent);
    var op = document.getElementById('operador').textContent;
    var resulante = document.getElementById('resultado');
    
    switch (op) {
        case '+':
            //imprimir resultado
            resulante.innerHTML = suma(numero1, numero2);
            //agregar resultado al historial
            var str = numero1+' + '+numero2+' = '+suma(numero1, numero2);
            let valor =document.createTextNode(str);
            let item = document.createElement("li");
            item.appendChild(valor);
            lista.appendChild(item);
            break;
        case '-':
            resulante.innerHTML = resta(numero1, numero2);
            //agregar resultado al historial
            var str = numero1+' - '+numero2+' = '+resta(numero1, numero2);
            let valor1 =document.createTextNode(str);
            let item1 = document.createElement("li");
            item1.appendChild(valor1);
            lista.appendChild(item1);
            break;
        case 'x':
            resulante.innerHTML = mult(numero1, numero2);
            //agregar resultado al historial
            var str = numero1+' x '+numero2+' = '+mult(numero1, numero2);
            let valor2 =document.createTextNode(str);
            let item2 = document.createElement("li");
            item2.appendChild(valor2);
            lista.appendChild(item2);
            break;
        case '/':
            resulante.innerHTML = division(numero1, numero2);
            //agregar resultado al historial
            var str = numero1+' / '+numero2+' = '+division(numero1, numero2);
            let valor3 =document.createTextNode(str);
            let item3 = document.createElement("li");
            item3.appendChild(valor3);
            lista.appendChild(item3);
            break;
        default:
            alert('Ingresar valores');
            break;
    }

}

//Borra todos los valores incluyendo el resultado
function clearAll() {
    document.getElementById('num1').innerHTML = '';
    document.getElementById('num3').innerHTML = '';
    document.getElementById('operador').innerHTML = '';
    document.getElementById('resultado').innerHTML = '0';
}

function clearr() {
    var numero1 = document.getElementById('num1').textContent;
    var numero2 = document.getElementById('num3').textContent;
    var op = document.getElementById('operador').textContent;
    var resulante = document.getElementById('resultado');

    if (numero1 != '' && op != '' && numero2 != '' && resulante.textContent != '0') {
        resulante.innerHTML = '0';

    }else if (numero1 != '' && numero2 == '' && op == '') {
        let cadenaN = numero1.substring(0, numero1.length - 1);
        document.getElementById('num1').innerHTML = cadenaN;

    }else if (numero1 != '' && op != '' && numero2 == '') {
        document.getElementById('operador').innerHTML = '';

    }else if (numero1 != '' && op != '' && numero2 != '') {
        let cadenaN2 = numero2.substring(0, numero2.length - 1);
        document.getElementById('num3').innerHTML = cadenaN2;

    }
}

function historial() {
    let contenedor = document.getElementById('ventana-madre');
    let interno = document.getElementById('mostrar-elementos');

    contenedor.classList.add('mostrar-hist');
}

function cerrarHistorial() {
    let contenedor = document.getElementById('ventana-madre');
    contenedor.classList.remove('mostrar-hist');
}

function clearHistorial() {
    var lista = document.getElementById('lista');
    if (lista.length == 0) {alert('No hay historial para borrar')
    }
    else{
        var elementos = lista.parentNode.parentNode.getElementsByTagName('li');
        for (let index = 0; index < elementos.length; index++) {
            lista.removeChild(elementos[index]);
        }
        for (let index = 0; index < elementos.length; index++) {
            lista.removeChild(elementos[index]);
        }
        for (let index = 0; index < elementos.length; index++) {
            lista.removeChild(elementos[index]);
        }
        for (let index = 0; index < elementos.length; index++) {
            lista.removeChild(elementos[index]);
        }
        for (let index = 0; index < elementos.length; index++) {
            lista.removeChild(elementos[index]);
        }
        for (let index = 0; index < elementos.length; index++) {
            lista.removeChild(elementos[index]);
        }
        for (let index = 0; index < elementos.length; index++) {
            lista.removeChild(elementos[index]);
        }
        for (let index = 0; index < elementos.length; index++) {
            lista.removeChild(elementos[index]);
        }
        historialS.splice(0, historialS.length); 
        alert('Historial borrado completamente');

        document.getElementById('num1').innerHTML = '';
        document.getElementById('num3').innerHTML = '';
        document.getElementById('operador').innerHTML = '';
        document.getElementById('resultado').innerHTML = '0';
    }
}