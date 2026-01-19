function addtask(){
    let input=document.getElementById("taskinput");
    let tasktext=input.value.trim();
    if(tasktext=="") return;

    let li=document.createElement("li");

    li.textContent=tasktext;

    li.onclick=function(){
        li.classList.toggle("done");
    };

    let delbtn=document.createElement("button");
    delbtn.textContent="❌";
    delbtn.onclick=function(){
        li.remove();
    };

li.appendChild(delbtn);
document.getElementById("tasklist").appendChild(li);
input.value="";   
 }
