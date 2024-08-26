const translations = {
    "malay": {
        "morning": "pagi"
    },
    "spanish": {
        "morning": "mañana"
    }
};

export function translate(language, text) {
    if (translations[language] && translations[language][text]) {
        return translations[language][text];
    } else {
        return "Translation not found"; // Return if the translation is not found
    }
}