
// var valuee = document.getElementById('series').value;

// console.log(valuee);
// var names = valuee;


function saveNum(value) {
    valuee = value;
    console.log(valuee);
    var series = valuee.split(',');
    var seriesNum = series.map(x => +x);
    // console.log(series);
    var getMax = Math.max(...series);
    var getMin = Math.min(...series);
    // console.log(get);
    document.getElementById('max').innerText = getMax;
    document.getElementById('min').innerText = getMin;
    document.getElementById('sum').innerText = seriesNum.reduce((a,b) => a+b);
    document.getElementById('average').innerText = seriesNum.reduce((a,b) => a+b, 0)/seriesNum.length;
    document.getElementById('reverse').innerText = series.reverse();

}