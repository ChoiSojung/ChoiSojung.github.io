
function button() {
document.getElementById("myBtn").style.display = "block";
    
}

button();

// When the user clicks on the button, show date/time stamp
function dateStamp() {
    var d = new Date();
    alert(d);
    document.getElementById("date").innerHTML =d;
}



