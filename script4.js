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