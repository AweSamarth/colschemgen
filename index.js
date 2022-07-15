
let hexval="0047AB"
// fetch("https://www.thecolorapi.com/scheme?hex=${hexval}&mode=analogic")
//     .then(response=>response.json())
//     .then(data=>console.log(data))

const clicked=document.getElementById("crow")

crow.addEventListener("click", checker)
function checker(){
    const colour= document.getElementById("seed-color").value.substring(1)
    console.log(colour)
    fetch("https://www.thecolorapi.com/scheme?hex=${colour}&mode=analogic")
    .then(response=>response.json())
    .then(data=>{
        for(let i=0;i<5;i++){
        console.log(data.colors[i].hex.value)}})
}