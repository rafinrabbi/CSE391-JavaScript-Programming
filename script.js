window.onload = function name(){
    fetch("/quotes.json").then(function (response){
        return response.json();
    }).then(function (data){
        document.getElementById('demo').innerText = data.quotes[Math.floor(Math.random()*100)].quote;
    })
}

function blue() {
    document.getElementById('demo').style.backgroundColor = "#051650";
    document.getElementById('demo').style.borderColor = "orange";
    document.getElementById('demo').style.fontFamily = "monospace";
    document.getElementById('demo').style.color = "white";
}

function red() {
    document.getElementById('demo').style.backgroundColor = "#9b0f2e";
    document.getElementById('demo').style.borderColor = "black";
    document.getElementById('demo').style.fontFamily = "Helvetica";
    document.getElementById('demo').style.color = "white";
}

function green() {
    document.getElementById('demo').style.backgroundColor = "#006e1f";
    document.getElementById('demo').style.borderColor = "black";
    document.getElementById('demo').style.fontFamily = "monospace";
    document.getElementById('demo').style.color = "whitesmoke";
}

function black() {
    document.getElementById('demo').style.backgroundColor = "#000000";
    document.getElementById('demo').style.borderColor = "red";
    document.getElementById('demo').style.fontFamily = "sans-serif";
    document.getElementById('demo').style.color = "white";
}