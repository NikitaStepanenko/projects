const searchForm = document.querySelector("#search-form");
const addForm = document.querySelector("#add-form");
const todoList = document.querySelector(".list");
const todoOptions = document.querySelector('.todo-options')

todoList.addEventListener("click", e => {
  event.preventDefault();
  if (e.target.classList.contains("delete")) {

    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList.contains("icon-check") && !e.target.parentNode.parentNode.parentNode.classList.contains("cross-out") ) {
    e.target.parentNode.parentNode.parentNode.classList.add("cross-out");
  }
  else if (e.target.parentNode.parentNode.parentNode.classList.contains("cross-out")){
    e.target.parentNode.parentNode.parentNode.classList.remove("cross-out");
  }
});

todoOptions.addEventListener("click", e=> {
  event.preventDefault();
  const list = Array.from(todoList.children);
  if (e.target.classList.contains("all-todos")) {
    list.forEach(todo => todo.classList.remove("hide"))
  }
  else if (e.target.classList.contains("complited-todos")) {
    list.forEach(todo => { if(todo.classList.contains("cross-out")) {
      todo.classList.remove("hide");
    }
    else {
      todo.classList.add("hide");
    }
    })
  }
  else if (e.target.classList.contains("active-todos")) {
    list.forEach(todo => { if(todo.classList.contains("cross-out")) {
      todo.classList.add("hide");
    }
    else {
      todo.classList.remove("hide");
    }
  })
}})

searchForm.addEventListener("keyup", () => {
  event.preventDefault();
  const searchWord = searchForm.search.value;
  searchGoal(searchWord);
});

addForm.addEventListener("submit", () => {
  event.preventDefault();
  const value = addForm.addTodoInput.value;
  addGoal(value);
  addForm.addTodoInput.value = "";
});

function addGoal(value) {
  let characters = /[A-Za-z0-9А-Яа-я]/;
  if (characters.test(value)) {
    const pattern = ` 
   <li class="goal-from-list">
  <div class="stroke">
    <div class="goal">
      <div class="icon-check"></div>
      <p class="todo-content">
      ${value}
      </p>
    </div>  
    <div class=" delete icon-trash">
    </div>
  </div>
</li>`;
    todoList.innerHTML += pattern;
  }
}

function searchGoal(word) {
  const list = Array.from(todoList.children);
  list.forEach(todo => {
    const content = todo.querySelector(".todo-content").innerText.toLowerCase();
    if (!content.includes(word.toLowerCase())) {
      todo.classList.add("hide");
    } else {
      todo.classList.remove("hide");
    }
    console.log("todo", todo.querySelector(".todo-content").innerText);
  });
  console.log("filteredTodoList", list);
}
