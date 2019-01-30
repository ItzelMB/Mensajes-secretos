//Función codificar
const caesEncode = (message,offset) =>{
    let result ='';
    for(let i=0; i<message.length; i++){
        let findAscii = message.charCodeAt(i);
        let getPosition = (findAscii - 65 + offset) % 26 + 65;
        let bringChar = String.fromCharCode(getPosition);
        result += bringChar;
    } 
    return result;
}

document.write(caesEncode('AMIGA',1)); //agregar parámetros de funciones para traer texto y offset de usuario

//Función decodificar
const caesDecode = (message,offset) =>{
    let result ='';
    for(let i=0; i<message.length; i++){
        let findAscii = message.charCodeAt(i);
        let getPosition = (findAscii - 65 - offset) % 26 + 65;
        let bringChar = String.fromCharCode(getPosition);
        result += bringChar;
    } 
    return result;
}

document.write(caesDecode('BNJHB',1)); //agregar parámetros de funciones para traer texto y offset de usuario

//Funciones code,decode
//------------------------------------------------------------------

//Función muestra pantalla siguiente01
const showOptions = () =>{
    let screen = document.getElementById('options');
    options.style.display = 'block';
    intro.style.display = 'none';
}

/*const showOffset1 = () =>{
    let screen = document.getElementById('offset1');
    offset1.style.display = 'block';
    options.style.display = 'none';
}*/
//Función para mostrar pantallas siguiente02
/*const nextScreen = () =>{
    let newview = '';
    if()
    return newview;
     //return document.getElementById(nextScreen)
}*/
