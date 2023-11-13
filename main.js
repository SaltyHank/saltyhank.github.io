let choresCategory1 = ["Taylor suck James dick", "Masturbate each other", "Taylor, put lube on the buttplug and stick it in James ass", "James suck on Taylors clit", "James suck Taylors clit while you put a finger in her asshole", "Taylor masturbate James", "Taylor watch James masturbate", "James masturbate Taylor", "James and Taylor masturbate together", "James tongue-fuck Taylors pussy while you put a finger in her asshole", "James tongue-fuck Taylors pussy", "James lick Taylors asshole", "Taylor lick James asshole", "James eat out Taylor", "69", "69 and James finger Taylor", "69 and Taylor play with James balls", "69 and James put a finger in Taylors asshole", "James lick Taylors asshole and finger her pussy", "69 and put a finger in each others asses", "Taylor bend over and James licks her ass while she fingers her pussy", "Taylor bend over and James lick her pussy", "Taylor bend over and James lick her asshole", "James finger Taylors asshole", "Taylor put a finger in James", "James lick Taylors asshole", "Taylor bend over and spread your ass so James can lick it", "James tongue fuck Taylors pussy", "James watch Taylor up close while she masturbates", "James finger Taylors pussy and ass at the same time", "Taylor masturbate James while you put a finger in him", "Taylor give James a blowjob", "James throat-fuck Taylor", "Taylor put lube on James dick and masturbate him", "69 with hands - James slowly finger Taylor while Taylor masturbates James", "69 and Taylor puts a finger in James", "69 and James finger Taylors asshole", "Taylor bend over and have James eat her out", "Taylor bend over and have James lick your pussy while you finger your ass", "Taylor suck James balls", "Taylor give James a blowjob and play with his balls/ass", "Taylor masturbate while James fingers your pussy", "Taylor masturbate while James plays with your ass", "Taylor lick James ass and jerk him off", "Taylor suck James finger then put it in your pussy", "Taylor suck James finger then put it in your ass", "Taylor give James a blowjob", "Taylor lick James balls", "James eat Taylor out", "James use Taylors hand to masturbate", "James put lube on the buttplug and stick it in Taylors ass", "Taylor give James a prostate massage", "James eat Taylor out and play with her asshole gently", "Taylor sit on James face with your pussy", "Taylor sit on James face with your ass", "James watch Taylor as she fingers herself", "James watch Taylor as she fingers her ass", "Taylor suck on James balls while he masturbates", "Taylor use your cum to put a finger in James ass", "James use Taylors cum to put a finger in her asshole", "James eat out Taylor then kiss her so she can taste her cum"];

let choresCategory3 = ["Mutually Masturbate till James cums. James cum on Taylors pussy then Taylor finger it into herself and masturbate till she cums", "James cum in Taylor then finger her pussy while licking her ass until she cums", "James cum in Taylor then finger her pussy till she cums", "James cum in Taylor", "James cum on Taylors pussy then Taylor finger yourself with James cum", "James cum in Taylor then Taylor sucks his dick while fingering/masturbating herself", "James cum on Taylors asshole", "James cum on Taylors asshole then Taylor fingers it in", "Taylor spread her pussy and James shoot his cum in it then put his dick back inside", "69 till James cums. Taylor hold it in her mouth then spit it on her pussy and masturbate", "James cum on Taylors asshole then push it in with his dick", "James cum on Taylors tits", "Taylor spread her pussy and James shoot his cum in it", "James cum on Taylors spot of choosing then James smear it all over and finger it into her", "James cum on Taylors pussy then finger it inside her", "James cum inside Taylor", "James cum on Taylors asshole then finger it in", "James cum inside Taylor then watch as she pushes it out of her pussy while she keeps masturbating", "James cum on Taylors ass then Taylor finger sum into her ass while James pushes the rest into her pussy"];

