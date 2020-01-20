addEventListener('load', () => {
    let url = new URL('http://host/filter?size=M&color=1&color=2&manufacturer=aaa&manufacturer=ddd');
    let searchParams = new URLSearchParams(url.search);
    let size = searchParams.get('size');
    let color = searchParams.getAll('color');
    let manufacturer = searchParams.getAll('manufacturer');

    const sumCheckboxInput = document.querySelectorAll('[name="color"]');
    const sumMultipleInput = document.querySelectorAll('[name="manufacturer"]');
    const radioInput = document.querySelectorAll('[name="size"]');
    const radioSales = document.querySelector('[name="sales"]');
    for (let i = 0; i < sumCheckboxInput.length; i++) {
        if (sumCheckboxInput[i].value === color[i]) sumCheckboxInput[i].checked = true;
    }
    for (let i = 0; i < radioInput.length; i++) {
        if (radioInput[i].value === size) radioInput[i].checked = true;
    }
    for (let i = 0; i < sumMultipleInput.length; i++) {
        if (sumMultipleInput[i].value === manufacturer[i]) sumMultipleInput[i].selected = true;
    }
});

addEventListener("input", ({target}) => {
    if (!target.matches("form [sales]")) return;
    const url = `${new URLSearchParams(new FormData(target.form))}`;
    console.log(url);
});

