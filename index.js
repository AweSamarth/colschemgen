
let arr=[]
checker()
    

crow.addEventListener("click", checker)
function checker(){
    
    const colour= document.getElementById("seed-color").value.substring(1)
    const mode= document.getElementById("color-scheme").value.toLowerCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colour}&mode=${mode}`)
    .then(response=>response.json())
    .then(data=>{
        arr=[]
        for (let i=0;i<5;i++){
        document.getElementById(`c${i}`).style.background=data.colors[i].hex.value
        document.getElementById(`h${i}`).textContent=data.colors[i].hex.value
        document.getElementById(`c${i}`).addEventListener("click", ()=>{
            navigator.clipboard.writeText(data.colors[i].hex.value)
        })
        document.getElementById(`h${i}`).addEventListener("click", ()=>{
            navigator.clipboard.writeText(data.colors[i].hex.value)
        })
        arr.push(data.colors[i].hex.value)
            }
        
        }
    )
    
}
