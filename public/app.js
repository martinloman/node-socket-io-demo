const socket = io()

document.addEventListener("click", (e) => {
  socket.emit("clicked", { x: e.clientX, y: e.clientY })
  moveBoxTo(e.clientX, e.clientY)
})

socket.on("connect", () => {
  console.log(socket.connected) // true
})

socket.on("clientClicked", (data) => {
  console.log(data)
  moveBoxTo(data.x, data.y)
})

const moveBoxTo = (x, y) => {
  let box = document.getElementById("theBox")
  box.style.top = y + "px"
  box.style.left = x + "px"
}
