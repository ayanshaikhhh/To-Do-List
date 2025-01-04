let inputs = document.getElementById("inp");
let button = document.querySelector("button");
let text = document.querySelector(".text");


button.addEventListener("click", Add);


function Add() {
    let taskText = inputs.value.trim();


    if(taskText === "") {
        alert("Please Enter Task");
        return;
    } 

    
    else {
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${taskText}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";


        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove(); 
        }
    }
}

