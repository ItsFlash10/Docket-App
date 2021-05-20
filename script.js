let input = document.querySelector("#inp")
let ul = document.querySelector("#list")

input.addEventListener("keypress", function (e) {
    if (e.code == "Enter") {
        let task = e.currentTarget.value;
        let li = document.createElement("li");
        li.innerText = task;


        li.addEventListener("dblclick", function (e) {
            e.currentTarget.remove();
        });


        ul.append(li);
        e.currentTarget.value = "";
    }
})
