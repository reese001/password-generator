// importing font awesome
// import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
// import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";
import "@fortawesome/fontawesome-free/js/solid.min.js";

// importing the sass stylesheet for bundling
import "./../sass/styles.scss";

const NUMBER_OF_PASSWORDS = 20;

let glyphs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*"];

function randomMe(lower = 1, upper = 100) {
    let randomNum = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return randomNum;
}

function generatePasswords(length, specialChars) {
    let specialCharList = ["!", "@", "#", "$", "%", "^", "&", "*"];
    let passwords = [];

    for (let p = 0; p < NUMBER_OF_PASSWORDS; p++) {
        let password = "";
        let validGlyphs;
        if (specialChars) {
            validGlyphs = glyphs;
        } else {
            validGlyphs = glyphs.filter(glyph => !specialCharList.includes(glyph));
           
        }
        for (let n = 0; n < length; n++) {
            let glyph = validGlyphs[randomMe(0, validGlyphs.length - 1)];
        
            
            if (glyph >= "a" && glyph <= "z") {
                glyph = randomMe(1, 2) === 1 ? glyph.toUpperCase() : glyph.toLowerCase();
            }
            password += glyph;
        }
        passwords.push(password);
    }
    return passwords;
}

function main() {
    let passwords = generatePasswords(10, false); 
    let output = "";
    for (let password of passwords) {
        output += password + "<br>";
    }

    document.getElementById("passwords").innerHTML = output;
}

main();
