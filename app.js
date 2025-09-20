//email  function
function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ua6w93c";
  const templateID = "template_nr13o17";

  emailjs
  .send(serviceID,templateID,params)
  .then( res => {
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("message").value ="";
    console.log(res);
    alert("Your Message Sent Successfully")
    })
  
.catch((err) => console.log(err));
}

// Navigation open
let navButton = document.getElementById("open");
navButton.addEventListener("click", function () {
  document.getElementById("menu-sm").style.transform = "translateX(0px)";
  document.getElementById("menu-sm").style.transition = "0.7s all linear";
});

//Navigation close on button click
let closeNav = document.getElementById("close");
closeNav.addEventListener("click", function () {
  document.getElementById("menu-sm").style.transform = "translateX(-2000px)";
  document.getElementById("menu-sm").style.transition = "0.7s all linear";
});

//Navigation close on link click;
let linkSmall = document.getElementById("about");
linkSmall.addEventListener("click", function () {
  document.getElementById("menu-sm").style.transform = "translateX(-2000px)";
  document.getElementById("menu-sm").style.transition = "0.7s all linear";
});

//
let linkSmall2 = document.getElementById("skills");
linkSmall2.addEventListener("click", function () {
  document.getElementById("menu-sm").style.transform = "translateX(-2000px)";
  document.getElementById("menu-sm").style.transition = "0.7s all linear";
});

//
let linkSmall3 = document.getElementById("projects");
linkSmall3.addEventListener("click", function () {
  document.getElementById("menu-sm").style.transform = "translateX(-2000px)";
  document.getElementById("menu-sm").style.transition = "0.7s all linear";
});

//
let linkSmall4 = document.getElementById("contact");
linkSmall4.addEventListener("click", function () {
  document.getElementById("menu-sm").style.transform = "translateX(-2000px)";
  document.getElementById("menu-sm").style.transition = "0.7s all linear";
});
//Project hover
let project = document.getElementById("project");
project.addEventListener("mouseout", function () {
  document.getElementById("project").style.transform = "translateY(0px)";
  document.getElementById("project").style.transition = "0.5s all linear";
});

project.addEventListener("mouseover", function () {
  document.getElementById("project").style.transform = "translateY(5px)";
  document.getElementById("project").style.transition = "0.2s all linear";
});

//project2 hover
let project2 = document.getElementById("project2");
project2.addEventListener("mouseout", function () {
  document.getElementById("project2").style.transform = "translateY(0px)";
  document.getElementById("project2").style.transition = "0.2s all linear";
});

project2.addEventListener("mouseover", function () {
  document.getElementById("project2").style.transform = "translateY(5px)";
  document.getElementById("project2").style.transition = "0.2s all linear";
});
//project3 hover
let project3 = document.getElementById("project3");
project3.addEventListener("mouseout", function () {
  document.getElementById("project3").style.transform = "translateY(0px)";
  document.getElementById("project3").style.transition = "0.5s all linear";
});

project3.addEventListener("mouseover", function () {
  document.getElementById("project3").style.transform = "translateY(5px)";
  document.getElementById("project3").style.transition = "0.5s all linear";
});
//Header-BG background
window.addEventListener("scroll", function () {
  this.document.getElementById("Header-BG").style.backgroundColor = "white";
  this.document.getElementById("Header-BG").style.outline = "10px solid white";
  this.document.getElementById("Header-BG").style.transition =
    "background-color 0.3s linear";
});

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    this.document.getElementById("Header-BG").style.backgroundColor = "#fbfbeb";
    this.document.getElementById("Header-BG").style.outline =
      "1px solid #fbfbeb";
  }
});
//cv click alert
// let cvBtn = document.getElementById("cv");
// cvBtn.addEventListener("click", function () {
//   alert("Work in progress. to be added soon");
// });
