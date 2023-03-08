function deleteComment(idNote, id) {
    console.log(id);
    notes[idNote].comment = notes[idNote].comment.filter((key, index) => {
        return index != id;
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    addNote();
}

function deleteMainComment(idNote) {
    notes = notes.filter((key, index) => {
        console.log(index != idNote);
        return index != idNote;
    });

    localStorage.setItem("notes", JSON.stringify(notes));
    addNote();
}
