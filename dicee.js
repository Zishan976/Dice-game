

var pictures = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];


function getRandomImage() {

    var randomIndex1 = Math.floor(Math.random() * pictures.length);
    var randomPicture1 = pictures[randomIndex1];


    var randomIndex2 = Math.floor(Math.random() * pictures.length);
    var randomPicture2 = pictures[randomIndex2];


    document.querySelector(".img1").setAttribute("src", randomPicture1)

    document.querySelector(".img2").src = `${randomPicture2}`


    if (randomIndex1 > randomIndex2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else if (randomIndex2 > randomIndex1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    } else if (randomIndex2 === randomIndex1) {
        document.querySelector("h1").innerHTML = "Drow!";
    }

}

