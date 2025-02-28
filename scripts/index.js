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
  window.location.href = "blogs.html";
  
});


// Btns functions
document.getElementById("main-container").addEventListener("click", function (event) {

  if (event.target.tagName === "BUTTON") {
    alert("Board updated successfully!");
    decrementTasksCount();
    incrementTasksCount();
    console.log(event.target.parentElement.parentElement.children[1]);
    // let parent = event.target.parentElement;
    event.target.disabled = true; 
    event.target.style.backgroundColor = "lightgrey"; 
     
    
  }
});


function decrementTasksCount(){
  const tasksCount = parseInt(document.getElementById("tasks-count").innerText);
  document.getElementById("tasks-count").innerText = tasksCount - 1;

 
}
function incrementTasksCount(){
  const tasksCount = parseInt(document.getElementById("total-tasks-count").innerText);
  document.getElementById("total-tasks-count").innerText = tasksCount + 1;

 
}




