document.querySelector(".Form").style.display == "none";

function toggleComment(id) {
    const inps = document.querySelectorAll(".Note");
    console.log(inps[id].querySelector(".commentForm").style.display);
    if (inps[id].querySelector(".commentForm").style.display == "flex") {
        inps[id].querySelector(".commentForm").style.display = "none";
    } else {
        inps[id].querySelector(".commentForm").style.display = "flex";
    }
}

function modal() {
    console.log("e");
    if (document.querySelector(".Form").style.display == "flex") {
        document.querySelector(".Form").style.display = "none";
    } else {
        document.querySelector(".Form").style.display = "flex";
    }
}

function stopDefAction(evt) {
    evt.stopPropagation();
}

document
    .querySelector(".Form__content")
    .addEventListener("click", stopDefAction, false);

