function testNumber1(){
    rs = document.getElementById("result1");
    rs.innerHTML = Number.MAX_VALUE;
    rs.innerHTML += "</br>";
    rs.innerHTML += Number.MIN_VALUE;
}

function testNumber2(){
    return (Math.round(Math.random()*11));
}

function testNumber3(a,b){
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function testNumber4(a,b,c){
    return Math.max(a, b, c) - Math.min(a, b, c);
}

function testNumber5(a,b){
    if(b = 1){
        a = Math.ceil(a)
    }
    else if(b = 2){
        a = Math.ceil(b)
    }
    alert(a);
}