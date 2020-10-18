        
const alphabet = [
    'A','Ą','B','C','Ć','D','E','Ę','F',
    'G','H','I','J','K','L', 'Ł',
    'M','N','Ń','O','Ó','P','Q','R',
    'S','Ś','T','U','V','W','X',
    'Y','Z','Ż','Ź', ' ' 
];
  
function encryptText() {

const form = document.forms[0];

let title=
 document.getElementById("titleId");  
   
title.innerHTML = "Zaszyfrowany tekst";

let shift= Number(form.shift.value); 
   
let sourceText =  
  form.sourceText.value;       
   
form.sourceText.value 
  = [... sourceText ].map(char =>
    encrypt(char, shift)).join('');
}
  
function decryptText() {
const form = document.forms[0];
let title = document.getElementById("titleId");       

title.innerHTML = "Odszyfrowany tekst";
     
let shift =   
  Number(form.shift.value);
let sourceText = 
  form.sourceText.value;    
   
shift = 
   (alphabet.length - shift) %  
    alphabet.length;
  
form.sourceText.value 
    = [... sourceText ].map(char => 
      encrypt(char,    
      shift)).join('');
}
  
function encrypt(char, shift) {
let include =        
 alphabet.includes(
  char.toUpperCase()); 
   
if (include){      
 let position =         
  alphabet.indexOf(
   char.toUpperCase());
    
let newPosition = 
  (position+shift) %  
    alphabet.length;
return alphabet[newPosition];
}else  return char;
}        
