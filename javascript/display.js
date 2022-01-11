// Function to show the sideBar

function show() {
  let checkBox = document.getElementById(`checkBox`);
  let sideBar = document.getElementById(`sideBar`);

  if (checkBox.checked == true) {
    sideBar.style.left = `0`;
    sideBar.style.opacity = `1`;
  } else if (checkBox.checked == false) {
    sideBar.style.left = `-16rem`;
    sideBar.style.opacity = `0`;
  }
}
