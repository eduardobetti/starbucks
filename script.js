const chk = document.getElementById('chk')
let header = document.querySelector("header")
let label = document.querySelector("label")
let main = document.querySelector("main")
let span = document.querySelector("span")
let button = document.querySelector("button")
let imgCopo = document.querySelector(".copo-starbucks")
let verde = document.querySelector(".verde")
let rosa = document.querySelector(".rosa")
let roxo = document.querySelector(".roxo")

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    header.classList.toggle('dark')
    main.classList.toggle('dark')
  })

verde.addEventListener("click", () => {
    imgCopo.src = "./assets/copo-verde.png"
    header.style.boxShadow = "#017143 4px 4px 10px"
    label.style.border = "2px solid rgb(1, 113, 67, 0.3)"
    span.style.color = "#017143"
    button.style.background = "#017143"
    
})

rosa.addEventListener("click", () => {
    imgCopo.src = "./assets/copo-rosa.png"
    header.style.boxShadow = "#eb7495 4px 4px 10px"
    label.style.border = "2px solid rgb(235, 116, 149, 0.3)"
    span.style.color = "#eb7495"
    button.style.background = "#eb7495"
})

roxo.addEventListener("click", () => {
    imgCopo.src = "./assets/copo-roxo.png"
    header.style.boxShadow = "#d752b1 4px 4px 10px"
    label.style.border = "2px solid rgb(215, 82, 177, 0.3)"
    span.style.color = "#d752b1"
    button.style.background = "#d752b1"
})

