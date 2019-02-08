window.cipher = {
    encode: function(offset, message) {
        let result ='';
        for(let i=0; i<message.length; i++){
            let findAscii = message.charCodeAt(i);
            let getPosition = (findAscii - 65 + offset) % 26 + 65;
            let bringChar = String.fromCharCode(getPosition);
            result += bringChar;
        } 
        return result;
    },
    
    decode: function(offset, message){
        let result ='';
        for(let i=0; i<message.length; i++){
            let findAscii = message.charCodeAt(i);
            let getPosition = (findAscii + 65 - offset) % 26 + 65;
            let bringChar = String.fromCharCode(getPosition);
            result += bringChar;
        } 
        return result;
    }
  };