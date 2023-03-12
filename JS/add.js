function add() {
    const date = new Date();
    const inputs = document
        .querySelector(".Form__content")
        .querySelectorAll("input");

    let arr = [];
    console.log(inputs[2].value, inputs[1].value);
    if (validate(inputs[0].value, TextInput.innerHTML)) {
        if (inputs[1]?.value && inputs[2]?.value) {
            arr = [
                ...inputs[1].value.split("-"),
                ...inputs[2].value.split(":"),
            ];;
        } else {
            arr = [
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
            ];
        }
        notes.push({
            id: Date.now(),
            user: inputs[0].value,
            time: arr,
            text: TextInput.innerHTML,
            comment: [],
        });
        localStorage.setItem("notes", JSON.stringify(notes));
        addNote();
        modal()
        err.innerHTML = "";
    } else {
        err.innerHTML = "<p>Поля пусты</p>";
        console.log(err);
    }
}

function addComment(id) {
    const inps = document.querySelectorAll(".Note");
    let inp = inps[id].querySelectorAll("input");
    const date = new Date();
    let arr = [];
    if (validate(inp[2].value, inp[3].value)) {
        let join = [...inp[2].value.split("-"), ...inp[3].value.split(":")];
        arr = join;
    } else {
        arr = [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
        ];
    }
    notes[id].comment.push({
        text: inp[0].value,
        name: inp[1].value,
        time: arr,
        like: false,
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    addNote();
}