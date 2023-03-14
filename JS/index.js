let notes = JSON.parse(localStorage.getItem("notes")) || [];

const setKeys = new Set();

function addNote() {

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    
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
                <p></p>
                <button onClick="addComment(${i})">Отправить</button>
            </div>
        `;

        const commentsDiv = document.createElement("div");
        for (let j = 0; j < notes[i].comment.length; j++) {
            const divCom = document.createElement("div");
            divCom.innerHTML = `
                <div class="Comment">
                    <div class="Comment__dateName">
                    <div>
                            ${notes[i].comment[j].name}
                            <p>
                            ${dateFn(notes[i].comment[j].time)}
                        </p>
                        </div>
                        <div>
                            <p class="Comment__time">
                                ${notes[i].comment[j].text}
                            </p>
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
                        
                    </div>
                   
                </div>
            `;
            commentsDiv.appendChild(divCom);
        }
        newDiv.appendChild(commentsDiv);
        root.appendChild(newDiv);
    }
}

sort()
addNote();
