const convertToRoman = (ArabischeZahl) =>{
    /* Konstante und Variable definieren */
    const EinheitRoemisch = new Array("M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I");
    const EinheitArabisch = new Array(1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1);
    let RoemischeZahl = "";

    if (ArabischeZahl <= 0 || ArabischeZahl > 3000) {
        return "Values under 1 and above 3000 are not defined"
    }

    else{ 
    for (var Nr = 0; Nr < EinheitArabisch.length; Nr++)
        while (ArabischeZahl >= EinheitArabisch[Nr]) {
            RoemischeZahl += EinheitRoemisch[Nr];
            ArabischeZahl -= EinheitArabisch[Nr];
        }

    return RoemischeZahl;
    }
}

module.exports = {
convertToRoman
}