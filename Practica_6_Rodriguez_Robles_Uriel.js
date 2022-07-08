
/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe miFuncion(7) devolverá true */
const numeroPrimo = (numero = undefined) => {
if (numero === undefined) return console.warn("No ingresaste un número");
    
if (typeof numero !== "number") return console.error('El valor"${numero}" ingresado, NO es un número');
    
if (numero === 0) return console.error("El número no puede ser 0");
    
if (numero === 1) return console.error("El número no puede ser 1");
    
if (Math.sign(numero) === -1) return console.error("El número no puede ser negativo");
let divisible= false;
    
for (let i = 2; i < numero; i++) {    
    if ((numero %i) === 0){  
    divisible = true;
    break; 
}
}
return (divisible)
?console.log('El número ${numero}, NO es primo')
:console.log('El número ${numero}, Sí es primo');
}

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
const numeroParimpar = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un número");
    
    if (typeof numero !== "number") return console.error('El valor "${numero}" ingresado, NO es un número');
    
    return((numero %2) === 0)
    
    ?console.info('El número ${numero} es Par')
    :console.info("El número ${numero) es Impar")

    }

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */
const convertirGrados = (grados = undefined, unidad = undefined) => {

if (grados === undefined) return console.warn("No ingresaste grados a convertir");
        
if (typeof grados !== "number") return console.error('El valor "${grados}" ingresado, NO es un número');
        
if (unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");
        
if (typeof unidad !== "string") return console.error('El valor "${unidad}" ingresado, NO es una cadena de texto');
        
if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");     

if (unidad === "C") {
        return console.info('${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F');
        
        } else if (unidad === "F") {
        return console.info('${grados) °F = ${Math.round(((grados - 32) * (5/9)))}°C'); } 
        else {
        return console.error("El tipo de grados a convertir NO es válido"); 
    }
    }

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
miFuncion(100,2) devolverá 4 base 10. */

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {

    if (numero === undefined) return console.warn("No ingresaste el número a convertir");
    
    if (typeof numero !== "number") return console.error('El valor "${numero}" ingresado, NO es un número');
    
    if (base === undefined) return console.warn("No ingresaste la base a convertir");
    
    if (typeof base !== "number") return console.error('El valor "${base}" ingresado, NO es un número');
    
    if (base === 2){
    
    return console.info("${numero) base $(base) = $(parseInt(numero, base)) base 10");
    
    } else if (base ===10) {
    
    return console.info('$(numero) base $(base) = $((numero.toString(2))) base 2');
    
    }
}


/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
 pe. miFuncion(1000, 20) devolverá 800. */

 const aplicarDescuento = (monto = undefined, descuento = 0) => {
if (monto === undefined) return console.warn("No ingresaste el monto");

if (typeof monto!== "number") return console.error('El valor "${monto)" ingresado, NO es un número');

if (monto === 0) return console.error("El monto no puede ser 0");

if (Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

if (typeof descuento !== "number") return console.error('El valor "${descuento)" ingresado, NO es un número');

if (Math.sign(descuento) ===-1) return console.error("El descuento no puede ser negativo");
return console.info('$(monto)-${descuento)% = ${monto-((monto* descuento) / 100)}')
 }

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const calcularAnios = (fecha = undefined) => {

    if (fecha === undefined) return console.warn("No ingresaste la fecha");
    
    if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");
    
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(), 
    aniosEnMS = 1000 * 60 * 60* 24 * 365
    aniosHumanos= Math.floor(hoyMenosFecha / aniosEnMS);
    return (Math.sign(aniosHumanos) === -1)
    ? console.info('Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.')
    :(Math.sign(aniosHumanos) ===1)
     ? console.info('Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.')
    :console.info('Estamos en el año actual $(fecha.getFullYear()}.')
    }

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const contarLetras = (cadena = "") => {

    if (!cadena) return console.warn("No ingresaste una cadena de texto");
    
    if (typeof cadena !== "string") return console.error('El valor "${cadena}" ingresado, NO es una cadena de texto');
    
    let vocales = 0,
    consonantes = 0;
    
    cadena = cadena.toLocaleLowerCase();
    
    for (let letra of cadena) { 
    if (/[aeiouáéíóúû]/.test(letra)) vocales++;

    if (/[bcdfghjklmnopqrstvwxyz]/.test(letra)) consonantes++;

    return console.info({ 
    cadena, 
    vocales, 
    consonantes
    })
    }}

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

    const validarNombre = (nombre = "") => {

    if (!nombre) return console.warn("No ingresaste un nombre");
    
    if (typeof nombre !== "string") return console.error('"El valor "${nombre}" ingresado, NO es una cadena de texto"');
    
    let expReg=/^[A-Za-zÑñÁáÉéĺíÓóÚúÜü\s]+$/g.test(nombre);
    
    return (expReg)
    ? console.info('"${nombre}", es un nombre válido')
    
    :console.warn('"${nombre}", NO es un nombre válido"'); 
}

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validaremail = (email = "") => {

    if (!email) return console.warn("No ingresaste un nombre");
    
    if (typeof email !== "string") return console.error('"El valor "${nombre}" ingresado, NO es una cadena de texto"');
    
    let expReg= /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    
    return (expReg)
    ? console.info('"${email}", es un email válido')
    
    :console.warn('"${email}", NO es un email válido"'); }