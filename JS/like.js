function likeComment(idNote, id) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    const likes = document
        .querySelectorAll(".Note")
        [idNote].querySelectorAll(".likeComment")[id];
    if (notes[idNote].comment[id]?.like) {
        notes[idNote].comment[id].like = false;
        likes.style.background = "none";
    } else {
        notes[idNote].comment[id].like = true;
        likes.style.background = "red";
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    addNote();
}

function like(id) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    const likes = document
        .querySelectorAll(".Note")
        [id].querySelector(".Note__buttons");
    console.log(notes);

    console.log(id);
    if (notes[id].like) {
        notes[id].like = false;
        likes.style.background = "none";
    } else {
        notes[id].like = true;
        likes.style.background = "red";
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    addNote();
}
