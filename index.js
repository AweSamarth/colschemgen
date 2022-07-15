
let hexval="0047AB"
// fetch("https://www.thecolorapi.com/scheme?hex=${hexval}&mode=analogic")
//     .then(response=>response.json())
//     .then(data=>console.log(data))

checker()
    

crow.addEventListener("click", checker)
function checker(){
    
    const colour= document.getElementById("seed-color").value.substring(1)
    const mode= document.getElementById("color-scheme").value.toLowerCase()
    console.log(colour)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colour}&mode=${mode}`)
    .then(response=>response.json())
    .then(data=>{
        for (let i=0;i<5;i++){
        document.getElementById(`c${i}`).style.background=data.colors[i].hex.value
    }
    }
    

    )
    
}