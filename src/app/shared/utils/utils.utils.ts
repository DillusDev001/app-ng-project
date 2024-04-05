// Devuelve la cadena original con totas las palabras en letra capital. Ej: "diego junior llusco chui" -> "Diego Junior Llusco Chui"
export function letraCapital(str: string): string {
    if (str.includes(' ')) {
        const arrayString = str.split(" ");
        for (var i = 0; i < arrayString.length; i++) {
            arrayString[i] = arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1);
        }
        const frase = arrayString.join(" ");
        return frase;
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Devuelve la primera palabra de una cadena. Ej:"Diego Junior Llusco Chui" -> "Diego"
export function returnPrimerSubString(nombres: string): string {
    const arrayString = nombres.split(" ");
    let str = arrayString[0];
    return str;
}

// Devuleve una cadena en mayúsculas de todas las letras iniciales de cada palabra. Ej:"Diego Junior Llusco Chui" -> "DJLC"
export function inicialesCapital(str: string): string {
    const arrayString = str.split(" ");
    for (var i = 0; i < arrayString.length; i++) {
        arrayString[i] = arrayString[i].charAt(0).toUpperCase();
    }
    const frase = arrayString.join("");
    return frase;
}