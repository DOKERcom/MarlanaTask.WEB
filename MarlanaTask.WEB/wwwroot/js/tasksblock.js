var basedurl = "https://localhost:7185/api/";

function DeleteTask(taskname) {
    if (taskname.length > 0) {
        if (confirm("Do you really want to delete a Task: '" + taskname + "' ?") == true) {
            const request = new XMLHttpRequest();
            const url = basedurl + "Task?name=" + taskname;
            request.open("DELETE", url, true);
            request.setRequestHeader("accept", "text/plain");
            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    alert("Successfully deleted!");
                    window.location.reload();
                }
            });
            request.send();
        }
    }
    else {
        alert("Taskname must be filled!");
    }
}

function CreateTask(blockName, taskname, status) {
    if (taskname.length > 0) {
        if (confirm("Do you really want to create a Task: '" + taskname +"' ?") == true) {
            const request = new XMLHttpRequest();
            const url = basedurl + "Task?blockName=" + blockName;
            const params = "{\"name\": \"" + taskname + "\",\"status\": " + status +"}";
            request.open("POST", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    alert("Successfully created!");
                    window.location.reload();
                }
            });
            request.send(params);
            }
    }
    else {
        alert("Taskname must be filled!");
    }
}

function ChangeTaskStatus(taskname, status) {
    if (taskname.length > 0) {
        if (confirm("Do you really want to change a Task status: '" + taskname + "' ?") == true) {
            const request = new XMLHttpRequest();
            const url = basedurl + "Task/ChangeStatus?name=" + taskname +"&status=" + status;
            request.open("PATCH", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    alert("Successfully changed!");
                    window.location.reload();
                }
            });
            request.send();
        }
    }
    else {
        alert("Taskname must be filled!");
    }
}
