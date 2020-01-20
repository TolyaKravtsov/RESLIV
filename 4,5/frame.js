window.onmessage = e => {
    debugger
    if (callBack) {
        debugger
        callBack();
    }
    const payload = JSON.parse(e.data);
    if (payload.data !== undefined) {
        localStorage.setItem(payload.key, payload.data);
        console.log(localStorage.getItem(payload.key));
        let div = document.createElement('div',);
        div.id = "1";
        div.innerHTML = `${payload.data}`;
        document.body.appendChild(div);
    } else {
        localStorage.removeItem(payload.key);
        let element = document.getElementById('1');
        element.remove();
        console.log("remove")
    }
};

function callBack() {

}