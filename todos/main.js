// Создать три константы с формой добавления поиска и туду листа
// Вывод значение инпута из формы добавления тудухи по нажатию на интер

const searchForm = document.querySelector("#search-form");
const addForm = document.querySelector("#add-form");
const todoList = document.querySelector("#todoList");

searchForm.addEventListener("submit", () => {
  event.preventDefault();
  console.log(searchForm.search.value);
});

addForm.addEventListener("submit", () => {
  event.preventDefault();
  console.log(addForm.addTodoInput.value);
});
