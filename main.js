const btnRight = document.querySelector(".btn-right")
const btnLeft = document.querySelector(".btn-left")
const titulo = document.querySelector(".rec-titulo")
const ocupacion = document.querySelector(".rec-ocup")
const parrafo = document.querySelector(".rec-parrafo")
const img = document.querySelector(".rec-img")
const span = document.querySelector(".span-anim")

const dot1 = document.querySelector(".dot1")
const dot2 = document.querySelector(".dot2")
const dot3 = document.querySelector(".dot3")

let myName = ["U","l","i","s","e","s"]

dot2.style.background = "#eee"

let c = 0;

let frases = [  
    {
        frase:"Lo vi ayudando a una señora a cruzar la calle.",
        src:"./images/Mark Zuckerberg.jpg",
        nombre:"Mark Zuckerberg",
        ocupacion:"CEO de Meta",
    },
    {
        frase:"Me sorprendió lo rápido que toma un vaso de agua.",
        src:"./images/Bill Gates.jpg",
        nombre:"Bill Gates",
        ocupacion:"Empresario",
    },
    {
        frase:"Una vez me presto 10 pesos para comprar un Guaymallén.",
        src:"./images/Elon Musk.jpg",
        nombre:"Elon Musk",
        ocupacion:"CEO de Tesla, Inc.",
    }  
]

    img.src = frases[c].src
    titulo.innerHTML = frases[c].nombre
    ocupacion.innerHTML = frases[c].ocupacion
    parrafo.innerHTML = `"${frases[c].frase}"`

btnRight.addEventListener("click",()=>{
    c++
    if(c >= frases.length){
        c = 0;
    }
    setTimeout(()=>{
        img.src = frases[c].src
        titulo.innerHTML = frases[c].nombre
        ocupacion.innerHTML = frases[c].ocupacion
        parrafo.innerHTML = `"${frases[c].frase}"`
        colorDot(c)
    },200)
})

btnLeft.addEventListener("click",()=>{
    c--
    if(c < 0){
        c = frases.length-1;
    }
    setTimeout(()=>{
        img.src = frases[c].src
        titulo.innerHTML = frases[c].nombre
        ocupacion.innerHTML = frases[c].ocupacion
        parrafo.innerHTML = `"${frases[c].frase}"`
        colorDot(c)
    },200)
})

function colorDot(n){
    if(n === 0){
        dot1.style.background = "rgb(0, 0, 0)"
        dot2.style.background = "#eee"
        dot3.style.background = "rgb(0, 0, 0)"
    }
    if(n === 1){
        dot1.style.background = "rgb(0, 0, 0)"
        dot2.style.background = "rgb(0, 0, 0)"
        dot3.style.background = "#eee"
    }
    if(n === 2){
        dot1.style.background = "#eee"
        dot2.style.background = "rgb(0, 0, 0)"
        dot3.style.background = "rgb(0, 0, 0)"
    }
}

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
.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});