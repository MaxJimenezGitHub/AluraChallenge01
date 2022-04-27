//Funcionalidades de la Libreria de encriptar para el Challenge 01
//Reglas Encriptar
const enumCodifica = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};
//Reglas Desencriptar
const enumDecodifica = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
};
//Encripta una cadena
function encripta(cadena){
    let encrip = cadena.replace(/(?:a|e|i|o|u)/g, a => enumCodifica[a]);    
    return encrip;
}
//Desencripta una cadena
function decodifica(cadena) {    
    let decrip = cadena.replace(/(?:ai|enter|imes|ober|ufat)/g, a => enumDecodifica[a]);
    return decrip;
}
//Validar que solo se permiten letras minusculas
function validaLetras(evento){
    const { target, data } = evento;
    //console.log('data ', data);
    //console.log('target ', target);
    const pattern = /[^a-z ]/g;
    if(data) {
        if(pattern.test(data)){
            let value = target.value
            target.value = value.substring(0, value.length - 1)
        }
    }
}