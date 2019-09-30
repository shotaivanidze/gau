function textTransform(){
    document.getElementById("first").style.fontStyle = "italic";
    document.getElementById("first").style.fontWeight = "bold";
    document.getElementById("first").style.textDecoration = "underline";
    setTimeout(
        function() {
            document.getElementById("first").removeAttribute("style");
        }, 1000
    );
}

function numbersSum(){
    var numbers = prompt("Enter your numbers SEPARATED BY SPACE");
    var array = numbers.split(" ").map(
        function(item){
            return parseInt(item, 10);
        }
    );
    alert("Sum = " + array.reduce((a, b) => a+b, 0));
}

function fontSize(){
    var number = prompt("Enter font size number with desired unit. Example: 25px or 2em");
    document.getElementById("third").style.fontSize = number;
    setTimeout(
        function() {
            document.getElementById("third").removeAttribute("style");
        }, 2000
    );
}

function tableWidth(){
    var number = prompt("Enter table width with desired unit. Example: 200px or 20em");
    document.getElementById("firstTable").style.width = number;
}

function tableHeight(){
    var number = prompt("Enter table height with desired unit. Example: 200px or 20em");
    document.getElementById("secondTable").style.height = number;
}

function tableHeightWidth(){
    var number = prompt("Enter table width and height, only number.(SEPARATED BY SPACE)");
    var array = number.split(" ").map(
        function(item){
            return parseInt(item, 10);
        }
    );
    document.getElementById("thirdTable").style.width = array[0] + "px";
    document.getElementById("thirdTable").style.height = array[1] + "px";
}