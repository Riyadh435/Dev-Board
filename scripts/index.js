//  Set the current date

const today = new Date();

document.getElementById("dateAndyear").innerHTML = today.toDateString();

// Change background color

const colors = ["#FAEBD7", "#001F3F", "#000000", "#F4F7FF"];
let index = 0;
let rotation = 0;

document.getElementById("bg-change-btn").addEventListener("click", function () {
  document.getElementById("main-body").style.backgroundColor = colors[index];

  index = (index + 1) % colors.length;
  rotation += 60;
  document.getElementById(
    "rotateImg"
  ).style.transform = `rotate(${rotation}deg)`;
});
// move to another page
document.getElementById("discover-div").addEventListener("click", function () {
  window.location.href = "./blogs.html";
  console.log("clicked fo go to blogs");
});

