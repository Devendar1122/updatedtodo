function addTodo() {
    const titleInput = document.getElementById('todo-title');
    const descriptionInput = document.getElementById('todo-description');
    const todoList = document.getElementById('todo-list');

    if (titleInput.value.trim() !== "" && descriptionInput.value.trim() !== "") {
        const li = document.createElement('li');
        const content = document.createElement('span');
        content.innerHTML = `<strong>${titleInput.value}:</strong> ${descriptionInput.value}`;
        li.appendChild(content);

        const completeButton = document.createElement('button');
        completeButton.textContent = '✔';
        completeButton.className = 'complete-btn';
        completeButton.onclick = () => completeTodo(li);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => todoList.removeChild(li);

        li.appendChild(completeButton);
        li.appendChild(removeButton);
        todoList.appendChild(li);

        titleInput.value = "";
        descriptionInput.value = "";
    }
}

function completeTodo(item) {
    const completedList = document.getElementById('completed-list');
    item.classList.add('completed');

    const buttons = item.getElementsByTagName('button');
    for (let button of buttons) {
        button.style.display = 'none';
    }

    completedList.appendChild(item);
}
