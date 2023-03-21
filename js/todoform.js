const todoform = document.querySelector(`#todo-form`);
const todotext = todoform.querySelector(`#todo-text`);  //text입력칸
const todosubmit = todoform.querySelector(`todo-submit`); // submit
const ul = document.querySelector(`#todolist`);
const todo = document.querySelector(`#todo`);
const endToDo = document.querySelector(`#end-todo`);




//todo-form 이벤트 리스너

todoform.addEventListener(`submit`,printToDo);

function printToDo(e){
    e.preventDefault();
    //변수 지정
    const li = document.createElement(`li`);
    //체크박스
    const checkbox = document.createElement(`input`);
    checkbox.type = `checkbox`
    //li
    const span = document.createElement(`span`);
    //li안의 텍스트
    const text = document.createTextNode(todotext.value);
    //버튼
    const button = document.createElement(`button`);
    button.innerHTML =`✖`

    //생성
    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    span.appendChild(text);
    li.appendChild(button);
    
    //text 값 초기화
    todotext.value = ``;
    
    
    //카운팅
    const liCount = ul.querySelectorAll(`li`);
    const count = liCount.length;
    todo.innerHTML = `전체 할일 ${count}`;
    endToDo.innerHTML= ` / 완료한 할일 ${0}`;
    
    //완료한 할일 카운팅
    
    checkbox.addEventListener(`click`,check);
    function check(){
        event.target.parentNode.classList.toggle(`check`);
        const checkCount = document.querySelectorAll(`li.check`);
        const checkCou = checkCount.length;
        endToDo.innerHTML = ` / 완료한 할일 ${checkCou}`;
    }
    
    button.addEventListener(`click`,removeLi);
    function removeLi(){
        event.target.parentNode.remove();
        const liCount = ul.querySelectorAll(`li`);
        const count = liCount.length;
        todo.innerHTML = `전체 할일 ${count}`;
        const checkCount = document.querySelectorAll(`li.check`);
        const checkCou = checkCount.length;
        endToDo.innerHTML= ` / 완료한 할일 ${checkCou}`;
    }
}
    



