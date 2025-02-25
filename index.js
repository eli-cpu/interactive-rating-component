
let rated = false;
let rating = 0;

function submit() {
    if(rated) {
        document.getElementById("submit").style.backgroundColor = "white";
        document.getElementById("submit").style.color = "black";
        window.location.replace("submitted-state.html");
        document.getElementById("selected").innerHTML = "You selected " + rating + " out of 5";
    }

}

function rate(id ) {
    if(rated) {
        for (let i = 1; i <= 5; i++) {
            let button = document.getElementById(i.toString());
            button.style
            button.style.backgroundColor = "hsl(218, 18%, 19%)";
            button.style.color = "hsl(217, 12%, 63%)";
        }
    }
    document.getElementById(id.toString()).style.backgroundColor = "white";
    document.getElementById(id.toString()).style.color = "black";
    rated = true;
    rating = id;
}