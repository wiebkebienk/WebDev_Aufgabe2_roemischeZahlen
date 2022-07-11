const { convertToRoman } = require('./roman-numbers')

//Aufgabe a
describe('romanNumbers', () => {
    it('Should work', () => {
        console.log("Hallo Ansbach");
    })
})

//Zahlen testen
describe('convertToRoman', () => {
    var result = 0

    it('sollte eine I für 1 zurückgeben', () => {
        const ArabischeZahl = 1
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('I')
    })

    it('sollte eine II für 2 zurückgeben', () => {
        const ArabischeZahl = 2
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('II')
    })

    it('sollte eine III für 3 zurückgeben', () => {
        const ArabischeZahl = 3
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('III')
    })
})