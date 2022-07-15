
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
        arr.push(data.colors[i].hex.value)
            }
        
        }
    )
    
}
// 1
document.getElementById("c0").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[0])
})
document.getElementById("h0").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[0])
})


// 2
document.getElementById("c1").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[1])
})
document.getElementById("h1").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[1])
})


//3
document.getElementById("c2").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[2])
})
document.getElementById("h2").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[2])
})


//4
document.getElementById("c3").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[3])
})
document.getElementById("h3").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[3])
})


//5
document.getElementById("c4").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[4])
})
document.getElementById("h4").addEventListener("click", ()=>{
    navigator.clipboard.writeText(arr[4])
})








