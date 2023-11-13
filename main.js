let choresCategory1 = ["Chore 1A", "Chore 1B", "Chore 1C", "Chore 1D", "Chore 1E", "Chore 1F"];
let choresCategory2 = ["Chore 2A", "Chore 2B", "Chore 2C", "Chore 2D"];
let choresCategory3 = ["Chore 3A", "Chore 3B", "Chore 3C"];

let countCategory1 = 0;
let countCategory2 = 0;

function getNextChore() {
    let chore;
    if (countCategory1 < 5) {
        chore = choresCategory1[Math.floor(Math.random() * choresCategory1.length)];
        countCategory1++;
    } else if (countCategory2 < 3) {
        chore = choresCategory2[Math.floor(Math.random() * choresCategory2.length)];
        countCategory2++;
    } else {
        chore = choresCategory3[Math.floor(Math.random() * choresCategory3.length)];
        countCategory1 = 0;
        countCategory2 = 0;
    }
    document.getElementById("displayChore").innerText = "Your next fun is: " + chore;
}

document.getElementById("getChore").addEventListener("click", getNextChore);
