let char = "X";
let turn = 1;
let i = 0;
let area = [
    ["1" , "2" , "3"] , 
    ["4" , "5" , "6"] , 
    ["7" , "8" , "9"] ,
];
let turn_see;
document.querySelector("table").onclick=function(){
  if (i !=  8) {
    let col = event.target.cellIndex;
    let row = event.target.parentNode.rowIndex;
    turn_see = document.querySelector("p");
    let cell = event.target;
    if (area[row][col] != "X" &&  area[row][col] != "0"){
      i = i + 1;
      if (turn % 2 == 0) {
          char = "0";
          area[row][col] = "0";
          turn_see.innerHTML = "Сейчас ходят Крестики";
          checkWinner();
      }
      else {
          char = "X";
          area[row][col] = "X";
          turn_see.innerHTML = "Сейчас ходят Нолики";
          checkWinner();
      }
      turn++;
      cell.innerHTML = char;
    }
    else {
      alert("Не жульничайте)");
    }
  }
  else {
    alert("Ничья!")
    location.reload();
  }
    
};
function checkWinner() {
    if (area[0][0] == "X" && area[0][1] == "X" && area[0][2] == "X") {
      alert("Крестики Победили!");
      location.reload();
    }
    if (area[1][0] == "X" && area[1][1] == "X" && area[1][2] == "X") {
      alert("Крестики Победили!");
      location.reload();
    }
    if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {
      alert("Крестики Победили!");
      location.reload();
    }
    if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {
      alert("Крестики Победили!");
      location.reload();
    }
    if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {
      alert("Крестики Победили!");
      location.reload();
    }
    if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {
      alert("Крестики Победили!");
      location.reload();
    }
    if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {
      alert("Крестики Победили!");
      location.reload();
    }
    if (area[0][2] == "X" && area[1][1] == "X" && area[2][0] == "X") {
      alert("Крестики Победили!");
      location.reload();
    }
  
    if (area[0][0] == "0" && area[0][1] == "0" && area[0][2] == "0") {
      alert("Нолики Победили!");
      location.reload();
    }
    if (area[1][0] == "0" && area[1][1] == "0" && area[1][2] == "0") {
      alert("Нолики Победили!");
      location.reload();
    }
    if (area[2][0] == "0" && area[2][1] == "0" && area[2][2] == "0") {
      alert("Нолики Победили!");
      location.reload();
    }
    if (area[0][0] == "0" && area[1][0] == "0" && area[2][0] == "0") {
      alert("Нолики Победили!");
      location.reload();
    }
    if (area[0][1] == "0" && area[1][1] == "0" && area[2][1] == "0") {
      alert("Нолики Победили!");
      location.reload();
    }
    if (area[0][2] == "0" && area[1][2] == "0" && area[2][2] == "0") {
      alert("Нолики Победили!");
      location.reload();
    }
    if (area[0][0] == "0" && area[1][1] == "0" && area[2][2] == "0") {
      alert("Нолики Победили!");
      location.reload();
    }
    if (area[0][2] == "0" && area[1][1] == "0" && area[2][0] == "0") {
      alert("Нолики Победили!");
      location.reload();
    }
}