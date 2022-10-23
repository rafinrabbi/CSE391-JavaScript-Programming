function eraseText() {
    document.getElementById('textarea').value = "";
}
function capitalize() {
    var text = document.getElementById('textarea').value;
    if(text == text.toUpperCase()){
        document.getElementById('textarea').value = text.toLowerCase();
        document.getElementById('renaming-toggle').value = "Upper Case"
    }
    else{
        document.getElementById('textarea').value = text.toUpperCase();
        document.getElementById('renaming-toggle').value = "Lower Case";
    }
    
}
function sort() {
    var text = document.getElementById('textarea').value;
    document.getElementById('textarea').value = text.split('\n').sort().join('\n');
}

function reverse(){
    var text = document.getElementById('textarea').value;
    document.getElementById('textarea').value = text.split('\n').reverse().join('\n');
}

function stripBlank(){
    var text = document.getElementById('textarea').value;
    document.getElementById('textarea').value = text.split(/\s/g) 
    .filter(line => line.trim() !== "") 
    .join("\n"); 
}

function addNumber() {
    var text = document.getElementById('textarea').value;
    var arr = text.split('\n');
    var count = 1;
    arr = arr.map(i => count++ +". " + i);
    document.getElementById('textarea').value = arr.toString().split(',').join('\n');
}

function shuffle() {
    var text = document.getElementById('textarea').value;
    var arr = text.split('\n');
    arr = arr.sort(function (a, b) {
        return Math.random()-0.5;
    });
    document.getElementById('textarea').value = arr.toString().split(',').join('\n');
}