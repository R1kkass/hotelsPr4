

function sort() {
    let res;
    if (selectSort.value == "Сначала новые") {
        res = JSON.parse(localStorage.getItem("notes")).sort((a, b) => {
            const date2 = new Date(returnDate(b));
            const date1 = new Date(returnDate(a))
            return date2 - date1;
        });
    } else if (selectSort.value == "Сначала старые") {
        res = JSON.parse(localStorage.getItem("notes")).sort((a, b) => {
            const date2 = new Date(returnDate(b));
            const date1 = new Date(returnDate(a))
            return date1 - date2;
        });
    } else if (selectSort.value == "По пользователям") {
        res = JSON.parse(localStorage.getItem("notes")).sort((a, b) => {
            return (a.user).localeCompare(b.user);
        });
    }else{
        res = JSON.parse(localStorage.getItem("notes")).sort((a, b) => {
            return a.id-b.id
        });
    }
    localStorage.setItem('notes', JSON.stringify(res))
    addNote();
}

function returnDate(b){
    return `${b.time[0] < 10 ? '0'+b.time[0] : b.time[0]}-${b.time[1] < 10 ? '0'+String(b.time[1]) : b.time[1]}-${b.time[2] < 10 ? "0"+ String(b.time[2])  : b.time[2]}T${b.time[3] < 10 ? "0"+String(b.time[3]) : b.time[3]}:${b.time[4] < 10 ? '0'+b.time[4] : b.time[4]}`
}