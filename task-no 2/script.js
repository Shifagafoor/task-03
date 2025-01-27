function substituteString(input) {
    let standard = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    let substitution = "QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq_";
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
let output = substituteString(input);
console.log(output); 