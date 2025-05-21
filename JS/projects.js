function filterSelection(c) {
  var x = document.getElementsByClassName("column");
  if (c === "all") { c = ""; }
  for (var i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (c === "" || x[i].classList.contains(c)) {
      w3AddClass(x[i], "show");
    }
  }
}

function w3AddClass(element, name) {
  if(!element.classList.contains(name)) {
    element.classList.add(name);
  }
}

function w3RemoveClass(element, name) {
  if(element.classList.contains(name)) {
    element.classList.remove(name);
  }
}

window.onload = function() {
  filterSelection("all");
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.querySelector(".btn.active");
      if(current) { current.classList.remove("active"); }
      this.classList.add("active")
    });
  }
};