function testString(el, text){
    resultDiv = document.getElementById(el);
    console.log(resultDiv);
    resultDiv.innerHTML = text;
}

function testString1(){
    document.getElementById("div1").innerHTML = "";
    div = document.getElementById("div1");
    text = document.getElementById("text").value;
    div.innerHTML = text;
}

function dialogWindow(){
    //alert();
    conf = confirm();
    console.log(conf);
    resultDiv = document.getElementById("div3");
    if(conf==true){
        resultDiv.innerHTML = "It is " + conf;
    }
    else if(conf == false){
        resultDiv.innerHTML = "It is " + conf;
    }
    pro = prompt("Put something here");
    div = document.getElementById("div4");
    if(pro = null){
        div.innerHTML = "There was nothing in input";
    }
    else{
        div.innerHTML = pro;
    }
    
}