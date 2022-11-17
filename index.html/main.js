

var todoLis= document.querySelector(".todo-list");
var addBtn = document.querySelector(".btn");
var titleTag= document.querySelector(".input");
var filterOption = document.querySelector(".filter-todo");



filterOption.addEventListener('click', filterTodos);
todoLis.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded',getTodos);


addBtn.addEventListener('click', toDo);

function toDo(e){
  e.preventDefault()


var newDiv = document.createElement('div');
newDiv.classList.add('todo');
todoLis.appendChild(newDiv);

saveLocal(titleTag.value);

var newLi = document.createElement('li');
newLi.innerText = titleTag.value;
newLi.classList.add('todo-item');
newDiv.appendChild(newLi);
// newDiv.classList.add('todo');
var completeButn = document.createElement('button');
completeButn.innerHTML = '<i class="fa fa-check"></i>';
completeButn.classList.add('complete-btn');
newDiv.appendChild(completeButn); 




var trashButn = document.createElement('button');
trashButn.innerHTML = '<i class="fa fa-trash"></i>';
trashButn.classList.add('trash-btn');
newDiv.appendChild(trashButn);

titleTag.value = '';







}

function deleteCheck(e){
    const item =e.target;
    if(item.classList[0]==='trash-btn'){
        const toDo =item.parentElement;
        toDo.classList.add('fall');
        // removeLocalTodos(todo);
        toDo.addEventListener('transitionend', function(){
            toDo.remove()
        })
       
    }


   
    if(item.classList[0]==='complete-btn'){
        const toDo =item.parentElement;
        toDo.classList.toggle('completed');
    }
}

function filterTodos(e){
  for(const toDo of todoLis.children) {
    switch(e.target.value){
    case "all":
      toDo.style.display="flex";
    break
    case "completed":
      if(toDo.classList.contains("completed")){
        toDo.style.display="flex";
      }
      else{
        toDo.style.display="none";
      }
      break;
      case "uncompleted":
        if(!toDo.classList.contains("completed")){
          toDo.style.display="flex";
        }
        else{
          toDo.style.display="none";
        }
        break;

    }
  }
}

function saveLocal(todo){
  let todos;
  if(localStorage.getItem('todos')===null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if(localStorage.getItem('todos')===null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todos){
    var newDiv = document.createElement('div');
newDiv.classList.add('todo');
todoLis.appendChild(newDiv);
var newLi = document.createElement('li');
newLi.innerText = todos;
newLi.classList.add('todo-item');
newDiv.appendChild(newLi);
// newDiv.classList.add('todo');
var completeButn = document.createElement('button');
completeButn.innerHTML = '<i class="fa fa-check"></i>';
completeButn.classList.add('complete-btn');
newDiv.appendChild(completeButn); 


var trashButn = document.createElement('button');
trashButn.innerHTML = '<i class="fa fa-trash"></i>';
trashButn.classList.add('trash-btn');
newDiv.appendChild(trashButn);

titleTag.value = '';
  })
}

function removeLocalTodos(todo){
  let todos;
 if(localStorage.getItem('todos')===null){
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem("todos",JSON.stringify(todos));
}