let addMessage = () => {
    let text = document.getElementById('text').value;
    const win = document.getElementById('frame').contentWindow;
    win.postMessage(JSON.stringify({
        key: '1',
        data: text
    }), "*");
};
let removeMessage = () => {
    const win = document.getElementById('frame').contentWindow;
    win.postMessage(JSON.stringify({
        key: '1',
    }), "*");
};
let call = () => {
    document.getElementById('frame').contentWindow.callBack = () => {
        console.log('callback')
    };
};

