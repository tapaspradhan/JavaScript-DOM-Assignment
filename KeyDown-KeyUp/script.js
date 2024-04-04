const displayText=document.getElementById("showdata");
const content=document.getElementById("main-content")

document.addEventListener("keydown", function(e){
    displayText.style.color="red";
    displayText.innerText=e.key+" is key down"
});
document.addEventListener("keyup", function(e){
    displayText.style.color="green";
    displayText.innerText=e.key+" is key up"
});