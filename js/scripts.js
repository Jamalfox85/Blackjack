player_score = 0;
house_score = 0;
function start () {
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("acehand").style.visibility = "hidden";
    hand = 0;
    acehand = 0;
    var card1 = "card1"
    var card2 = "card2"
    var card1num = Math.floor((Math.random() * 13) + 1);
    var card2num = Math.floor((Math.random() * 13) + 1);
    var card1suit = Math.floor(Math.random() * 4);
    var card2suit = Math.floor(Math.random() * 4);
    selectcard(card1, card1num, card1suit);
    selectcard(card2, card2num, card2suit);
    document.getElementById("startbutton").innerHTML="Start Over";
    document.getElementById("hand").innerHTML = hand;
    document.getElementById("acehand").innerHTML = hand + 10;
}

function hitMe() {
    var row = document.getElementById("cards").rows[0];
    row.insertCell(-1);
    card = Math.floor(Math.random() * 2);
    switch (card) {
        case 0:
            document.getElementById("handcards").lastChild.src="0";
            break;
        case 1:
            document.getElementById("handcards").lastChild.src="1";
            break;
        case 2:
            x.innerHTML = "2";
            break;
    }
    
    swapCard();
    checkWin();
}

function stay() {
    if (acehand >= 18 || hand >= 18) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("result").style.visibility = "visible";
        playerWins();
    } else {
        document.getElementById("result").innerHTML = "You Lose...";
        document.getElementById("result").style.visibility = "visible";
        houseWins();
    }
}
function aceinhand() {
    hand += 1;
    document.getElementById("acehand").style.visibility = "visible";
    blackJack();
}
function blackJack() {
    if (hand == 21) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("result").style.visibility = "visible";
    }
}
function checkWin() {
    if (hand > 21) {
        document.getElementById("result").innerHTML = "BUST! You Lose...";
        document.getElementById("result").style.visibility = "visible";
        houseWins();
    }else if (hand >= 18 || acehand >= 18) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("result").style.visibility = "visible";
        playerWins();
    }
}
function playerWins() {
    player_score += 1;
    document.getElementById("player_score").innerHTML = player_score;
}
function houseWins() {
    house_score += 1;
    document.getElementById("house_score").innerHTML = house_score;
}

function selectcard(cardnum, card, suit) {
    switch (card) {
        case 1:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/AC.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/AD.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/AH.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/AS.png';
                    break;
            }
            aceinhand();
            break;
        case 2:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/2C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/2D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/2H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/2S.png';
                    break;
            }
            hand += 2;
            break;
        case 3:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/3C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/3D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/3H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/3S.png';
                    break;
            }
            hand += 3;
            break;
        case 4:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/4C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/4D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/4H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/4S.png';
                    break;
            }
            hand += 4;
            break;
        case 5:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/5C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/5D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/5H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/5S.png';
                    break;
            }
            hand += 5;
            break;
        case 6:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/6C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/6D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/6H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/6S.png';
                    break;
            }
            hand += 6;
            break;
        case 7:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/7C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/7D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/7H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/7S.png';
                    break;
            }
            hand += 7;
            break;
        case 8:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/8C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/8D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/8H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/8S.png';
                    break;
            }
            hand += 8;
            break;
        case 9:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/9C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/9D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/9H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/9S.png';
                    break;
            }
            hand += 9;
            break;
        case 10:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/10C.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/10D.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/10H.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/10S.png';
                    break;
            }
            hand += 10;
            break;
        case 11:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/JC.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/JD.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/JH.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/JS.png';
                    break;
            }
            hand += 10;
            break;
        case 12:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/QC.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/QD.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/QH.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/QS.png';
                    break;
            }
            hand += 10;
            break;
        case 13:
            switch (suit){
                case 0: 
                    document.getElementById(cardnum).src = 'images/KC.png';
                    break;
                case 1:
                    document.getElementById(cardnum).src = 'images/KD.png';
                    break;
                case 2: 
                    document.getElementById(cardnum).src = 'images/KH.png';
                    break;
                case 3:
                    document.getElementById(cardnum).src = 'images/KS.png';
                    break;
            }
            hand += 10;
            break;
    }
}
