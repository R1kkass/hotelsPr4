function dateFn(day) {
    const dates = new Date();
    if (
        dates.getDate() == day[2] &&
        dates.getMonth() + 1 == day[1] &&
        dates.getFullYear() == day[0]
    ) {
        return `Сегодня в ${day[3]}:${day[4] < 10 ? "0" + day[4] : day[4]}`;
    } else if (
        dates.getDate() - 1 == day[2] &&
        dates.getMonth() + 1 == day[1] &&
        dates.getFullYear() == day[0]
    ) {
        return `Вчера в ${day[3]}:${day[4] < 10 && day[4].length<2 ? "0" + day[4] : day[4]}`;
    } else {
        return `${day[0]}.${day[1]}.${day[2]} ${day[3]}:${day[4]}`;
    }
}
