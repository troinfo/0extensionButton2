document.addEventListener('DOMContentLoaded', function () {
    let countForColor = 0;
    let w = document.getElementById("sharebtn");

    document.getElementById("stateLike").addEventListener("change", function () {
        myFunction(this);
    });

    document.getElementById("mgBtn").addEventListener("click", function () {
        getRndom(5, 70, 25);
    });

    document.getElementById("pwBtn").addEventListener("click", function () {
        getRndom(5, 69, 26);
    });

    document.querySelectorAll(".rndom").forEach(button => {
        button.addEventListener("click", function () {
            const params = this.getAttribute("data-params").split(',');
            getRndom(parseInt(params[0]), parseInt(params[1]), parseInt(params[2]));
        });
    });

    document.querySelectorAll(".rndomZD").forEach(button => {
        button.addEventListener("click", function () {
            const params = this.getAttribute("data-params").split(',');
            getRndomZD(parseInt(params[0]), parseInt(params[1]), parseInt(params[2]));
        });
    });

    document.getElementById("sharebtn").addEventListener("click", function () {
        toCC('out1');
    });

    document.querySelectorAll(".tablinks").forEach(tablink => {
        tablink.addEventListener("click", function (evt) {
            openTab(evt, tablink.getAttribute("data-tab"));
        });
    });

    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(tabName).style.display = "block";
        if (evt) {
            evt.currentTarget.classList.add("active");
        } else {
            document.querySelector(".tablinks").classList.add("active");
        }
    }

    function myFunction(statelike) {
        let pal = document.getElementById("palike");
        let nyl = document.getElementById("nylike");
        let ctl = document.getElementById("ctlike");
        let njl = document.getElementById("njlike");
        let scl = document.getElementById("sclike");
        let ncl = document.getElementById("nclike");

        let a = statelike.value;

        pal.style.display = "none";
        nyl.style.display = "none";
        ctl.style.display = "none";
        njl.style.display = "none";
        scl.style.display = "none";
        ncl.style.display = "none";

        switch (a) {
            case 'ct':
                ctl.style.display = "block";
                break;
            case 'nc':
                ncl.style.display = "block";
                break;
            case 'nj':
                njl.style.display = "block";
                break;
            case 'ny':
                nyl.style.display = "block";
                break;
            case 'pa':
                pal.style.display = "block";
                break;
            case 'sc':
                scl.style.display = "block";
                break;
        }
    }

    function toCC(copyId) {
        let inputElement = document.createElement("input");
        inputElement.type = "text";
        let copyText = document.getElementById(copyId).innerHTML;
        inputElement.value = copyText;
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand('copy');
        document.body.removeChild(inputElement);
        alert("Number Copied to clipboard");
    }

    function getRndom(a, b, c) {
        const n = a;
        var numberrange = c;
        var arrSingle = [];

        while (arrSingle.length < 1) {
            var r = Math.floor(Math.random() * c) + 1;
            if (arrSingle.indexOf(r) === -1) arrSingle.push(r);
        }
        let arrs2 = arrSingle.join("");
        result2 = arrs2;

        var arr = [];
        while (arr.length < n) {
            var r = Math.floor(Math.random() * numberrange) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        let arrs = arr.join(" ");
        result = arrs + " (" + result2 + ")";

        document.getElementById("out1").innerHTML = result;
        countForColor = countForColor + 1;
        if (countForColor % 2 == 0) {
            w.style.display = "block";
            document.getElementById("out1").style.color = "red";
            document.getElementById("out1").fontweight = "bold";
        } else {
            w.style.display = "block";
            document.getElementById("out1").style.color = "blue";
            document.getElementById("out1").fontweight = "bold";
        }
    }

    function getRndomZD(a, b, c) {
        const arr = Array.from({ length: a }, () => Math.floor(Math.random() * b));
        let arrs = arr.join(" ");
        result = arrs;
        document.getElementById("out1").innerHTML = result;

        countForColor = countForColor + 1;
        if (countForColor % 2 == 0) {
            w.style.display = "block";
            document.getElementById("out1").style.color = "red";
            document.getElementById("out1").fontweight = "bold";
        } else {
            w.style.display = "block";
            document.getElementById("out1").style.color = "blue";
            document.getElementById("out1").fontweight = "900";
        }
    }

    // Activate the Numbers tab by default
    openTab(null, 'tab1');
});
{

let countForColor = 0;

function getRoll(a) {
const n = a;
const arr = [];
while (arr.length < 1) {
    var r = Math.floor(Math.random() * a) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
        }

let arrs = arr.join("");
result = arrs;
document.getElementById("yourRollOut").innerHTML = result;

countForColor = countForColor + 1;
        if (countForColor % 2 == 0) {
            //console.log("even");
document.getElementById("yourRollOut").style.color = "red";
document.getElementById("yourRollOut").fontweight = "bold";
} else {
            //console.log("odd");
document.getElementById("yourRollOut").style.color = "blue";
document.getElementById("yourRollOut").fontweight = "900";
        }
    }
}

{
let countForColor = 0;
    function getFlip(){
        const n = 1;
const numberrange = 2;

const arr = [];
while(arr.length < n){
    const r = Math.floor(Math.random() * numberrange) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

let arrs = arr.join("");
const coinFlip = (arrs == 2) ? "HEADS":"TAILS"
result = coinFlip;
document.getElementById("yourFlipOut").innerHTML=result;

countForColor = countForColor+1;
if (countForColor % 2 == 0){
//console.log("even");
document.getElementById("yourFlipOut").style.color = "red";
document.getElementById("yourFlipOut").fontweight = "bold";
}
else {
//console.log("odd");
document.getElementById("yourFlipOut").style.color = "blue";
document.getElementById("yourFlipOut").fontweight = "900";
}

    }
}
