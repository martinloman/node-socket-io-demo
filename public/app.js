const socket = io() //Detta skapar en koppling till servern.

// en eventlyssnare som lyssnar på klick-event i sidan.
document.addEventListener("click", (e) => {
  // socket.emit skickar information TILL servern.
  // Andra argumentet till emit() är data som skickas med till servern.
  socket.emit("clicked", { x: e.clientX, y: e.clientY })
  moveWizardTo(e.clientX, e.clientY)
})

socket.on("connect", () => {
  console.log(socket.connected) // true
})

// Detta lyssnar efter ett meddelande av typen clientClicked FRÅN servern.
socket.on("clientClicked", (data) => {
  console.log(data)

  // När meddelandet från servern säger att någon klickat i sidan
  // så flyttar vi trollkarlen till de koordinaterna.
  moveWizardTo(data.x, data.y)
})

// Funktion som flyttar trollkarlen till angivna x- och y-koordinater.
const moveWizardTo = (x, y) => {
  let box = document.getElementById("theWizard")
  box.style.top = y + "px"
  box.style.left = x + "px"
}
