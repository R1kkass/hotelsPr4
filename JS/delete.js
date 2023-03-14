function deleteComment(idNote, id) {
    notes[idNote].comment = notes[idNote].comment.filter((key, index) => {
        return index != id;
    });
    localStorage.setItem("notes", JSON.stringify(notes));
    addNote();
}

function deleteMainComment(idNote) {
    notes = notes.filter((key, index) => {
        return index != idNote;
    });

    localStorage.setItem("notes", JSON.stringify(notes));
    addNote();
}
