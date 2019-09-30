function testNumber1(){
    rs = document.getElementById("result1");
    rs.innerHTML = Number.MAX_VALUE;
    rs.innerHTML += "</br>";
    rs.innerHTML += Number.MIN_VALUE;
}

function testNumber2(){
    return (Math.round(Math.random()*11));
}

