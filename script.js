/* <button id="aqua">aqua</button>
<button id="teal">teal</button>
<button id="pink">pink</button>
<button id="purple">purple</button>
<button id="colorless">colorless</button> */

let aqua = document.getElementById('aqua')
let teal = document.getElementById('teal')
let pink = document.getElementById('pink')
let purple = document.getElementById('purple')
let colorless = document.getElementById('colorless')

let color_display = document.getElementById("color-display")

aqua.onclick = () =>{
    color_display.style.backgroundColor = "aqua"
    color_display.innerText = "aqua"
}

teal.onclick = () =>{
    color_display.style.backgroundColor = "teal"
    color_display.innerText = "teal"
}

pink.onclick = () =>{
    color_display.style.backgroundColor = "pink"
    color_display.innerText = "pink"
}
purple.onclick = () =>{
    color_display.style.backgroundColor = "purple"
    color_display.innerText = "purple"
}
colorless.onclick = () =>{
    color_display.style.backgroundColor = "transparent"
    color_display.innerText = "colorless"
}