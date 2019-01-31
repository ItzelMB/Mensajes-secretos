
document.write(cipher.encode('GOOD',1));
document.write(cipher.decode('HPPE',1));

const inputMessage1 = userMessage.value;
const outputMessage = cipher.decode();

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
    options.style.display = 'block';
    intro.style.display = 'none';
};
document.getElementById('enter').addEventListener('click', showOptions);

//Función muestra pantalla para hacer offset codificar
const showOffset1 = () =>{
    offset1.style.display = 'block';
    options.style.display = 'none';
};
document.getElementById('create').addEventListener('click', showOffset1);

//Función muestra pantalla para hacer offset decodificar
const showOffset2 = () =>{
    offset2.style.display = 'block';
    options.style.display = 'none';
};
document.getElementById('decode').addEventListener('click', showOffset2);

//Función muestra pantalla para codificar mensaje
const showEncodeMess = () =>{
    encodeMessage.style.display = 'block';
    offset1.style.display = 'none';
    decodeMessage.style.display = 'none';
    exit.style.display = 'none';
};
document.getElementById('next1').addEventListener('click', showEncodeMess);
document.getElementById('encoMessage').addEventListener('click', showEncodeMess);

//Función muestra pantalla para decodificar mensaje
const showDecodeMess = () =>{
    decodeMessage.style.display = 'block';
    offset2.style.display = 'none';
    encodeMessage.style.display = 'none';
    exit.style.display = 'none';
};
document.getElementById('next2').addEventListener('click', showDecodeMess);
document.getElementById('decoMessage').addEventListener('click', showDecodeMess);

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
    intro.style.display = 'block';
    exit.style.display = 'none';
};
document.getElementById('index').addEventListener('click', showIntro);
document.getElementById('returnEnc').addEventListener('click', showEncodeMess);
document.getElementById('returnDec').addEventListener('click', showDecodeMess);

//Función para mostrar pantallas siguiente02
/*const nextScreen = () =>{
    let newview = '';
    if()
    return newview;
     //return document.getElementById(nextScreen)
}
const showOffset = () =>{
    if(showOffset1()){
        document.getElementById('offset1');
        offset1.style.display = 'block';
        options.style.display = 'none';
    } else {
        document.getElementById('offset2');
    offset2.style.display = 'block';
    options.style.display = 'none';
    }
}
*/