
var valuee;

function saveValue (value) {
    valuee = value;
}
function submit (){
    if (document.getElementById('unit').value == "lb to kg" ){
        document.getElementById('result').innerText = valuee*0.4536;
            console.log(document.getElementById("input1").value);
    }
    else if (document.getElementById('unit').value == "kg to lb" ){
        document.getElementById('result').innerText = valuee*2.2046;
        console.log(document.getElementById("input1").value)
    }
}
