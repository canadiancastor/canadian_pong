//Canadian pong by Alexandre D'Amours
//Setting up blocker position (global variables)
var blocker_x = 10;
var blocker_y = 0;

window.onload = function() {
    //Setting up the moving box (the ball)
    var box = document.getElementById("box");
    var box_x = 10;
    var box_y = 0;
    var box_speed_x = Math.random() * 3;
    var box_speed_y = Math.random() * 3;

    //Setting up the blocker
    var blocker = document.getElementById("blocker");

    //Setting up the container
    var container = document.getElementById("container");
    var max_x = container.offsetWidth - box.offsetWidth;
    var max_y = container.offsetHeight - box.offsetHeight;

    //Looping
    var t = setInterval(move, 10);
    
    function move(){
        //Update blocker position
        blocker.style.top = blocker_y+"px";

        //Update box position
        //If box hits a vertical wall, inverse x component of speed
        if(box_x >= max_x || box_x < 0){box_speed_x *= -1}
        //If box hits the blocker, inverse x component of speed
        if(box_x < 10 && (box_y >= blocker_y && box_y <= blocker_y + 50 - 10)){
            box_speed_x *= -1
        }
        //If box hits a horizontal hall, inverse y component of speed
        if(box_y >= max_y || box_y < 0){box_speed_y *= -1}

        box_x += box_speed_x;
        box_y += box_speed_y;
        box.style.left = box_x+"px";
        box.style.top = box_y+"px"; 
        
        //End of game
        if(box_x < 2) {
            clearInterval(t);
            alert("End of game");
    }
    }
}

function blocker_up() {
    if(blocker_y > 0){
        blocker_y -= 10;
    }
}

function blocker_down() {
    if(blocker_y < 150){
        blocker_y += 10;
    }
}
