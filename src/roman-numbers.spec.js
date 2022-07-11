const { convertToRoman } = require('./roman-numbers')

//Aufgabe a
describe('romanNumbers', () => {
    it('Should work', () => {
        console.log("Hallo Ansbach");
    })
})

//relevante Zahlen testen
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

    it('sollte eine IV für 4 zurückgeben', () => {
        const ArabischeZahl = 4
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('IV')
    })

    it('sollte eine V für 5 zurückgeben', () => {
        const ArabischeZahl = 5
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('V')
    })

    it('sollte eine VI für 6 zurückgeben', () => {
        const ArabischeZahl = 6
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('VI')
    })

    it('sollte eine VII für 7 zurückgeben', () => {
        const ArabischeZahl = 7
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('VII')
    })

    it('sollte eine VIII für 8 zurückgeben', () => {
        const ArabischeZahl = 8
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('VIII')
    })

    it('sollte eine IX für 9 zurückgeben', () => {
        const ArabischeZahl = 9
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('IX')
    })

    it('sollte eine X für 10 zurückgeben', () => {
        const ArabischeZahl = 10
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('X')
    })

    it('sollte eine XI für 11 zurückgeben', () => {
        const ArabischeZahl = 11
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XI')
    })

    it('sollte eine XII für 12 zurückgeben', () => {
        const ArabischeZahl = 12
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XII')
    })

    it('sollte eine XIII für 13 zurückgeben', () => {
        const ArabischeZahl = 13
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XIII')
    })

    it('sollte eine XIV für 14 zurückgeben', () => {
        const ArabischeZahl = 14
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XIV')
    })

    it('sollte eine XV für 15 zurückgeben', () => {
        const ArabischeZahl = 15
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XV')
    })

    it('sollte eine XVI für 16 zurückgeben', () => {
        const ArabischeZahl = 16
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XVI')
    })

    it('sollte eine XVII für 17 zurückgeben', () => {
        const ArabischeZahl = 17
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XVII')
    })

    it('sollte eine XVIII für 18 zurückgeben', () => {
        const ArabischeZahl = 18
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XVIII')
    })

    it('sollte eine XIX für 19 zurückgeben', () => {
        const ArabischeZahl = 19
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XIX')
    })

    it('sollte eine XX für 20 zurückgeben', () => {
        const ArabischeZahl = 20
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XX')
    })

    it('sollte eine XL für 40 zurückgeben', () => {
        const ArabischeZahl = 40
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XL')
    })

    it('sollte eine L für 50 zurückgeben', () => {
        const ArabischeZahl = 50
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('L')
    })

    
    it('sollte eine XC für 90 zurückgeben', () => {
        const ArabischeZahl = 90
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('XC')
    })

    it('sollte eine C für 100 zurückgeben', () => {
        const ArabischeZahl = 100
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('C')
    })

    it('sollte eine CD für 400 zurückgeben', () => {
        const ArabischeZahl = 400
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('CD')
    })

    it('sollte eine D für 500 zurückgeben', () => {
        const ArabischeZahl = 500
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('D')
    })

    it('sollte eine CM für 900 zurückgeben', () => {
        const ArabischeZahl = 900
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('CM')
    })

    it('sollte eine M für 1000 zurückgeben', () => {
        const ArabischeZahl = 1000
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('M')
    })

    it('sollte eine MMM für 3000 zurückgeben', () => {
        const ArabischeZahl = 3000
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('MMM')
    })

})

//testen, ob random Zahlen funktionieren
describe('convertToRoman', () => {
    it('sollte eine DCCXLVIII für 748 zurückgeben', () => {
        const ArabischeZahl = 748
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('DCCXLVIII')
    })

    it('sollte eine MDCXXXVIII für 1638 zurückgeben', () => {
        const ArabischeZahl = 1638
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('MDCXXXVIII')
    })

    it('sollte eine CCXLIX für 249 zurückgeben', () => {
        const ArabischeZahl = 249
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('CCXLIX')
    })

    it('sollte eine CMXXXIV für 934 zurückgeben', () => {
        const ArabischeZahl = 934
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('CMXXXIV')
    })

    it('sollte eine CCVII für 207 zurückgeben', () => {
        const ArabischeZahl = 207
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('CCVII')
    })

    it('sollte eine MMCMXCIX für 2999 zurückgeben', () => {
        const ArabischeZahl = 2999
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('MMCMXCIX')
    })

    it('sollte eine MCCXXXII für 1232 zurückgeben', () => {
        const ArabischeZahl = 1232
        result = convertToRoman(ArabischeZahl)
        console.log(result);
        expect(result).toStrictEqual('MCCXXXII')
    })

})