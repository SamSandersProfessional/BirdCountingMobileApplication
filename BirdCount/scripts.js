function toggleMenu() {
  var Nav = document.getElementById("MainNav");
  var Settings = document.getElementById("MainSettings");

  if (Nav.style.display === "block" || Settings.style.display === "flex") {
    Nav.style.display = "none";
    Settings.style.display = "none";
  } else {
    Nav.style.display = "block";
  }
}

function toggleBirdPopUp() {
  var PopUp = document.getElementById("AddBirdsPopUp");
  var Blackout = document.getElementById("addbirdtallyblackout");
  var PopUpOpen = PopUp.style.display === "block";
  if (PopUpOpen) {
    PopUp.style.display = "none";
    Blackout.style.display = "none";
  } else {
    PopUp.style.display = "block";
    Blackout.style.display = "block";
  }
}

function toggleSettings() {
  var settings = document.getElementById("MainSettings");
  var settingsIsOpen = window.getComputedStyle(settings).display === "block";

  if (settingsIsOpen) {
    settings.style.display = "none";
  } else {
    settings.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dyslexicCheckbox = document.getElementById("dyslexicCheck");
  const highContrastCheckbox = document.getElementById("highContrastCheck");
  languageSelect = document.getElementById("languageSelect");
  const textSizeS = document.getElementById("textSizeS");
  const textSizeB = document.getElementById("textSizeB");

  dyslexicCheckbox.addEventListener("change", function () {
    if (this.checked) {
      document.body.style.backgroundColor = "#FBFFB6";
      document.getElementById("arrowLeft").src =
        "includes/images/ArrowLeftD.png";
      document.getElementById("arrowRight").src =
        "includes/images/ArrowRightD.png";

      var Main = document.querySelectorAll("#Main");
      Main.forEach(function (Main) {
        Main.style.backgroundColor = "#FBFFB6";
      });

      var Settings = document.querySelectorAll("#MainSettings");
      Settings.forEach(function (Settings) {
        Settings.style.backgroundColor = "#FBFFB6";
      });
      var NavBar = document.querySelectorAll("#MainNav");
      NavBar.forEach(function (NavBar) {
        NavBar.style.backgroundColor = "#FBFFB6";
      });

      var BirdTallies = document.querySelectorAll("#BirdTallies");
      BirdTallies.forEach(function (BirdTallies) {
        BirdTallies.style.boxShadow = "None";
        BirdTallies.style.border = "solid 2px black";
      });

      var Buttons = document.querySelectorAll("#Main button");
      Buttons.forEach(function (Buttons) {
        Buttons.style.backgroundColor = "#FBFFB6";
        Buttons.style.border = "solid 2px black";
        Buttons.style.color = "black";
      });
    } else {
      document.body.style.backgroundColor = "white";

      document.getElementById("arrowLeft").src =
        "includes/images/ArrowLeft.png";
      document.getElementById("arrowRight").src =
        "includes/images/ArrowRight.png";

      var Main = document.querySelectorAll("#Main");
      Main.forEach(function (Main) {
        Main.style.backgroundColor = "white";
      });

      var Settings = document.querySelectorAll("#MainSettings");
      Settings.forEach(function (Settings) {
        Settings.style.backgroundColor = "#089cfc";
      });

      var NavBar = document.querySelectorAll("#MainNav");
      NavBar.forEach(function (NavBar) {
        NavBar.style.backgroundColor = "#089cfc";
      });

      var Buttons = document.querySelectorAll("#Main button");
      Buttons.forEach(function (Buttons) {
        Buttons.style.backgroundColor = "#558afb";
        Buttons.style.border = "None";
        Buttons.style.color = "white";
      });

      var BirdTallies = document.querySelectorAll("#BirdTallies");
      BirdTallies.forEach(function (BirdTallies) {
        BirdTallies.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 20px 30px";
      });
    }
  });

  highContrastCheckbox.addEventListener("change", function () {
    if (this.checked) {
      document.body.style.backgroundColor = "white";

      var BirdTallies = document.querySelectorAll("#BirdTallies");
      BirdTallies.forEach(function (BirdTallies) {
        BirdTallies.style.boxShadow = "None";
        BirdTallies.style.border = "solid 2px black";
      });

      var Settings = document.querySelectorAll("#MainSettings");
      Settings.forEach(function (Settings) {
        Settings.style.backgroundColor = "white";
      });
      var NavBar = document.querySelectorAll("#MainNav");
      NavBar.forEach(function (NavBar) {
        NavBar.style.backgroundColor = "white";
      });

      var Buttons = document.querySelectorAll("#Main button");
      Buttons.forEach(function (Buttons) {
        Buttons.style.backgroundColor = "white";
        Buttons.style.border = "solid 2px black";
        Buttons.style.color = "black";
      });
    } else {
      document.body.style.backgroundColor = "white";

      var BirdTallies = document.querySelectorAll("#BirdTallies");
      BirdTallies.forEach(function (BirdTallies) {
        BirdTallies.style.boxShadow = "rgba(0, 0, 0, 0.2) 0px 20px 30px";
      });

      var Settings = document.querySelectorAll("#MainSettings");
      Settings.forEach(function (Settings) {
        Settings.style.backgroundColor = "#089cfc";
      });

      var NavBar = document.querySelectorAll("#MainNav");
      NavBar.forEach(function (NavBar) {
        NavBar.style.backgroundColor = "#089cfc";
      });

      var Buttons = document.querySelectorAll("#Main button");
      Buttons.forEach(function (Buttons) {
        Buttons.style.backgroundColor = "#558afb";
        Buttons.style.border = "None";
        Buttons.style.color = "white";
      });
    }
  });

  languageSelect.addEventListener("change", function () {
    if (this.value === "Fre") {
      document.getElementById("addBird").innerHTML = "Ajouter un oiseau";
      document.getElementById("arrowRight").src =
        "includes/images/ArrowRightF.png";
      document.getElementById("arrowLeft").src =
        "includes/images/ArrowLeftF.png";
      /* AddBird button, Next, Back, Bird Tally, Bird Count, HighContrast, Dyslexic, Text to speech, Language, TextSize*/
      document.getElementById("PageTitle").innerHTML = "Décompte des oiseaux";
      document.getElementById("replace").innerHTML = "Dénombrement des oiseaux";
      document.getElementById("change1").innerHTML = "Vision dyslexique";
      document.getElementById("change2").innerHTML = "Vue à contraste élevé";
      document.getElementById("change3").innerHTML = "Texte pour parler";
      document.getElementById("change4").innerHTML = "Langue";
      document.getElementById("change5").innerHTML = "Taille du texte";
    }
    if (this.value === "Eng") {
      document.getElementById("addBird").innerHTML = "Add a bird";
      document.getElementById("arrowRight").src =
        "includes/images/ArrowRight.png";
      document.getElementById("arrowLeft").src =
        "includes/images/ArrowLeft.png";
      /* AddBird button, Next, Back, Bird Tally, Bird Count, HighContrast, Dyslexic, Text to speech, Language, TextSize*/
      document.getElementById("PageTitle").innerHTML = "Bird Tally";
      document.getElementById("replace").innerHTML = "Bird Count";
      document.getElementById("change1").innerHTML = "Dyslexic view";
      document.getElementById("change2").innerHTML = "High contrast view";
      document.getElementById("change3").innerHTML = "Text to speech";
      document.getElementById("change4").innerHTML = "Language";
      document.getElementById("change5").innerHTML = "Text size";
    }
  });

  textSizeB.addEventListener("change", function () {
    //Large Text
    const textSizeN = document.getElementById("textSizeN");
    const textSizeS = document.getElementById("textSizeS");
    if (this.checked) {
      document.getElementById("html").style.fontSize = 135 + "%";
      console.log("Change to larger font");
      textSizeN.checked = false;
      textSizeS.checked = false;
    } else {
      textSizeN.checked = true;
      document.getElementById("html").style.fontSize = 113 + "%";
    }
  });

  textSizeN.addEventListener("change", function () {
    //Normal Text
    const textSizeB = document.getElementById("textSizeB");
    const textSizeS = document.getElementById("textSizeS");
    if (this.checked) {
      document.getElementById("html").style.fontSize = 113 + "%";
      console.log("Change to normal font");
      textSizeB.checked = false;
      textSizeS.checked = false;
    } else {
      textSizeN.checked = true;
      // document.getElementById("html").style.fontSize = 100 + "%";
    }
  });

  textSizeS.addEventListener("change", function () {
    //Small Text
    const textSizeB = document.getElementById("textSizeB");
    const textSizeN = document.getElementById("textSizeN");
    if (this.checked) {
      document.getElementById("html").style.fontSize = 100 + "%";
      console.log("Change to small font");
      textSizeB.checked = false;
      textSizeN.checked = false;
    } else {
      textSizeN.checked = true;
      document.getElementById("html").style.fontSize = 113 + "%";
    }
  });
});

