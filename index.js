
let rated= false;
let rating= 0;
for (let i = 1; i <= 5; i++) {
    document.getElementById(i.toString()).classList.add("hover");
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
        for(let i = 1; i <= 5; i++) {
            document.getElementById(i.toString()).active = false;
        }
        document.getElementById(rating.toString()).classList.remove("active");
        document.getElementById(rating.toString()).classList.add("hover");

    }
    document.getElementById(id.toString()).active = true;
    document.getElementById(id.toString()).classList.add("active");
    document.getElementById(id.toString()).classList.remove("hover");
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