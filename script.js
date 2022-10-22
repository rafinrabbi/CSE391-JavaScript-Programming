window.onload = function name(){
    fetch("/quotes.json").then(function (response){
        return response.json();
    }).then(function (data){
        document.getElementById('demo').innerText = data.quotes[Math.floor(Math.random()*100)].quote;
    })
}

