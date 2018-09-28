import styles from "./styles.css"
import armsUp from "./arms-up.svg"
import armsDown from "./slap-both.svg"

let count = 0

const handleTouchStart = (e) => {
  const catUp = document.getElementById("bongo-cat-up")
  catUp.classList.add('hide')

  const catDown = document.getElementById("bongo-cat-down")
  catDown.classList.remove('hide')
}

const handleTouchEnd = () => {
  const catUp = document.getElementById("bongo-cat-up")
  catUp.classList.remove('hide')

  const catDown = document.getElementById("bongo-cat-down")
  catDown.classList.add('hide')

  count++

  const counter = document.getElementById("counter")
  counter.innerHTML = `${count}`
}

const start = () => {
  var el = document.getElementById("body")
  el.addEventListener("mousedown", handleTouchStart, false)
  el.addEventListener("touchstart", handleTouchStart, false)
  el.addEventListener("mouseup", handleTouchEnd, false)
  el.addEventListener("touchend", handleTouchEnd, false)
}

document.addEventListener("DOMContentLoaded", function(event) {
  start()
});
