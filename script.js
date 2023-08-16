function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-amanda-light.png")
    img.setAttribute(
      "alt",
      "Foto de Amanda Kenes de blusa preta e colar escrito Amanda."
    )
  } else {
    img.setAttribute("src", "./assets/avatar-amanda.jpg")
    img.setAttribute(
      "alt",
      "Foto de Amanda Kenes sorrindo de blusa esverdeada e mechas loiras no cabelo."
    )
  }
}
