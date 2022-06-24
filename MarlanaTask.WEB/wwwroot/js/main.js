var basedurl = "https://localhost:7185/api/";

function DeleteBlock(blockname) {
    if (blockname.length > 0) {
        if (confirm("Do you really want to delete a TasksBlock: '" + blockname + "' ?") == true) {
            const request = new XMLHttpRequest();
            const url = basedurl + "TasksBlock?name=" + blockname;
            request.open("DELETE", url, true);
            request.setRequestHeader("accept", "text/plain");
            request.pa
            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    alert("Successfully deleted!");
                    window.location.href = "/";
                }
            });
            request.send();
        }
    }
    else {
        alert("Blockname must be filled!");
    }
}

function CreateBlock(blockname) {
    if (blockname.length > 0) {
        if (confirm("Do you really want to create a TasksBlock: '" + blockname +"' ?") == true) {
            const request = new XMLHttpRequest();
            const url = basedurl + "TasksBlock/Create?name=" + blockname;
            request.open("POST", url, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    alert("Successfully created!");
                    window.location.href = "/";
                }
            });
            request.send();
            }
    }
    else {
        alert("Blockname must be filled!");
    }
}

function ChangeNameBlock(blockname, newname) {
    if (blockname.length > 0 && newname.length > 0) {
        if (confirm("Do you really want to change a name of TasksBlock: '" + blockname + "' ?") == true) {
            const request = new XMLHttpRequest();
            const url = basedurl + "TasksBlock/ChangeName?name=" + blockname + "&newName=" + newname;
            request.open("PATCH", url, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200) {
                    alert("Successfully changed!");
                    window.location.href = "/";
                }
            });
            request.send();
        }
    }
    else {
        alert("Field 'New Name' must be filled!");
    }
}