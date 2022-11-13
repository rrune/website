document.addEventListener("keydown", e => {
    if (e.key == "Escape") {
        closeIFrame()
    }
  })

function closeIFrame() {
    document.getElementById('frame').style.display = 'none';
}
