const body = document.body
document.getElementById("btn").addEventListener("click", changeColor)

// Call Scrimba's color API (https://apis.scrimba.com/hexcolors/)

async function changeColor() {
  fetch('https://apis.scrimba.com/hexcolors/?count=1')
  .then(response => response.json())
  .then(data => {
      let bodyColor = data.colors[0].value;
      body.style.setProperty("background-color", bodyColor);
  })
}


// Alternate solution
// async function changeColor() {
   //let response = await fetch(`https://apis.scrimba.com/hexcolors/?count=1`)
   //let data = await response.json()
   //let color = data.colors[0].value
   
   //body.style.setProperty("background-color", color);
//}