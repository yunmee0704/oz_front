//요소 선택 및 배열 선언
const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')

let todoArr=[];

//로컬저장소에 저장하기
 function saveTools(){
    const todoString = JSON.stringify(todoArr);
    localStorage.setItem('myTodos',todoString)
    displayTodos()
 }
//로컬저장소에서 가져오기
function loadTodos(){
   const myTodos = localStorage.getItem('myTodos')
    if(myTodos !== null){
        todoArr = JSON.parse(myTodos)
        displayTodos()
    }  
}

loadTodos()

//할일 삭제하기
function handleTodoDelBtnClick(clickedId){
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId
    })
    displayTodos()
    saveTools()
}

//한일 완료 체크하기
function handleTodoItemClick(clickedId){
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){
            return{
                ...aTodo, //할일리스트의 배열을 가져오기
                todoDone: !aTodo.todoDone//false를 true,true를 false로 바꿈
            }
        }else{
            return aTodo
        }
    })
    displayTodos()
    saveTools()
}

//할일 보여주기
function displayTodos(){
    todoList.innerHTML=''//초기화 한 후에 진행함. 안그러면 누적된 데이터가 매번 보여짐
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement('li')
        const todoDelBtn = document.createElement('span')
        todoDelBtn.textContent='삭제'
        todoItem.textContent = aTodo.todoText
        todoItem.title='클릭하면 완료됨'
        
        if(aTodo.todoDone){
            todoItem.classList.add('done')
        }else{
            todoItem.classList.add('yet')
        }

        todoDelBtn.title='클릭하면 삭제됨'

        todoItem.addEventListener('click',function(){
            handleTodoItemClick(aTodo.todoId);
        })

        todoDelBtn.addEventListener('click',function(){
            
            handleTodoDelBtnClick(aTodo.todoId)
        })

        todoItem.appendChild(todoDelBtn)
        todoList.appendChild(todoItem)
    })
}

//할일 추가하기
todoForm.addEventListener('submit',function(e){
    e.preventDefault()//submit는 페이지가 새로고침하는 기능이 있어서 방지.
    const toBeAdded ={
        todoText:todoForm.todo.value,//인풋창에 입력한 내용
        todoId:new Date().getTime(),
        todoDone: false//다 하지 않은 상태
    }
    todoForm.todo.value=''//입력 후 인풋창 초기화
    todoArr.push(toBeAdded)
    console.log(todoArr)
    displayTodos()
    saveTools()
})