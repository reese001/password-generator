// importing font awesome
// import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
// import "@fortawesome/fontawesome-free/scss/solid.scss";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";
import "@fortawesome/fontawesome-free/js/solid.min.js";

// importing the sass stylesheet for bundling
import "./../sass/styles.scss";

let glyphs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*"];

function randomMe(lower = 1, upper = 100) {
    let randomNum = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return randomNum;
}

// this function generates random passwords based on arguments and returns array of passwords
// length = generated password number of characters
// specialChars = can the password include special characters? (true / false)
function generatePasswords(length, specialChars) {
    // let passwords = new Array();
    // passwords[0] = "password";
    // passwords[1] = "1234";
    // passwords[2] = "740317";
    
    // let passwords = ["password", "1234", "740317"];
    // passwords.push("123456789");
    
    // console.log(passwords);
    
    
    let passwords = [];

}

function main() {

    generatePasswords(10, true);
}

main();