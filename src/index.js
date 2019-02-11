let offsetValue;
let messageValue;

//Función para mostrar valores de mensaje de usuario codificado (offset y mensaje)
const encUserMessage = () =>{
    messageValue = document.getElementById('userMessage1').value;
    document.getElementById('userMessageEnc').value = cipher.encode(parseInt(offsetValue), messageValue);
};
document.getElementById('secret').addEventListener('click', encUserMessage);
//Función para mostrar valores de mensaje de usuario decodificado (offset y mensaje)
const decUserMessage = () =>{
    messageValue = document.getElementById('userMessage2').value;
    document.getElementById('userMessageDec').value = cipher.decode(parseInt(offsetValue), messageValue);
};
document.getElementById('findsecret').addEventListener('click', decUserMessage);

//Declaración de variables para mostrar pantallas
let intro = document.getElementById('intro');
let options = document.getElementById('options');
let offset1 = document.getElementById('offset1');
let offset2 = document.getElementById('offset2');
let encodeMessage = document.getElementById('encodeMessage');
let decodeMessage = document.getElementById('decodeMessage');
let exit = document.getElementById('exit');
let inputName = document.getElementById('inputName');

//Función muestra pantalla de opciones con nombre de usuario
const showOptions = () =>{
    if(inputName.value != ''){
        options.style.display = 'block';
        intro.style.display = 'none';
        document.getElementById('welcome').innerHTML = '!Hola ' + inputName.value + "!";
    } else {
        return alert('Por favor, ingresa tu nombre');
    }
};
document.getElementById('enter').addEventListener('click', showOptions);

//Función muestra pantalla para hacer offset codificar
const showOffset1 = () =>{
    document.getElementById('name1').innerHTML = inputName.value + ' ' + 'para crear un mensaje elige un número' + '<br/>' + 'que sea especial para tí y tu pareja';
    offset1.style.display = 'block';
    options.style.display = 'none';
    decodeMessage.style.display = 'none';
    exit.style.display = 'none';
    cleanValues();
};
document.getElementById('create').addEventListener('click', showOffset1);
document.getElementById('encoMessage').addEventListener('click', showOffset1);
document.getElementById('returnEnc').addEventListener('click', showOffset1);

//Función muestra pantalla para hacer offset decodificar
const showOffset2 = () =>{
    document.getElementById('name2').innerHTML = inputName.value + ' ' + 'ingresa la clave que te dió tu pareja <br/> para descrubrir el mensaje';
    offset2.style.display = 'block';
    options.style.display = 'none';
    encodeMessage.style.display = 'none';
    decodeMessage.style.display = 'none';
    exit.style.display = 'none';
    cleanValues();
};
document.getElementById('decode').addEventListener('click', showOffset2);
document.getElementById('decoMessage').addEventListener('click', showOffset2);
document.getElementById('returnDec').addEventListener('click', showOffset2);
document.getElementById('tryAgainOffs').addEventListener('click', showOffset2);

//Función muestra pantalla para codificar mensaje
const showEncodeMess = () =>{
    let num1 = document.getElementById('num1');
    if(num1.value != ''){
        encodeMessage.style.display = 'block';
        offset1.style.display = 'none';
    } else{
        return alert('Por favor, ingresa un número');
    }  
    document.getElementById('name3').innerHTML = inputName.value + ' ' +'ahora escribe tu mensaje'; 
    exit.style.display = 'none';
    offsetValue = document.getElementById('num1').value;
};
document.getElementById('next1').addEventListener('click', showEncodeMess);

//Función de botón para copiar valor de input de mensaje codificado
const copyMessage = () =>{
    let copyValue = document.getElementById('userMessageEnc');
    copyValue.select();
    document.execCommand("copy");
    alert("Tu mensaje se ha copiado");
};
document.getElementById('copyToClipboard').addEventListener('click', copyMessage);

//Función muestra pantalla para decodificar mensaje
const showDecodeMess = () =>{
    let num2 = document.getElementById('num2');
    if(num2.value != ''){
        decodeMessage.style.display = 'block';
        offset2.style.display = 'none';
    } else{
        return alert('Por favor, ingresa un número');
    }
    document.getElementById('name4').innerHTML = inputName.value + ' ' +'ahora inserta tu mensaje secreto';
    exit.style.display = 'none';
    offsetValue = document.getElementById('num2').value;
};
document.getElementById('next2').addEventListener('click', showDecodeMess);

//Función para mostrar pantalla de salida
const showExit = () =>{
    document.getElementById('name5').innerHTML = '¡Gracias por usar esta app ' + inputName.value + ' ' +'vuelve pronto!';
    exit.style.display = 'block';
    encodeMessage.style.display = 'none';
    decodeMessage.style.display = 'none';
};
document.getElementById('exit1').addEventListener('click', showExit);
document.getElementById('exit2').addEventListener('click', showExit);

//Función para mostrar pantalla de inicio limpiando todos los valores anteriores
const showIntro = () =>{
    location.reload();
};
document.getElementById('index').addEventListener('click', showIntro);

//Función para limpiar valores de inputs para offset, codificar y decodificar
const cleanValues = () =>{
    document.getElementById('num2').value = '';
    document.getElementById('userMessage1').value = '';
    document.getElementById('userMessageEnc').value = '';
    document.getElementById('num1').value = '';
    document.getElementById('userMessage2').value = '';
    document.getElementById('userMessageDec').value = '';
};