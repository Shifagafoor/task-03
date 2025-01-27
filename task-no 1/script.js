const keyInput = document.querySelector(".key");
const plainTextInput = document.querySelector(".plain");
const encryptTextInput = document.querySelector(".encrypt");


function caesarCipher(input, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const inputUpper = input.toUpperCase();
    let result = "";

    for (let char of inputUpper) {
        if (alphabet.includes(char)) {
            const currentIndex = alphabet.indexOf(char);
            const newIndex = (currentIndex + shift) % 26;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }

    return result;
}

plainTextInput.addEventListener("input", () => {
    const plainText = plainTextInput.value;
    const shift = parseInt(keyInput.value) || 0; 
    const encryptedText = caesarCipher(plainText, shift);
    encryptTextInput.value = encryptedText;
});
