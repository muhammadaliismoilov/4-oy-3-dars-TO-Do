"use strict";

// BU yerda biz html elementlarni tanlab olyapmiz
const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elList = document.querySelector(".todos-list");
const elButton = document.querySelector(".button");
const elSpan1 = document.querySelector(".span-1");
const elSpan2 = document.querySelector(".span-2");
const elSpan3 = document.querySelector(".span-3");
const elAll = document.querySelector(".all");
const elComplited = document.querySelector(".complited");
const elUncomplited = document.querySelector(".uncomplited");


const todos = [];

elList.addEventListener("click", function (evt) {

  const deleteBtnId = evt.target.dataset.deleteBtnId * 1;
  const foundTodoIndex = todos.findIndex((todo) => todo.id === deleteBtnId);
// todolarni o`chirish
  if (evt.target.matches(".delete-btn")) {
    todos.splice(foundTodoIndex, 1);

    elList.innerHTML = null;

    elSpan1.textContent = todos.length

    renderTodos(todos, elList);
  }
  // checkbox bosilganda ustida chizish
  else if (evt.target.matches(".checkbox-btn")) {
    const checkboxId = evt.target.dataset.checkboxBtnId * 1;

    const foundTodo = todos.find((todo) => todo.id === checkboxId);

    foundTodo.isCompleted = !foundTodo.isCompleted;

    elList.innerHTML = null;

    renderTodos(todos, elList);
  }
});

//ul ichidagi taglarni yaratish
const renderTodos = function (arr, htmlElement) {
  arr.forEach((todo) => {

    elSpan1.textContent = todos.length
    elSpan2.textContent = todos.filter(todo => todo.isCompleted).length
    elSpan3.textContent = todos.filter(todo => !todo.isCompleted).length
    console.log(todos);

    const newItem = document.createElement("li");
    const newCheckbox = document.createElement("input");
    const newDeleteBtn = document.createElement("button");

    newItem.textContent = todo.title;
    newCheckbox.type = "checkbox";
    newDeleteBtn.textContent = "Delete";

    newItem.setAttribute( "class","list-group-item list-group-item-primary m-2  text-center")
    newDeleteBtn.setAttribute( "class","delete-btn btn btn-danger ms-3");
    newCheckbox.setAttribute( "class","checkbox-btn btn btn-info ms-3");

    newDeleteBtn.dataset.deleteBtnId = todo.id;
    newCheckbox.dataset.checkboxBtnId = todo.id;

    if (todo.isCompleted) {
      newCheckbox.checked = true;
      newItem.style.textDecoration = "line-through";
    }

    htmlElement.appendChild(newItem);
    newItem.appendChild(newCheckbox);
    newItem.appendChild(newDeleteBtn);
  });
};
//inputdan qiymat olamz
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

 //input qiymatini ozgaruvchiga saqlaymiz
  const inputValue = elInput.value;

//yangi obyekt yaratb unga qiymatlr kiritsn
  const newTodo = {
    id: todos[todos.length - 1]?.id + 1 || 0,
    title: inputValue,
    isCompleted: false,
  };

  todos.push(newTodo);

  elInput.value = null;
  elList.innerHTML = null;

  //funksiyani ishlatb qoyamz
  renderTodos(todos, elList);
});

elButton.addEventListener("click", function(evt){

  // all bosilganda hammasini chiqaradi
  if(evt.target.matches(".all")){
    elList.innerHTML = null
    renderTodos(todos,elList)
  }
  // complited bosilganda faqat complited boganlarni chiqaradi
  if(evt.target.matches(".complited")){

    const complitedTodos = todos.filter(todo => todo.isCompleted)
    elList.innerHTML = null

    renderTodos(complitedTodos,elList)
  }
  // uncomplited bosilganda faqat uncomplited boganlarni chiqaradi
  if(evt.target.matches(".uncomplited")){

    const uncomplitedTodos = todos.filter(todo => !todo.isCompleted)
    elList.innerHTML = null

    renderTodos(uncomplitedTodos,elList)
  }
})