function searchDropdownToggle() {
  dropdown = document.getElementById("dropdownInside");

  var dropdownOpen = dropdown.style.display === "block";
  if (dropdownOpen) {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function addBird(birdName, url) {
  var birdTalliesDiv = document.getElementById("BirdTallies");

  var newBirdRow = document.createElement("div");
  newBirdRow.className = "BirdRow";
  newBirdRow.innerHTML = `
      <hr class="solid">  
      <ul>
          <div class="bird-name">
            <li><img src="includes/images/X.png" onclick="removeRow(this)"></img><img src=${url} > ${birdName}</li>
          </div>
          <div class="arrows">
            <li><img src="includes/images/Minus.png" onclick="updateCount(this, -1)" role="Remove bird count by one"></li>
            <li>1</li>
            <li><img src="includes/images/Plus.png" onclick="updateCount(this, 1)" role="Add bird count by one"></li>
          </div>
        </ul>
      `;

  birdTalliesDiv.appendChild(newBirdRow);

  toggleBirdPopUp();
}

function updateCount(element, increment) {
  var birdRow = element.closest(".BirdRow");
  var countElement = birdRow.querySelector(".arrows li:nth-child(2)");

  var currentCount = parseInt(countElement.textContent, 10);

  var newCount = currentCount + increment;
  countElement.textContent = newCount;

  if (newCount === 0) {
    birdRow.parentNode.removeChild(birdRow);
  }
}

function removeRow(element) {
  var birdRow = element.closest(".BirdRow");
  birdRow.parentNode.removeChild(birdRow);
}

function search() {
  let cards = document.querySelectorAll(".searchitem");
  let searchQuery = document.getElementById("searchbox").value;
  console.log(searchQuery);
  for (var i = 0; i < cards.length; i++) {
    console.log(cards[i].innerText);
    if (cards[i].innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      cards[i].classList.remove("hidden");
    } else {
      cards[i].classList.add("hidden");
    }
  }
}

function updateCount(element, increment) {
  var birdRow = element.closest(".BirdRow");
  var countElement = birdRow.querySelector(".arrows li:nth-child(2)");

  var currentCount = parseInt(countElement.textContent, 10);

  var newCount = currentCount + increment;
  countElement.textContent = newCount;

  if (newCount === 0) {
    birdRow.parentNode.removeChild(birdRow);
  }
}

function removeRow(element) {
  var birdRow = element.closest(".BirdRow");
  birdRow.parentNode.removeChild(birdRow);
}

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// function Form1Setup() {
//   var FormItem = document.getElementById("Form1");
//   var BirdTime1 = FormItem.getElementsByClassName("birdtime")[0];
//   var BirdTime2 = FormItem.getElementsByClassName("birdtime")[1];
//   var DeleteForm = FormItem.getElementsByClassName("FormDeleteButton")[0];
//   console.log(FormItem);

//   FormItem.addEventListener("click", function () {
//     FormItem.classList.toggle("expand");
//     FormItem.classList.toggle("formactive");
//     BirdTime1.classList.toggle("hidden");
//     BirdTime2.classList.toggle("hidden");

//     if (FormItem.classList.contains("expand")) {
//       let birds = FormItem.getElementsByClassName("birdsrecorded")[0];
//       birds.innerHTML = `40 Blackbird </br> 50 Chaffinch </br> 90 Woodpigeon </br> 70 Robin`;
//       console.log("open");
//     } else {
//       let birds = FormItem.getElementsByClassName("birdsrecorded")[0];
//       birds.innerHTML = `250 birds recorded `;
//       console.log("open");
//     }
//   });

//   DeleteForm.addEventListener("click", function () {
//     console.log("delete");
//     FormItem.classList.toggle("hidden");

//     let text;
//     if (confirm("Delete Form?") == true) {
//       text = "You pressed OK!";
//     } else {
//       text = "You cancelled!";
//     }
//   });
// }

function Form1Setup() {
  var FormItem = document.getElementById("Form1");
  var BirdTime1 = FormItem.getElementsByClassName("birdtime")[0];
  var BirdTime2 = FormItem.getElementsByClassName("birdtime")[1];
  var DeleteForm = FormItem.getElementsByClassName("FormDeleteButton")[0];
  console.log(FormItem);

  FormItem.addEventListener("click", function () {
    FormItem.classList.toggle("expand");
    FormItem.classList.toggle("formactive");
    BirdTime1.classList.toggle("hidden");
    BirdTime2.classList.toggle("hidden");

    if (FormItem.classList.contains("expand")) {
      let birds = FormItem.getElementsByClassName("birdsrecorded")[0];
      birds.innerHTML =
        birds.innerHTML = `40 Blackbird </br> 50 Chaffinch </br> 90 Woodpigeon </br> 70 Robin`;
      console.log("open");
    } else {
      let birds = FormItem.getElementsByClassName("birdsrecorded")[0];
      birds.innerHTML = `250 birds recorded `;
      console.log("open");
    }
  });

  DeleteForm.addEventListener("click", function () {
    console.log("delete");
    FormItem.classList.toggle("hidden");

    let text;
    if (confirm("Delete Form?") == true) {
      text = "You pressed OK!";
    } else {
      text = "You cancelled!";
    }
  });
}

function Form2Setup() {
  var FormItem = document.getElementById("Form2");
  var BirdTime1 = FormItem.getElementsByClassName("birdtime")[0];
  var BirdTime2 = FormItem.getElementsByClassName("birdtime")[1];
  var DeleteForm = FormItem.getElementsByClassName("FormDeleteButton")[0];
  console.log(FormItem);

  FormItem.addEventListener("click", function () {
    FormItem.classList.toggle("expand");
    FormItem.classList.toggle("formactive");
    BirdTime1.classList.toggle("hidden");
    BirdTime2.classList.toggle("hidden");

    if (FormItem.classList.contains("expand")) {
      let birds = FormItem.getElementsByClassName("birdsrecorded")[0];
      birds.innerHTML = `3 Blackbird </br> 20 Starling </br> 20 Goldeneye </br> 2 Robin`;
      console.log("open");
    } else {
      let birds = FormItem.getElementsByClassName("birdsrecorded")[0];
      birds.innerHTML = `45 birds recorded `;
      console.log("open");
    }
  });

  DeleteForm.addEventListener("click", function () {
    console.log("delete");
    FormItem.classList.toggle("hidden");

    let text;
    if (confirm("Delete Form?") == true) {
      text = "You pressed OK!";
    } else {
      text = "You cancelled!";
    }
  });
}

function Form3Setup() {
  var FormItem = document.getElementById("Form3");
  var BirdTime1 = FormItem.getElementsByClassName("birdtime")[0];
  var BirdTime2 = FormItem.getElementsByClassName("birdtime")[1];
  var DeleteForm = FormItem.getElementsByClassName("FormDeleteButton")[0];
  console.log(FormItem);

  FormItem.addEventListener("click", function () {
    FormItem.classList.toggle("expand");
    FormItem.classList.toggle("formactive");
    BirdTime1.classList.toggle("hidden");
    BirdTime2.classList.toggle("hidden");

    if (FormItem.classList.contains("expand")) {
      let birds = FormItem.getElementsByClassName("birdsrecorded")[0];
      birds.innerHTML = `40 Blackbird </br> 50 Chaffinch </br> 90 Woodpigeon </br> 70 Robin`;
      console.log("open");
    } else {
      let birds = FormItem.getElementsByClassName("birdsrecorded")[0];
      birds.innerHTML = `250 birds recorded `;
      console.log("open");
    }
  });

  DeleteForm.addEventListener("click", function () {
    console.log("delete");
    FormItem.classList.toggle("hidden");

    let text;
    if (confirm("Delete Form?") == true) {
      text = "You pressed OK!";
    } else {
      text = "You cancelled!";
    }
  });
}

function BirdSetup() {
  var BirdItem = document.getElementsByClassName("searchbirditem")[0];
  var expandbutton = BirdItem.getElementsByClassName("expandbutton")[0];
  expandbutton.addEventListener("click", function (e) {
    e.stopPropagation();
    BirdItem.classList.toggle("expandbird");

    if (BirdItem.classList.contains("expandbird")) {
      //If opened
      expandbutton.src = "includes/images/collapse.png";
    } else {
      expandbutton.src = "includes/images/expand.png";
    }
  });

  BirdItem.addEventListener("click", (e) => {
    e.stopPropagation();
    // event.stopImmediatePropagation();
    var BirdName = BirdItem.getElementsByClassName("birdname1")[0].textContent;
    console.log(BirdName);
    if (BirdName == "Golden Plover") {
      addBird(BirdName, "includes/images/birds/golden_plover.jpeg");
    }
  });

  // BirdItem.addEventListener("click", function (e) {
  //   e.stopPropagation();
  //   // event.stopImmediatePropagation();
  //   addBird("Pigeon"); //add image src to add to bird count list
  // });
}

document.addEventListener("DOMContentLoaded", function () {
  Form1Setup();
  Form2Setup();
  Form3Setup();
  // -----------------------------------------------------------
});

document.addEventListener("DOMContentLoaded", function () {
  BirdSetup();
});

var token = 0;
var userPwd = 0;
var length = 0;
var number = 0;
var lowLetter = 0;
var upperLetter = 0;

function ChangeInstructionColour()
{
  userPwd = document.getElementById("password");
  lowLetter = document.getElementById("lowLetter");
  upperLetter = document.getElementById("upperLetter");
  number = document.getElementById("number");
  length = document.getElementById("length");
  var username = document.getElementById("username");

  var referenceLowCase = /[a-z]/g;
  var referenceUpperCase = /[A-Z]/g;
  var referenceNumber = /[0-9]/g;
  var referenceLength = "10";

  userPwd.onkeyup = function() 
  {      
      if(userPwd.value.match(referenceLowCase)) 
      {
        lowLetter.classList.remove("invalidPwd");
        lowLetter.classList.add("validPwd");
      } else 
      {
        lowLetter.classList.remove("validPwd");
        lowLetter.classList.add("invalidPwd");
        token = 2;
      }
      
      if(userPwd.value.match(referenceUpperCase)) 
      {
        upperLetter.classList.remove("invalidPwd");
        upperLetter.classList.add("validPwd");
      } else 
      {
        upperLetter.classList.remove("validPwd");
        upperLetter.classList.add("invalidPwd");
        token = 2;
      }

      if(userPwd.value.match(referenceNumber)) 
      {
        number.classList.remove("invalidPwd");
        number.classList.add("validPwd");
      } else 
      {
        number.classList.remove("validPwd");
        number.classList.add("invalidPwd");
        token = 2;
      }

      if(userPwd.value.length >= referenceLength) 
      {
        length.classList.remove("invalidPwd");
        length.classList.add("validPwd");
      } else 
      {
        length.classList.remove("validPwd");
        length.classList.add("invalidPwd");
        token = 2;
      }
      if(length.classList.contains("validPwd") && number.classList.contains("validPwd") && upperLetter.classList.contains("validPwd") && lowLetter.classList.contains("validPwd") && username.value.length >= 1)
      {
        token = 1;
      }
      return token;
  }
  
  username.onkeyup = function() 
  {
    if(length.classList.contains("validPwd") && number.classList.contains("validPwd") && upperLetter.classList.contains("validPwd") && lowLetter.classList.contains("validPwd") && username.value.length >= 1)
      {
        token = 1;
      }
  }
}

function ValidateDetails()
{
  if(token == 1)
  {
    window.location.href="BirdCountLoggedIn.html"
  }
  if(username.value.length == 0)
  {
    alert("Please Enter Your Username in the Username Box.");
    token = 0;
    
  }
  else if(userPwd == 0)
  {
    alert("Please Enter a Password That Passes all of the Password Rules. (Rules Will Turn Green When Passed.")
  }
  else if(length.classList.contains("invalidPwd") || number.classList.contains("invalidPwd") || upperLetter.classList.contains("invalidPwd") || lowLetter.classList.contains("invalidPwd"))
  {
    alert("Please Enter a Password That Passes all of the Password Rules. (Rules Will Turn Green When Passed.")
  }
}

function CheckDuplicateUser()
{
  let username = document.getElementById("username")
  let userList = ["JohnDoLikesBirds", "DanNotSmith", "BirdCounter97"];
  
  for (let i = 0; i < userList.length; i++) 
  {
    if (userList[i] === username.value) {
      alert("BirdCounter97 already exists as a username on the service. Please try a different name. Here are three available names you could choose: BirdCounter1, BirdCounter87, BirdCounter101")
      token = 3;
    }
  }
}
