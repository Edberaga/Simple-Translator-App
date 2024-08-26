import { translate } from "./translate.js";

function translateText() {
    const input = document.getElementById('word').value;
    const language = document.getElementById('language').value;
    const output = document.getElementById('result');

    console.log(input, language);
    output.innerHTML = `Translation: ${translate(language, input)}`; 
}

console.log(translateText());

window.translateText = translateText;