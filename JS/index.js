let notes = JSON.parse(localStorage.getItem("notes")) || [];

const setKeys = new Set();



function addNote() {
    root.innerHTML = "";
    for (let i = 0; i < notes.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList = "Note";

        newDiv.innerHTML = `
            <div class="Note__dateUser">
                <div>
                    <p>Пользователь: ${notes[i].user}</p>
                </div>
                <div>${dateFn(notes[i].time)}</div>
            </div>
            <div class="Note__text">${notes[i].text}</div>
            <div class="Note__buttons">
                <button onclick="toggleComment(${i})">
                    Ответить на комментарий
                </button>
                <button 
                    onclick="like(${i})" 
                    style="color: white;background: ${
                        notes[i].like ? "indianred" : "none"
                    }"
                >
                    ${svgLike}
                </button>
                <button 
                    onclick="deleteMainComment(${i})" 
                >
                    ${svgDelete}
                </button>
            </div>
            <div class="commentForm" style="display: none">
                <div>
                    <input placeholder="Текст"/>
                </div>
                <div>
                    <input placeholder="Имя"/>
                </div>
                <div>
                    <input placeholder="Текст" type="date"/>
                </div>
                <div>
                    <input placeholder="Текст" type="time"/>
                </div>
                <p id='errorComment${i}'></p>
                <button onClick="addComment(${i})">Отправить</button>
            </div>
        `;

        const commentsDiv = document.createElement("div");
        for (let j = 0; j < notes[i].comment.length; j++) {
            const divCom = document.createElement("div");
            console.log(dateFn(notes[i].comment[j].time));
            divCom.innerHTML = `
                <div class="Comment">
                    <div class="Comment__dateName">
                        <div>
                            <p class="Comment__time">
                                ${notes[i].comment[j].text}
                            </p>
                            <p>
                                ${dateFn(notes[i].comment[j].time)}
                            </p>
                        </div>
                        <div>
                            ${notes[i].comment[j].name}
                              
                        </div>
                    </div>
                    <div class="Comment__buttons">
                        <button onclick="deleteComment(${i}, ${j})">${svgDelete}</button>
                        <button 
                            class="likeComment"
                            onclick="likeComment(${i}, ${j})" 
                            style="color: white; ;background: ${
                                notes[i].comment[j]?.like
                                    ? "indianred; display: flex"
                                    : "none"
                            }"
                        >
                            ${svgLike}
                        </button>  
                    </div>
                </div>
            `;
            commentsDiv.appendChild(divCom);
        }
        newDiv.appendChild(commentsDiv);
        root.appendChild(newDiv);
    }
}

addNote();
