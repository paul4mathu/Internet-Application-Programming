//NAME : PAUL MAINA 
//REG NO: SCT212-0143/2022
// INTERNET APPLICATION PROGRAMMING ASSIGNMENT




document.addEventListener("DOMContentLoaded", function () {
    // Query for the submit button and input task field
    const submit = document.getElementById("submitBtn");
    const newTaskInput = document.getElementById("new_task");

    // 2 .disable submit button
    submit.disabled = true;

    // 3.Listen for input to be typed into the input field
    newTaskInput.addEventListener("input", function () {
        
        submit.disabled = !newTaskInput.value.trim();
    });

    // 4.Listen for submission of form
    document.getElementById("task_Form").addEventListener("submit", function (event) {
        
        event.preventDefault();

        // 5.Find the task the user just submitted
        const taskText = newTaskInput.value.trim();

        // 6.Create a list item for the new task
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;

        //7. Add the new task item to the unordered list
        document.getElementById("task_List").appendChild(newTaskItem);

        // Clear the input field
        newTaskInput.value = "";

        // Disable the submit button after submission
        submit.disabled = true;
    });
});
