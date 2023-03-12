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
    if (document.querySelector(".Form").style.opacity == "1") {
        document.querySelector(".Form").style.opacity = "0";
        document.querySelector(".Form").style.zIndex = "-1";
        document.querySelector('.ButtonModal').style.bottom='10px'
        document.querySelector('.ButtonModal').innerHTML='Написать комментарий'
    } else {
        document.querySelector(".Form").style.opacity = "1";
        document.querySelector(".Form").style.zIndex = "1";
        document.querySelector('.ButtonModal').style.bottom='300px'
        document.querySelector('.ButtonModal').innerHTML='Скрыть'
    }
}

function stopDefAction(evt) {
    evt.stopPropagation();
}

document
    .querySelector(".Form__content")
    .addEventListener("click", stopDefAction, false);

function darkTheme(){
    if(document.body.style.background=='rgb(40, 40, 40)'){
        document.body.style.background='white'
    }else{
        document.body.style.background='rgb(40, 40, 40)'
    }
}