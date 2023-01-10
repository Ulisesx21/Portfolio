const span = document.querySelector(".span-anim")
const nameDivContainer = document.getElementById("name-div-container")


let myName = ["U","l","i","s","e","s"];

const colors = ["#e74c3c","#8e44ad","#3498db","#e67e22","#2ecc71"];


let count = 0;
setInterval(()=>{
    
    if(span.innerHTML === "Ulises"){
        span.innerHTML = ""
        count = 0
    }else{
        span.innerHTML += myName[count]
        count++
    }
    
},500)

document.querySelector(".go-top-container")
.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

nameDivContainer.addEventListener("mouseover",(e)=> {
    if(e.target.className === "name-div"){
        setColor(e.target)
    }  
})

nameDivContainer.addEventListener("mouseout",(e)=> {
    if(e.target.className === "name-div"){
        removeColor(e.target)
    }  
})

function setColor(element){
    const color = getRandomColor()
    element.style.color = color;
}

function removeColor(element){
    element.style.color = "white";
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}
