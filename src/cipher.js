/*v.1.0
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
  };*/
//v.1.1
  window.cipher = {
    encode: function(offset, message) {
        let result ='';
        let specialChars = 'ñÑáÁéÉíÍóÓúÚ';
        let specialCharsEncode = '¤¥§©ª®°±µßØæ';
        for(let i=0; i<message.length; i++){
            let indexSpecialChars = specialChars.indexOf(message.charAt(i)); 
            if(indexSpecialChars >=0 ){
                let offsetSpecialChar = indexSpecialChars + offset % 12;
                result += specialCharsEncode.charAt(offsetSpecialChar);
            } else {
                let findAscii = message.charCodeAt(i);
                let getPosition = (findAscii + offset) % 126;
                let bringChar = String.fromCharCode(getPosition);
                result += bringChar;
            }  
        } 
        return result;
    },
    
    decode: function(offset, message){
        let result ='';
        let specialChars = 'ñÑáÁéÉíÍóÓúÚ';
        let specialCharsEncode = '¤¥§©ª®°±µßØæ';
        for(let i=0; i<message.length; i++){
            let indexSpecialCharsEnc = specialCharsEncode.indexOf(message.charAt(i));
            if(indexSpecialCharsEnc >= 0){
                let offsetSpecialChar = indexSpecialCharsEnc - offset % 12;
                result += specialChars.charAt(offsetSpecialChar);
            } else {
                let findAscii = message.charCodeAt(i);
                let getPosition = (findAscii - offset) % 126;
                let bringChar = String.fromCharCode(getPosition);
                result += bringChar;
            }
        }
        return result;
    }
  };