//----roll dice 1
let roll1 = Math.ceil(Math.random()*6);
let imageScource1 = "images/dice" + roll1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",imageScource1);

//-----roll dice 2
let roll2 = Math.ceil(Math.random()*6);
let imageScource2 = "images/dice" + roll2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",imageScource2);


//----------use for each on the nodeList ----------------
// let dice = document.querySelectorAll(".dice img");
// let roll = dice.forEach((d)=>(d.setAttribute("src","/images/dice1.png")))

//--------h1 tag update
let h1 = document.querySelector("h1")
if(roll1 > roll2){
    h1.innerHTML = "🚩Player1 Wins!"
}
else if( roll1 < roll2){
    h1.innerHTML = "Player2 Wins!🚩"
}
else{
    h1.innerHTML = "Draw!"
}

//----------Toss Dise that reload page
document.getElementById("refresh").addEventListener("click" , function () { location.reload();} );
// document.getElementById("reset").addEventListener("click" , function () {document.body.rest()} );
