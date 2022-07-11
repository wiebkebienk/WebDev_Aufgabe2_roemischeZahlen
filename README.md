# WebDev_Aufgabe2_roemischeZahlen
Hier ist Ihre Aufgabe dezimale Zahlen in römische Zahlen zu konvertieren. Beachten Sie hierbei jedoch, dass die Römer keine Zahlen für 0 oder negative Werte hatten. Außerdem stellt die höchste darstellbare römische Zahl die 3000 mit MMM dar. ACHTUNG: Lösungen die auf reines Mapping hinauslaufen werden mit 0 Punkten gewertet!

a) Projekt aufsetzen:
Legen Sie ein verzeichnis namens roemische-zahlen an und wechseln dort hinein.
Legen Sie mit dem Befehl
npm init -y
    eine package.json-Datei an.

Installieren Sie das Testframework Jest mit dem Befehl
npm install jest --save-dev

Ersetzen Sie das test-Script in der package.json durch den aufruf:
"test": "jest"

Legen Sie ein Verzeichnis namens src an und erstellen darin eine Datei mit dem namen
roman-numbers.spec.js

Darin kreieren Sie einen describe-Block namens "romanNumbers" mit einem it-Block "should work". Innerhalb des it-blocks gen Sie den Befehl
console.log("Hallo Ansbach");
ein und

Überprüfen Sie mit
npm test
    ob der Gruß "Hallo Ansbach" in der Ausgabe erscheint.

b) Schreiben Sie einen Test der überprüft, dass eine Funktion namens "convertToRoman" die mit dem Wert 1 aufgerufen wird, das römische Äquivalent "I" hervorbringt. Diese Funktion soll in der Datei roman-numbers.js definiert sein.

c) Schreiben sie Tests, die überprüft dass die Funktion "convertToRoman" bei 2 "II" und bei 3 "III" zurück gibt. Stellen Sie sicher, dass die Tests "grün" sind, also nicht fehlschlagen. Tipp: Versuchen Sie Schleifen zu vermeiden, da sie die Lösung nur schwieriger machen.

d) Schreiben Sie Tests, die überprüfen, dass die Funktion "convertToRoman" bei 5 "V" und bei 10 "X" ausgibt. Stellen Sie sicher, dass die Tests "grün" sind, also nicht fehlschlagen.

e) Schreiben Sie Tests, die überprüfen, dass die Funktion "convertToRoman" bei 4 "IV" und bei 9 "IX" ausgibt. Stellen Sie sicher, dass die Tests "grün" sind, also nicht fehlschlagen.

f) Schreiben Sie Tests die überprüfen, dass die Funktion "convertToRoman" alle noch fehlenden zahlen zwischen 1 und 20 korrekt konvertieren. Ergänzen Sie dann Tests für 50 => "L", 40 => "XL". Verfahren Sie weiter so für alle weiteren Buchstaben die in Römischen Zahlen eine Rolle spielen: 100 => "C", 500 => "D", 1000 => "M" und stellen Sie bei jedem neuen Test sicher, dass er auch funktioniert.

g) Schreiben Sie einen Test der sicher stellt, dass der aufruf von "convertToRoman" mit Werten größer als 3000 eine Exception mit dem Text "Values above 3000 are not defined" werfen.