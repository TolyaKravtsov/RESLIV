const validateColor = () => {
    let color = document.getElementById("name_input");
    color.value === color.defaultValue ? color.classList.remove("red") : color.classList.add("red");
};