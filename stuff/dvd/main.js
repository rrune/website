let interval;
let percTop;
let percLeft;

let startTime = Date.now();

let timer;
let counter = 0;

//multiplicators, determins direction; 1 is plus, -1 is minus
let vert = 1;
let horiz = 1;

let PosX;
let PosY;

let logo;
let parent;
let box;

function load() {
  logo = document.getElementById("logo")
  box = document.getElementById("box")
  parent = document.getElementById("parent")

  timer = document.getElementById("timer");

  parent.style.height = "500px";
  parent.style.width = "665px";

  logo.style.top = "0px";
  logo.style.left = "0px";

  window.addEventListener("keydown", e => {
    if (e.key = " ") {
      document.getElementById("info").style.visibility = "visible";
    }
  })

  //moving
  interval = setInterval(() => {
    logo.style.top = (parseInt(logo.style.top.slice(0, logo.style.top.length - 2)) + (1 * horiz)) + "px"
    logo.style.left = (parseInt(logo.style.left.slice(0, logo.style.left.length - 2)) + (1 * vert)) + "px"

    //percentage; logo top / parent height
    percTop = parseInt(logo.style.top.slice(0, logo.style.top.length - 2)) / 
              parseInt(parent.style.height.slice(0, parent.style.height.length - 2) -50)
              * 100
    percLeft = parseInt(logo.style.left.slice(0, logo.style.left.length - 2)) /
              parseInt(parent.style.width.slice(0, parent.style.width.length - 2) - 50)
              * 100


    //switch direction if at border
    //if user resizes too fast and logo is out of bounds, switch direction and hope for the best
    if (percTop == 100 || percTop == 0 || percTop > 101 || percTop < -1) {
      horiz = horiz * -1
    }
    if (percLeft == 100 || percLeft == 0 || percLeft > 101 || percTop < -1) {
      vert = vert * -1
    }

    //avoid problems by resizing below minimun (doesnt show but still affects code)
    //still causes problems because it only fixes it after 10ms but best solution
    if (parseInt(parent.style.height.slice(0, parent.style.height.length - 2)) < 300) {
      parent.style.height = "300px";
    }
    if (parseInt(parent.style.width.slice(0, parent.style.width.length - 2)) < 300) {
      parent.style.width = "400px";
    }

    //timer
    let delta = Date.now() - startTime;
    timer.innerHTML = Math.floor(delta / 1000) + "s";

    //counter
    if (percTop == 100 && percLeft == 100 || percTop == 0 && percLeft == 0 ||
        percTop == 100 && percLeft == 0 || percTop == 0 && percLeft == 100) {
      document.getElementById("placeholderCounter").innerHTML = ""

      counter++;
      let div = document.createElement("div");
      div.classList.add("counter");
      div.innerHTML = Math.floor(delta / 1000) + "s - " + counter;
      document.getElementById("counterParent").appendChild(div);
    }
  }, 10);
}