let scr = 20;
let highscr = 0;

let ranNum = Math.floor((Math.random() * 20) + 1);
document.querySelector(".randomNumber").style.display = "none".innerHTML = ranNum;

console.log(ranNum);

document.getElementById("check").addEventListener("click", function () {

    let gussNum = document.getElementById("gussNumber").value;

    if (ranNum == gussNum) {
        document.querySelector(".start").innerHTML = "🎉 Correct Answer!";
        document.querySelector(".randomNumber").innerHTML = ranNum;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector("#gussNumber").style.backgroundColor = "green";

        if (scr > highscr) {
            document.querySelector(".highScore").innerHTML = "🏅 High Scrore : " + scr;

        }

        console.log("correct")
    } else if (ranNum < gussNum && gussNum != "") {

        document.querySelector(".start").innerHTML = "📈 Too High...!";
        scr--;

        console.log("big")
    } else if (ranNum > gussNum && gussNum != "") {

        document.querySelector(".start").innerHTML = "📉 Too Low...!";
        scr--;

        console.log("small")
    } else {
        document.querySelector(".start").innerHTML = "⛔ No Number...!";

    }

    document.querySelector(".score").innerHTML = "💯 Score : " + scr;

    if (scr == 0) {
        document.querySelector(".start").innerHTML = "💥 You Last The Game...!";

    }
});

document.getElementById("again").addEventListener("click", function () {
    scr = 20;
    ranNum = Math.floor((Math.random() * 20) + 1);
    document.querySelector(".randomNumber").innerHTML = ranNum;
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("#gussNumber").style.backgroundColor = "black";
    document.querySelector(".randomNumber").innerHTML = "?";
    document.querySelector(".start").innerHTML = "Start Guessing...🤔";
    document.querySelector(".score").innerHTML = "💯 Score : " + scr;
    document.getElementById("gussNumber").value = "";
    console.log(ranNum);

});