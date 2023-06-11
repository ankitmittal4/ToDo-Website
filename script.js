window.addEventListener("load", () => {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("new-task-input");
    const list_ele = document.getElementById("tasks");

    // console.log(form)
    // console.log(input)
    // console.log(list_ele)

    form.addEventListener("submit", (e) => {
        e.preventDefault();   //prevent from refreshing the page
        // console.log("submit form")

        const task = input.value;
        if(!task){
            alert("Please Enter task");
            return;
        }
        // else{
        //     console.log("Task added successfully");
        // }

        const task_ele = document.createElement("div");
        task_ele.classList.add("task");

        const task_content_ele = document.createElement("div");
        task_content_ele.classList.add("content");
        // task_content_ele.innerText = task;

        task_ele.appendChild(task_content_ele);

        const task_input_ele = document.createElement("input");
        task_input_ele.classList.add("text");
        task_input_ele.type = "text";
        task_input_ele.value = task;
        task_input_ele.setAttribute("readonly", "readonly");

        task_content_ele.appendChild(task_input_ele);

        const task_actions_ele = document.createElement("div");
        task_actions_ele.classList.add("actions");

        const task_edit_ele = document.createElement("button");
        task_edit_ele.classList.add("edit");
        task_edit_ele.innerHTML = "edit";
        
        const task_delete_ele = document.createElement("button");
        task_delete_ele.classList.add("delete");
        task_delete_ele.innerHTML = "delete";

        task_actions_ele.appendChild(task_edit_ele);
        task_actions_ele.appendChild(task_delete_ele);

        task_ele.appendChild(task_actions_ele);

        list_ele.appendChild(task_ele);

        input.value = "";   

        task_edit_ele.addEventListener("click", ()=>{
            if(task_edit_ele.innerText.toLowerCase() == "edit"){
                    task_input_ele.removeAttribute("readonly");
                    task_input_ele.focus();
                    task_edit_ele.innerText = "SAVE";
                    
                }
                else{
                    task_input_ele.setAttribute("readonly", "readonly");
                    task_edit_ele.innerText = "EDIT";
            }
        })

        task_delete_ele.addEventListener("click", () => {
            list_ele.removeChild(task_ele);
        })

        
    })
})