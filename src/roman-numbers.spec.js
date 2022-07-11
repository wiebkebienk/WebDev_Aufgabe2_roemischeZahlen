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
})