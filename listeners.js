addEventListener("keydown", function (e) {
    setKeys.add(e.keyCode);
    if (
        [...setKeys][0] == 13 &&
        document.querySelector(".Form").style.display == "flex"
    ) {
        add();
    }
});

addEventListener("keyup", function (e) {
    setKeys.delete(e.keyCode);
});

const formInput = document
    .querySelector(".Form__input")
    .querySelectorAll("input");

formInput[0].addEventListener("input", () => {
    validateInput(0);
});

TextInput.addEventListener("input", () => {
    if (validate(TextInput.innerHTML)) {
        TextInput.style.boxShadow = "0 0 5px 2px indianred";
        err.innerHTML = "";
    } else {
        err.innerHTML = "";
        TextInput.style.boxShadow = "0 0 5px 10px indianred";
    }
});

function stopDefAction(evt) {
    console.log(evt);
    evt.stopPropagation();
}
