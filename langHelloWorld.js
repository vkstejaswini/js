function helloWorld(language) {
    if (language == 'fr') {
        return 'Bonjour tout le monde';
    } else if (language == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));