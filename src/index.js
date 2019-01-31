
//Función muestra pantalla de opciones
const showOptions = () =>{
    let options = document.getElementById('options');
    options.style.display = 'block';
    intro.style.display = 'none';
};

//Función muestra pantalla para hacer offset codificar
const showOffset1 = () =>{
    let offset1 = document.getElementById('offset1');
    offset1.style.display = 'block';
    options.style.display = 'none';
};

//Función muestra pantalla para hacer offset decodificar
const showOffset2 = () =>{
    let offset2 = document.getElementById('offset2');
    offset2.style.display = 'block';
    options.style.display = 'none';
};

//Función muestra pantalla para codificar mensaje
const showEncodeMess = () =>{
    let encodeMessage = document.getElementById('encodeMessage');
    encodeMessage.style.display = 'block';
    offset1.style.display = 'none';
    decodeMessage.style.display = 'none';
    exit.style.display = 'none';
};

//Función muestra pantalla para decodificar mensaje
const showDecodeMess = () =>{
    let decodeMessage = document.getElementById('decodeMessage');
    decodeMessage.style.display = 'block';
    offset2.style.display = 'none';
    encodeMessage.style.display = 'none';
    exit.style.display = 'none';
};

//Función para mostrar pantalla de salida
const showExit = () =>{
    let exit = document.getElementById('exit');
    exit.style.display = 'block';
    encodeMessage.style.display = 'none';
    decodeMessage.style.display = 'none';
};

//Función para mostrar pantalla de inicio
const showIntro = () =>{
    let intro = document.getElementById('intro');
    intro.style.display = 'block';
    exit.style.display = 'none';
};

document.write(cipher.encode('GOOD',1));
document.write(cipher.decode('HPPE',1));

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