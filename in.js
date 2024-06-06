const reminderSound = new Audio('reminder.mp3'); // Path to the reminder sound file

function addTodo() {
    const titleInput = document.getElementById('todo-title');
    const descriptionInput = document.getElementById('todo-description');
    const startDateInput = document.getElementById('todo-start-date');
    const endDateInput = document.getElementById('todo-end-date');
    const reminderTimeInput = document.getElementById('todo-reminder-time');
    const todoList = document.getElementById('todo-list');

    if (titleInput.value.trim() !== "" && descriptionInput.value.trim() !== "") {
        const li = document.createElement('li');
        const content = document.createElement('span');
        content.innerHTML = `
            <strong>${titleInput.value}:</strong> ${descriptionInput.value} <br>
            <strong>Start:</strong> ${startDateInput.value} <br>
            <strong>End:</strong> ${endDateInput.value} <br>
            <strong>Reminder:</strong> ${reminderTimeInput.value}
        `;
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

        // Set a reminder if a reminder time is provided
        if (reminderTimeInput.value) {
            const reminderTime = new Date(reminderTimeInput.value);
            const now = new Date();
            const timeDifference = reminderTime - now;
            if (timeDifference > 0) {
                setTimeout(() => {
                    reminderSound.play();
                    alert(`Reminder: ${titleInput.value} - ${descriptionInput.value}`);
                }, timeDifference);
            }
        }

        titleInput.value = "";
        descriptionInput.value = "";
        startDateInput.value = "";
        endDateInput.value = "";
        reminderTimeInput.value = "";
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
