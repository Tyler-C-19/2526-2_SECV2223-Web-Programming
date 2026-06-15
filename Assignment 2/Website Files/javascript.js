function filterProjectCategory(selectedCategory) {
    var allButtons = document.querySelectorAll(".projects-filter-button");
    for(var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("active");

        if(allButtons[i].textContent.toLowerCase() === selectedCategory) {
            allButtons[i].classList.add("active");
        }
    }

    var box = document.querySelectorAll(".projects-box");
    for(var j = 0; j < box.length; j++) {
        var cat = box[j].getAttribute('project-category');

        if(selectedCategory === "all" || cat === "na" || cat === selectedCategory) {
            box[j].style.display = "flex";
        }
        else {
            box[j].style.display = "none";
        }
    }
}

function getGreeting() {
    var hour = new Date().getHours();

    var greeting = document.getElementById("greet");

    if(!greeting) {
        return;
    }

    var msg;

    if(hour < 12) {
        msg = "Good morning";
    }
    else if(hour < 17) {
        msg = "Good afternoon";
    }
    else {
        msg = "Good evening";
    }

    greeting.textContent = msg + ",";
}

getGreeting();