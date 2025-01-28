// encode

let standard = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    let substitution = "QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq_";

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
    return result;
}

let input = "shifa";
let output = encodeString(input);
console.log(output); 


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
    }
    return result;
}

let encoded = "ilkxm";
let decoded = decodeString(encoded);
console.log(decoded); 