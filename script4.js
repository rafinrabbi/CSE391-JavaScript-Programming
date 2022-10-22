function eraseText() {
    document.getElementById('textarea').value = "";
}
function capitalize() {
    var text = document.getElementById('textarea').value;
    document.getElementById('textarea').value = text.toUpperCase();
}
function sort() {
    var text = document.getElementById('textarea').value;
    // console.log(text);
    document.getElementById('textarea').value = text.split('\n').sort().join('\n');
}

function reverse(){
    var text = document.getElementById('textarea').value;
    // console.log(text);
    document.getElementById('textarea').value = text.split('\n').reverse().join('\n');
}

function stripBlank(){
    var text = document.getElementById('textarea').value;
    document.getElementById('textarea').value = text.split(/\r?\n/) 
    .filter(line => line.trim() !== "") 
    .join("\n"); 
}

function addNumber() {
    var text = document.getElementById('textarea').value;
    var arr = text.split('\n');
    arr = arr.map(i => Math.floor(Math.random()*10+1).toString() +" " + i);
    document.getElementById('textarea').value = arr.toString().split(',').join('\n');
}

function shuffle() {
    var text = document.getElementById('textarea').value;
    var arr = text.split('\n');
    arr = arr.sort(function (a, b) {
        return Math.random()-0.5;
    });
        
    console.log(arr)
    document.getElementById('textarea').value = arr.toString().split(',').join('\n');
}