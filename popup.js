document.addEventListener('DOMContentLoaded', function () {
  /***************************************************************
   * 1. VARIABLES & COUNTERS
   ***************************************************************/
  // If you want separate counters for each type of result,
  // define them here. Or just use one if you prefer.
  let countForColorMain = 0; // For "out1" (main random numbers)
  let countForColorRoll = 0; // For "yourRollOut" (dice rolls)
  let countForColorFlip = 0; // For "yourFlipOut" (coin flip)

  // This reference is for the "Share" button on tab1
  const shareBtnTab1 = document.getElementById("sharebtn");


  /***************************************************************
   * 2. EVENT LISTENERS: TAB SWITCHING
   ***************************************************************/
  // Attach click events to each .tablinks element
  document.querySelectorAll(".tablinks").forEach(tablink => {
    tablink.addEventListener("click", function (evt) {
      openTab(evt, tablink.getAttribute("data-tab"));
    });
  });

  // On load, open tab1 by default
  openTab(null, 'tab1');


  /***************************************************************
   * 3. EVENT LISTENERS: STATE SELECT, MG/PW, SHARE, ETC.
   ***************************************************************/
  // State <select> for showing/hiding #palike, #nylike, etc.
  const stateLikeSelect = document.getElementById("stateLike");
  if (stateLikeSelect) {
    stateLikeSelect.addEventListener("change", function () {
      handleStateChange(this.value);
    });
  }

  // MG / PW buttons
  const mgBtn = document.getElementById("mgBtn");
  if (mgBtn) {
    mgBtn.addEventListener("click", function () {
      getRndom(5, 70, 25);
    });
  }

  const pwBtn = document.getElementById("pwBtn");
  if (pwBtn) {
    pwBtn.addEventListener("click", function () {
      getRndom(5, 69, 26);
    });
  }

  // Rndom / RndomZD buttons (lottery draws)
  document.querySelectorAll(".rndom").forEach(button => {
    button.addEventListener("click", function () {
      const params = this.getAttribute("data-params").split(',');
      getRndom(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10));
    });
  });

  document.querySelectorAll(".rndomZD").forEach(button => {
    button.addEventListener("click", function () {
      const params = this.getAttribute("data-params").split(',');
      getRndomZD(parseInt(params[0], 10), parseInt(params[1], 10), parseInt(params[2], 10));
    });
  });

  // "Share" button for main tab (#out1)
  const shareBtn = document.getElementById("sharebtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      copyToClipboard('out1');
    });
  }

  // If you have a "Share" button for the dice rolls (#sharebtn1) or coin flip (#sharebtn3),
  // you'd attach event listeners here as well, e.g.:
  /*
  document.getElementById("sharebtn1").addEventListener("click", function () {
    copyToClipboard('yourRollOut');
  });
  document.getElementById("sharebtn3").addEventListener("click", function () {
    copyToClipboard('yourFlipOut');
  });
  */


  /***************************************************************
   * 4. EVENT LISTENERS: DICE ROLLS & COIN FLIP
   ***************************************************************/
  // For each dice roll button (04, 06, 08, etc.), remove inline and attach in JS:
  const btnR04 = document.getElementById("btnR04");
  if (btnR04) {
    btnR04.addEventListener("click", function () {
      getRoll(4);
    });
  }

  const btnR06 = document.getElementById("btnR06");
  if (btnR06) {
    btnR06.addEventListener("click", function () {
      getRoll(6);
    });
  }

  // ... similarly for btnR08, btnR10, btnR12, btnR20, btnR100:
  const btnR08 = document.getElementById("btnR08");
  if (btnR08) {
    btnR08.addEventListener("click", function () {
      getRoll(8);
    });
  }

  const btnR10 = document.getElementById("btnR10");
  if (btnR10) {
    btnR10.addEventListener("click", function () {
      getRoll(10);
    });
  }

  const btnR12 = document.getElementById("btnR12");
  if (btnR12) {
    btnR12.addEventListener("click", function () {
      getRoll(12);
    });
  }

  const btnR20 = document.getElementById("btnR20");
  if (btnR20) {
    btnR20.addEventListener("click", function () {
      getRoll(20);
    });
  }

  const btnR100 = document.getElementById("btnR100");
  if (btnR100) {
    btnR100.addEventListener("click", function () {
      getRoll(100);
    });
  }

  // Coin Flip button (remove inline onclick="getFlip()" from HTML)
  const btnFlip = document.getElementById("btnFlip");
  if (btnFlip) {
    btnFlip.addEventListener("click", function () {
      getFlip();
    });
  }

  // pass gen button (remove inline onclick="genPassword()" from HTML)
  const passgen1 = document.getElementById("passgen1");
  if (passgen1) {
    passgen1.addEventListener("click", function () {
      genPassword();
    });
  }

  /***************************************************************
   * 5. FUNCTIONS: openTab, handleStateChange, getRndom, etc.
   ***************************************************************/

  /**
   * Show/hide tab content & switch body background
   */
  function openTab(evt, tabName) {
    // Hide all .tab content
    const tabcontent = document.getElementsByClassName("tab");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove 'active' from all .tablinks
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    // Show the chosen tab
    const currentTab = document.getElementById(tabName);
    if (currentTab) {
      currentTab.style.display = "block";
    }

    // Mark the clicked tablink as active
    if (evt) {
      evt.currentTarget.classList.add("active");
    } else {
      // If no event provided (e.g., on page load),
      // just set the first .tablinks as active
      document.querySelector(".tablinks").classList.add("active");
    }

    // Remove old background class from <body>
    document.body.classList.remove("tab1", "tab2", "tab3", "tab4", "tab5", );

    // Add the new background class
    if (tabName === "tab1") {
      document.body.classList.add("tab1");
    } else if (tabName === "tab2") {
      document.body.classList.add("tab2");
    } else if (tabName === "tab3") {
      document.body.classList.add("tab3");
    } else if (tabName === "tab4") {
      document.body.classList.add("tab4");
    } else if (tabName === "tab5") {
      document.body.classList.add("tab5");
    }
  }

  /**
   * Show/hide containers based on selected state
   */
  function handleStateChange(value) {
    const pal = document.getElementById("palike");
    const nyl = document.getElementById("nylike");
    const ctl = document.getElementById("ctlike");
    const njl = document.getElementById("njlike");
    const scl = document.getElementById("sclike");
    const ncl = document.getElementById("nclike");

    // Hide them all
    [pal, nyl, ctl, njl, scl, ncl].forEach(el => {
      if (el) el.style.display = "none";
    });

    // Show the chosen one
    switch (value) {
      case 'ct': if (ctl) ctl.style.display = "block"; break;
      case 'ny': if (nyl) nyl.style.display = "block"; break;
      case 'nj': if (njl) njl.style.display = "block"; break;
      case 'nc': if (ncl) ncl.style.display = "block"; break;
      case 'sc': if (scl) scl.style.display = "block"; break;
      case 'pa': if (pal) pal.style.display = "block"; break;
    }
  }

  /**
   * Copy text from an element to clipboard
   */
  function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    const copyText = element.innerText;

    // Create a temp input
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy'); // For broad compatibility
    document.body.removeChild(inputElement);
    alert("Number Copied to clipboard");
  }

  /**
   * getRndom(a, b, c):
   *   - Generate 'a' distinct random numbers from 1..b
   *   - Plus 1 "special" pick from 1..c
   *   - Display in #out1
   */
  function getRndom(a, b, c) {
    let result = "";
    let result2 = "";

    // Generate the single "special" pick from 1..c
    const arrSingle = [];
    while (arrSingle.length < 1) {
      const r = Math.floor(Math.random() * c) + 1;
      if (!arrSingle.includes(r)) arrSingle.push(r);
    }
    result2 = arrSingle.join("");

    // Generate 'a' distinct random numbers from 1..b
    const arr = [];
    while (arr.length < a) {
      const r = Math.floor(Math.random() * b) + 1;
      if (!arr.includes(r)) arr.push(r);
    }
    result = arr.join(" ") + " (" + result2 + ")";

    // Update #out1
    const out1 = document.getElementById("out1");
    if (!out1) return;
    out1.innerText = result;

    // Toggle color & show share button
    countForColorMain++;
    if (shareBtnTab1) shareBtnTab1.style.display = "block";
    if (countForColorMain % 2 === 0) {
      out1.style.color = "red";
      out1.style.fontWeight = "bold";
    } else {
      out1.style.color = "blue";
      out1.style.fontWeight = "bold";
    }
  }

  /**
   * getRndomZD(a, b, c):
   *   - Generate 'a' random numbers in [0..(b-1)]
   *   - (c is unused in this example, or used differently)
   *   - Display in #out1
   */
  function getRndomZD(a, b, c) {
    const arr = Array.from({ length: a }, () => Math.floor(Math.random() * b));
    const result = arr.join(" ");

    const out1 = document.getElementById("out1");
    if (!out1) return;
    out1.innerText = result;

    countForColorMain++;
    if (shareBtnTab1) shareBtnTab1.style.display = "block";
    if (countForColorMain % 2 === 0) {
      out1.style.color = "red";
      out1.style.fontWeight = "bold";
    } else {
      out1.style.color = "blue";
      out1.style.fontWeight = "900";
    }
  }

  /**
   * Dice roll function getRoll(a):
   *   - Generate 1 random from 1..a
   *   - Display in #yourRollOut
   */
  function getRoll(a) {
    const arr = [];
    while (arr.length < 1) {
      const r = Math.floor(Math.random() * a) + 1;
      if (!arr.includes(r)) arr.push(r);
    }
    const result = arr.join("");

    const outRoll = document.getElementById("yourRollOut");
    if (!outRoll) return;
    outRoll.innerText = result;

    countForColorRoll++;
    if (countForColorRoll % 2 === 0) {
      outRoll.style.color = "red";
      outRoll.style.fontWeight = "bold";
    } else {
      outRoll.style.color = "blue";
      outRoll.style.fontWeight = "900";
    }
  }

  /**
   * Coin flip function getFlip():
   *   - Generate 1 random from 1..2
   *   - If 2 -> HEADS, else TAILS
   *   - Display in #yourFlipOut
   */
  function getFlip() {
    const r = Math.floor(Math.random() * 2) + 1;
    const coinFlip = (r === 2) ? "HEADS" : "TAILS";

    const outFlip = document.getElementById("yourFlipOut");
    if (!outFlip) return;
    outFlip.innerText = coinFlip;

    countForColorFlip++;
    if (countForColorFlip % 2 === 0) {
      outFlip.style.color = "red";
      outFlip.style.fontWeight = "bold";
    } else {
      outFlip.style.color = "blue";
      outFlip.style.fontWeight = "900";
    }
  }

let countForColor = 0;

function genPassword() {

  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

  var password = '';

  for (var i = 0; i < 8; i++) {

    password += chars[Math.floor(Math.random() * chars.length)];
  }

  result = password;
        document.getElementById("passout1").innerHTML = result;

  countForColor = countForColor + 1;
        if (countForColor % 2 == 0) {

            document.getElementById("passout1").style.color = "red";
            document.getElementById("passout1").fontweight = "bold";
        }
        else {

            document.getElementById("passout1").style.color = "blue";
            document.getElementById("passout1").fontweight = "900";
        }

}

});
