let offsetValue;
let messageValue;

//Funciones para mostrar valores de mensaje de usuario
const encUserMessage = () =>{
    messageValue = document.getElementById('userMessage1').value;
    document.getElementById('userMessageEnc').value = cipher.encode(parseInt(offsetValue), messageValue.toUpperCase());
};
document.getElementById('secret').addEventListener('click', encUserMessage);

const decUserMessage = () =>{
    messageValue = document.getElementById('userMessage2').value;
    document.getElementById('userMessageDec').value = cipher.decode(parseInt(offsetValue), messageValue.toUpperCase());
};
document.getElementById('findsecret').addEventListener('click', decUserMessage);

//Declaración de variables para pantallas
let intro = document.getElementById('intro');
let options = document.getElementById('options');
let offset1 = document.getElementById('offset1');
let offset2 = document.getElementById('offset2');
let encodeMessage = document.getElementById('encodeMessage');
let decodeMessage = document.getElementById('decodeMessage');
let exit = document.getElementById('exit');

//Función muestra pantalla de opciones
const showOptions = () =>{
    let inputName = document.getElementById('inputName');
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
    offset2.style.display = 'block';
    options.style.display = 'none';
    encodeMessage.style.display = 'none';
    exit.style.display = 'none';
    cleanValues();
};
document.getElementById('decode').addEventListener('click', showOffset2);
document.getElementById('decoMessage').addEventListener('click', showOffset2);
document.getElementById('returnDec').addEventListener('click', showOffset2);

//Función muestra pantalla para codificar mensaje
const showEncodeMess = () =>{
    if(num1.value != ''){
        encodeMessage.style.display = 'block';
        offset1.style.display = 'none';
    } else{
        return alert('Por favor, ingresa un número');
    }   
    exit.style.display = 'none';
    offsetValue = document.getElementById('num1').value;
};
document.getElementById('next1').addEventListener('click', showEncodeMess);

//Función muestra pantalla para decodificar mensaje
const showDecodeMess = () =>{
    if(num2.value != ''){
        decodeMessage.style.display = 'block';
        offset2.style.display = 'none';
    } else{
        return alert('Por favor, ingresa un número');
    }
    exit.style.display = 'none';
    offsetValue = document.getElementById('num2').value;
};
document.getElementById('next2').addEventListener('click', showDecodeMess);

//Función para mostrar pantalla de salida
const showExit = () =>{
    exit.style.display = 'block';
    encodeMessage.style.display = 'none';
    decodeMessage.style.display = 'none';
};
document.getElementById('exit1').addEventListener('click', showExit);
document.getElementById('exit2').addEventListener('click', showExit);

//Función para mostrar pantalla de inicio
const showIntro = () =>{
   // intro.style.display = 'block';
    //exit.style.display = 'none';
    location.reload();
};
document.getElementById('index').addEventListener('click', showIntro);

//Función para limpiar valores de inputs
const cleanValues = () =>{
    document.getElementById('num2').value = '';
    document.getElementById('userMessage1').value = '';
    document.getElementById('userMessageEnc').value = '';
    document.getElementById('num1').value = '';
    document.getElementById('userMessage2').value = '';
    document.getElementById('userMessageDec').value = '';
};