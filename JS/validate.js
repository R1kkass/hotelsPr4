function validate(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log();
        if (args[i].length < 3) {
            return false;
        }
    }
    return true;
}


function validateInput(id) {
    if (!validate(formInput[id].value)) {
        formInput[id].style.boxShadow = "0 0 5px 10px indianred";
        err.innerHTML = "";
    } else {
        formInput[id].style.boxShadow = "0 0 5px 2px indianred";
        err.innerHTML = "";
    }
}
