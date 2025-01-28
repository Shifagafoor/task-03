// encode

let standard = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS";
    let substitution = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

function encodeString(input) {
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let index = standard.indexOf(char);
        if (index !== -1) {
            result += substitution[index];
        } else {
            result += char;
        }
    }
    document.querySelector(".input_text").value =result

    return result;
}


// decode

function decodeString(input) {
    
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let index = substitution.indexOf(char);
        if (index !== -1) {
            result += standard[index];
        } else {
            result += char;
        }

        document.querySelector(".text_input").value = result;
    }
    return result;
}

document.querySelector(".encrypt_button").addEventListener('click', () => {

    let input = document.querySelector('.text_input').value;

    encodeString(input)
})

document.querySelector(".decript_button").addEventListener("click", () => {
    
    let input = document.querySelector(".input_text").value;

    decodeString(input);
});