// Category 2 chores are objects with names and image URLs
let choresCategory2 = [
    { name: "Missionary", imageUrl: "missionary_04.png" },
    { name: "Reverse Cowgirl", imageUrl: "rodeo_00.png" },
    { name: "Reverse Cowgirl - Taylor put a finger in her ass", imageUrl: "rodeo_00.png" },
    { name: "Reverse Cowgirl - Taylor play with James ass", imageUrl: "rodeo_00.png" },
    { name: "Reverse Cowgirl - Taylor put the buttplug in her ass", imageUrl: "rodeo_00.png" },
    { name: "Reverse Cowgirl - Taylor play with James balls", imageUrl: "rodeo_00.png" },
    { name: "From Behind", imageUrl: "doggy_08.png" },
    { name: "From Behind - James puts a finger in Taylors asshole", imageUrl: "doggy_08.png" },
    { name: "From Behind - James puts the buttplug in Taylors asshole", imageUrl: "doggy_08.png" },
    { name: "From Behind", imageUrl: "doggy_08.png" },
    { name: "From Behind - Taylor plays with her asshole", imageUrl: "doggy_08.png" },
    { name: "Reverse Cowgirl", imageUrl: "rodeo_00.png" },
    { name: "Reverse Cowgirl", imageUrl: "rodeo_00.png" },
    { name: "Cowgirl", imageUrl: "cowgirl_00.png" },
    { name: "Cowgirl - Taylor lean forward and let James fuck you", imageUrl: "cowgirl_00.png" },
    { name: "Scissor", imageUrl: "scissors_03.png" },
    { name: "Bent Over the Bed", imageUrl: "doggy_10.png" },
    { name: "Wrapped Lotus", imageUrl: "lotus_00.png" },
    { name: "Bull", imageUrl: "bull_07.png" },
    { name: "Bulldog", imageUrl: "bulldog.png" },
    { name: "Butterfly on edge of bed - softly", imageUrl: "butterfly.jpg" },
    { name: "180 Missionary. Put pillow under Taylors hips", imageUrl: "missionary_12.png" },
    { name: "Cowgirl - Taylor lean back", imageUrl: "crab_01.png" },
    { name: "Kneeling Scissor", imageUrl: "scissors_06.png" },

];

let countCategory1 = 0;
let countCategory2 = 0;

function getNextChore() {
    let choreDisplay = document.getElementById("displayChore");
    let chore;
    if (countCategory1 < 5) {
        chore = choresCategory1[Math.floor(Math.random() * choresCategory1.length)];
        countCategory1++;
        choreDisplay.innerHTML = chore;
    } else if (countCategory2 < 5) {
        chore = choresCategory2[Math.floor(Math.random() * choresCategory2.length)];
        countCategory2++;
        choreDisplay.innerHTML = `<img src="${chore.imageUrl}" alt="Chore Image"><br>${chore.name}`;
    } else {
        chore = choresCategory3[Math.floor(Math.random() * choresCategory3.length)];
        choreDisplay.innerHTML = chore;
        countCategory1 = 0;
        countCategory2 = 0;
    }
}


function advanceToNextCategory() {
    if (countCategory1 < 5) {
        countCategory1 = 5; // Move to Category 2
    } else if (countCategory2 < 3) {
        countCategory2 = 5; // Move to Category 3
    } else {
        // Reset to Category 1 if already in Category 3
        countCategory1 = 0;
        countCategory2 = 0;
    }
    // Optional: Display a chore immediately after advancing
    getNextChore();
}

document.getElementById("loginButton").addEventListener("click", function() {
    var password = document.getElementById("passwordInput").value;
    if(password === "0630") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Incorrect Password!");
        document.getElementById("passwordInput").value = ""; // Clear the input field
    }
});


document.getElementById("getChore").addEventListener("click", getNextChore);

// New event listener for advancing to the next category
document.getElementById("nextCategory").addEventListener("click", advanceToNextCategory);

