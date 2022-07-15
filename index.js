
console.log("hi lol")
let hexval="0047AB"
fetch("https://www.thecolorapi.com/scheme?hex=${hexval}&mode=analogic")
    .then(response=>response.json())
    .then(data=>console.log(data))