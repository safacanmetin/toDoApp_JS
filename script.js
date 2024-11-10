function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times;"; // "×" symbol for the delete button
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = (event) => {
        event.stopPropagation(); // Prevents the click event from affecting the parent element
        taskList.removeChild(newTask);
    };

    newTask.appendChild(deleteBtn);

    newTask.onclick = () => {
        newTask.classList.toggle("completed");
    };

    taskList.appendChild(newTask);
    taskInput.value = "";
}

