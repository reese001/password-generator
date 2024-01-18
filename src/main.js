// importing the sass stylesheet for bundling
import "./../sass/styles.scss";

function randomMe(lower = 1, upper = 100) {
    let randomNum = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return randomNum;
}

// this function generates random passwords based on arguments and returns array of passwords
// length = generated password number of characters
// specialChars = can the password include special characters? (true / false)
function generatePasswords(length, specialChars) {

}

function main() {

}

main();