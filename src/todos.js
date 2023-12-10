/* eslint-disable object-shorthand */

/** @format */

function renderTodo(todo, container) {
  const { id, desc, completed } = todo;
  const todoItem = document.createElement('li');

  todoItem.id = 'todoItem';
  todoItem.classList.add('border-b-2', 'p-2');
  todoItem.setAttribute('data-id', id);

  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'justify-between');

  const inputsWrapper = document.createElement('div');

  const todoCheckbox = document.createElement('input');
  todoCheckbox.type = 'checkbox';
  todoCheckbox.checked = completed;
  todoCheckbox.id = 'todoCheckbox';
  todoCheckbox.classList.add('peer');

  const todoText = document.createElement('input');
  todoText.value = desc;
  todoText.disabled = completed;
  todoText.id = 'todoText';
  todoText.classList.add(
    'text-2xl',
    'ml-2',
    'peer-checked:line-through',
    'peer-checked:opacity-50',
  );

  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'todoDelete';
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'todoDelete';
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '24px');
  svg.setAttribute('height', '24px');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute(
    'd',
    `M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 
     C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 
     C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 
     L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z`,
  );
  svg.appendChild(path);
  button.appendChild(svg);
  inputsWrapper.appendChild(todoCheckbox);
  inputsWrapper.appendChild(todoText);
  wrapper.appendChild(inputsWrapper);
  wrapper.appendChild(button);
  todoItem.appendChild(wrapper);
  container.appendChild(todoItem);
}

function createTodo(id, desc, completed) {
  return {
    id: String(id),
    desc: desc,
    completed: completed,
  };
}

function removeTodo(todos, prop, value) {
  const filteredTodos = todos.filter((todo) => todo[prop] !== value);
  return filteredTodos;
}

export { createTodo, renderTodo, removeTodo };