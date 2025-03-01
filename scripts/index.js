//  Set the current date

const today = new Date();

document.getElementById("dateAndyear").innerHTML = today.toDateString();

// Change background color

const colors = [
  "#FAEBD7",
  "#001F3F",
  "#000000",
  "#F4F7FF",
  "lightgreen",
  "lightblue",
  "lightcoral",
];
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
document
  .getElementById("main-container")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      alert("Board updated successfully!");
      decrementTasksCount();
      incrementTasksCount();
      const title =
        event.target.parentElement.parentElement.children[1].innerText;
      writeTaskOnHistory(title);
      event.target.disabled = true;
      event.target.style.backgroundColor = "lightgrey";
    }
  });

// Clear all history
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    document.getElementById("history-container").innerHTML = "";
  });

function decrementTasksCount() {
  const tasksCount = parseInt(document.getElementById("tasks-count").innerText);
  document.getElementById("tasks-count").innerText = tasksCount - 1;
  if(tasksCount === 1) {
    alert("Congratulations! You have completed all the tasks.");
  }
}
function incrementTasksCount() {
  const tasksCount = parseInt(
    document.getElementById("total-tasks-count").innerText
  );
  document.getElementById("total-tasks-count").innerText = tasksCount + 1;
}
function writeTaskOnHistory(tasksTitle) {
  const currentTime = new Date().toTimeString().split(" ")[0];

  let newDiv = document.createElement("div");
  newDiv.innerText =
    "You have Complete The Task " + tasksTitle + " at " + getTime();
  newDiv.classList.add("history-cards");
  document.getElementById("history-container").appendChild(newDiv);
}
function getTime() {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

console.log(getDhakaTime());
