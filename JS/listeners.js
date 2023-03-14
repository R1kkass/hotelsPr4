addEventListener("keydown", function (e) {
    setKeys.add(e.keyCode);
    if (
        [...setKeys][0] == 13 &&
        document.querySelector(".Form").style.opacity == "1"
    ) {
        add();
    }
});

addEventListener("keyup", function (e) {
    setKeys.delete(e.keyCode);
});

const formInput = document.querySelector(".Form__content").querySelectorAll("input");

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
    evt.stopPropagation();
}


addEventListener('keydown', (e)=>{
    if(e.keyCode==27){
        modal()
    }
})

