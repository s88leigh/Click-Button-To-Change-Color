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

//Demo 4: switch statement
function clicked() {
    var text = document.getElementById("Inp2").value;

    switch (text) {
        case "red": 
            document.getElementById("rectangle").style.backgroundColor="red";
            break;
        case "blue":
            document.getElementById("rectangle").style.backgroundColor="blue";
            break;
        case "green":
            document.getElementById("rectangle").style.backgroundColor="green";
            break;
        case "yellow":
            document.getElementById("rectangle").style.backgroundColor="yellow";
            break;
        case "purple":
            document.getElementById("rectangle").style.backgroundColor="purple";
            break;
        case "orange":
            document.getElementById("rectangle").style.backgroundColor="orange";
            break;
        default: 
            document.getElementById("rectangle").style.backgroundColor="white";
        break;
        
    }
}
// Demo 5: If, Else If, Else Statement
function submit() { 
    var text = parseInt(document.getElementById("inp").value);
    var output = document.getElementById("output");
   
    if (text > 21) {
        output.innerHTML = "You are over 21. Please drink responsibly!";
    } else if (text == 21) {
        output.innerHTML = "You are 21. Please drink responsibly!"
    }
    else{
        output.innerHTML = "Sorry, You are NOT of legal drinking age";
    }
}
