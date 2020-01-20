let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();

async function firstRequest() {
    return new Promise((resolve, reject) => {
            xhr.open('GET', '/somethingURL', true);
            xhr.send();
            resolve("1-ое Сообщение получено");
        }
    )
}

firstRequest().then((message) => {
    xhr.open('GET', '/somethingURL/next', true);
    xhr.send();
    console.log(message);
    console.log('Сообщение 2 получено')
});