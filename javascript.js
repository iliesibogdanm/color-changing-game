var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var random = Math.floor(Math.random() * colors.length);
var colorDisplay = document.getElementById("colorDisplay");
var title = document.querySelector(".title");
var rightWrongText = document.querySelector(".rightWrongText");
var reset = document.querySelector(".reset");
var buttons = document.querySelectorAll(".btn");
init();
function init(){
    setupButtons();
    setupSquares();
    resetFCT();
}
function resetFCT(){
    colors = generateRandColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0;i<squares.length;i++){
    if(colors[i]){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
    } else {squares[i].style.display="none";
        }
    }
        reset.textContent = "New Colors"
        title.style.backgroundColor =  "steelblue";
        rightWrongText.textContent = "Pick a color";
}
reset.addEventListener("click",function(){
    resetFCT();
}) 
function changeColors(color){
    //loop through all squares 
    for (var i = 0 ; i< squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0 ;i <num;i++){
        //get random color and push into array
        arr.push(randColor());
    }
    //return array
    return arr;
}
function randColor(){
    //pick a 'red' from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a 'green' from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a 'blue' from 0 to 255
    var b = Math.floor(Math.random() * 256);

    //rgt(r, g, b)
    return "rgb("+ r + ", " + g + ", " + b + ")";
}
function setupButtons(){
    for(var i = 0 ; i < buttons.length;i++){
        buttons[i].addEventListener("click",function()
        {
            buttons[0].classList.remove("selected");
            buttons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares=6;
            resetFCT();
        });
    }
}
function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to square
        squares[i].addEventListener("click",function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if( clickedColor == pickedColor ){
                title.style.backgroundColor =  pickedColor;
                changeColors(clickedColor);
                rightWrongText.textContent = " Correct!";
                reset.textContent = "Play again!";
            }else{
                this.style.backgroundColor = "rgb(36, 110, 110)";
                rightWrongText.textContent = " Wrong!";
            }
        });
    } 
}