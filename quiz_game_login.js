score =0;
function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "Score:" + score;
}

function saveScore()
{
    localStorage.setItem("score", score);
}

function nextPage() {

   window.location = "activity_2.html";
}

function send() {
    
}

function addUser() {
   player1_name = document.getElementById("player1_name_input").value;
   player2_name = document.getElementById("player2_name_input").value;
   localStorage.setItem("player1_name",player1_name);
   localStorage.setItem("player2_name", player2_name);
    window.location = "quiz_game_page.html";
}

