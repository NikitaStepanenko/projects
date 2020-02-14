const searchForm = document.querySelector("#search-form");
const addForm = document.querySelector("#add-form");
const todoList = document.querySelector(".list");

todoList.addEventListener("click", e => {
  event.preventDefault();
  if (e.target.classList.contains("delete")) {
    // todoList.firstChild.remove();
    console.log(e.target.parentNode);
    e.target.parentNode.parentNode.remove();
  }
  if (e.target.classList.contains("icon-check")) {
    // todoList.firstChild.remove();
    console.log(e.target.parentNode);
    e.target.parentNode.parentNode.remove();
  }
});

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
  let characters = /[A-Za-z0-9]/;
  if (characters.test(value)) {
    const pattern = ` 
   <li class="goal-from-list">
  <div class="stroke">
    <div class="goal">
      <span class="icon-check" 
        ><svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="check-circle"
          class="svg-inline--fa fa-check-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
          ></path></svg
      ></span>
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
  // if (word === "" || word === null) {
  //   filteredList.forEach(todo => todo.classList.remove("hide"));
  // } else {
  //   console.log(word);
  //   const list = Array.from(todoList.children);
  //   const filteredList = list.filter(
  //     todo => !todo.querySelector(".todo-content").innerText.includes(word)
  //   );

  //   filteredList.forEach(todo => todo.setAttribute("class", "hide"));

  // showNewList(filt);
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
