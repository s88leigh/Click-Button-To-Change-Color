//Demo 1
var div = document.getElementById("box");
function pink() {
    div.setAttribute("id","pink");
}
function blue() {
    div.setAttribute("id","blue");
}

function reset() {
    div.setAttribute("id", "white");
}

//Demo 2
function green() {
     document.getElementById("demo").style.color="green";
}
function red() {
    document.getElementById("demo").style.color="red";
}
function black() {
    document.getElementById("demo").style.color="black";
}

//Demo 3: If, else statement
function Pressed() {
    var text = document.getElementById("Inp1").value;

    if (text==="red"){
        document.getElementById("square").style.backgroundColor="red";
    }
    else if (text==="blue"){
        document.getElementById("square").style.backgroundColor="blue";
    }
    else if (text==="green"){
        document.getElementById("square").style.backgroundColor="green";
    }
    else if (text==="yellow"){
        document.getElementById("square").style.backgroundColor="yellow";
    }
    else if (text==="purple"){
        document.getElementById("square").style.backgroundColor="purple";
    }
    else if (text==="orange"){
        document.getElementById("square").style.backgroundColor="orange";
    }
    else {
        document.getElementById("square").style.backgroundColor="white";
    }
}