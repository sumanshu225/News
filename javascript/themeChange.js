// Dark mode
//  --primary: #042331;
//   --txtColor: whitesmoke;
//   --secondaryDark: #063146;
//   --secondaryLight: #0a5275;
// --bgTransColor : rgba(6, 49, 70, 0.4);
//   --headerBorder: #042331;
//   --headerBg: #063146;
//   --hoverbg: #0a5275;

// Light Mode
//   --primary: whitesmoke;
//   --txtColor: rgb(254, 39, 18);
//   --secondaryDark: rgb(191, 193, 194);
//   --secondaryLight: rgb(254, 39, 18);
// --bgTransColor : rgba(254, 39, 18, 0.1);
//   --headerBorder: rgb(191, 193, 194);
//   --headerBg: whitesmoke;
//   --hoverbg: rgb(191, 193, 194);

// function To change Theme
function changeTheme() {
  let checkBox = document.getElementById(`theme`);
  let themeName = document.getElementById(`themeName`);
  let color = document.querySelector(`:root`);

  if (checkBox.checked == true) {
    // console.log(`checked`);
    // initialize light Theme

    // Changing The Variables value
    color.style.setProperty(`--primary`, `whitesmoke`);
    color.style.setProperty(`--txtColor`, `rgb(254, 39, 18)`);
    color.style.setProperty(`--secondaryDark`, `rgb(191, 193, 194)`);
    color.style.setProperty(`--secondaryLight`, `rgb(254, 39, 18)`);
    color.style.setProperty(`--bgTransColor`, `rgba(254, 39, 18, 0.1)`);
    color.style.setProperty(`--headerBorder`, `rgb(191, 193, 194)`);
    color.style.setProperty(`--headerBg`, `whitesmoke`);
    color.style.setProperty(`--hoverbg`, `rgb(191, 193, 194)`);
    themeName.innerText = "Light Mode";
  } else {
    color.style.setProperty(`--primary`, `#042331`);
    color.style.setProperty(`--txtColor`, `whitesmoke`);
    color.style.setProperty(`--secondaryDark`, `#063146`);
    color.style.setProperty(`--secondaryLight`, `#0a5275`);
    color.style.setProperty(`--bgTransColor`, `rgba(6, 49, 70, 0.4)`);
    color.style.setProperty(`--headerBorder`, `#042331`);
    color.style.setProperty(`--headerBg`, `#063146`);
    color.style.setProperty(`--hoverbg`, `#0a5275`);
    themeName.innerText = "Dark Mode";
  }
}
