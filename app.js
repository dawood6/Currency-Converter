
function check() {
    var x;
    x = document.getElementById('moneyInput').value;
    if(isNaN(x) || x <= 0) {
        window.alert("Enter your amount");
    }
    else {
        var num;
        num = x / 154.38;
        document.getElementById('dollar').value = Math.ceil(num)
        num = x / 200.56;
        document.getElementById('pound').value = Math.ceil(num)
        num = x / 41.15;
        document.getElementById('riyal').value = Math.ceil(num)
        num = x / 42.03;
        document.getElementById('dirham').value = Math.ceil(num)
    }
}


function myFunction(){
	document.body.style.backgroundColor = "black";
    document.getElementById("before").src = "dark2.jpg";
    document.getElementById("moneyInput").style.backgroundColor = "black";
    document.getElementById("dollar").style.backgroundColor = "black";
    document.getElementById("pound").style.backgroundColor = "black";
    document.getElementById("riyal").style.backgroundColor = "black";
    document.getElementById("dirham").style.backgroundColor = "black";    
}
