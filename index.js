
let rated = false;
let rating = 0;
for (let i = 1; i <= 5; i++) {
    let button = document.getElementById(i.toString());
    button.style.backgroundColor = "hsl(218, 18%, 19%)";
    button.style.color = "hsl(217, 12%, 63%)";
    button.addEventListener("mouseover", hover(i));
    button.addEventListener("mouseout", out(i));
}

function hover(num) {
    document.getElementById(num.toString()).style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById(num.toString()).style.color = "black";
}

function out(num) {
    document.getElementById(num.toString()).style.backgroundColor = "hsl(218, 18%, 19%)";
    document.getElementById(num.toString()).style.color = "hsl(217, 12%, 63%)";
}

function submit() {
    if(rated) {
        document.getElementById("submit").style.backgroundColor = "white";
        document.getElementById("submit").style.color = "black";
        secondSite();
        setRating();
    }
}

function rate(id) {
    if(rated) {
       
    }
    document.getElementById(id.toString()).style.backgroundColor = "white";
    document.getElementById(id.toString()).style.color = "black";
    rated = true;
    rating = id;
}


function setRating() {
    document.getElementById("selected").innerHTML = "You selected " + rating + " out of 5";
}

function secondSite() {
    let firstDiv = document.getElementById("first");
    let secondDiv = document.getElementById("second");
    firstDiv.remove();
    secondDiv.style.display = "block";
}