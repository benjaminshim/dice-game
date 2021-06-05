var button = document.querySelector("button");

button.onclick = function roll(){
  var one = 0;
  var two = 0;

  function aler(){
    for (var i = 0; i < 30; i++){
      setTimeout(function() {
        one = Math.floor(Math.random() * 6) + 1;
        two = Math.floor(Math.random() * 6) + 1;
        document.querySelector("img.img1").setAttribute("src", "images/dice" + one + ".png");
        document.querySelector("img.img2").setAttribute("src", "images/dice" + two + ".png");
      }, 90 * i);
    }
  }

  aler();

  setTimeout(function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").textContent = "Draw...";
    }
  }, 2701);
}
