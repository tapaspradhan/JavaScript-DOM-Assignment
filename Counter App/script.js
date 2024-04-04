// Variable Declereration
const decrementValue=document.getElementById("decrement-value");
const incrementValue=document.getElementById("increment-value");
const showData=document.getElementById("show-value");
const resetData=document.getElementById("reset-data")
// add event listener fot decrement
decrementValue.addEventListener("click", ()=>{
    const value= Number(showData.innerText)
    if (value>0) {
        showData.innerText=value -1;
    }else {
        alert("Negative Value Not Allow");
    }
});
// add event listener fot increment
incrementValue.addEventListener("click", ()=>{
    const value=Number (showData.innerText)
    if (value>=10){
        alert("10+ value are not allowed");
    }else {
        showData.innerText=value +1;
    }
});
// add event listener for reset data
resetData.addEventListener("click",()=>{
    showData.innerText=0;
});
