//background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "black";
} 
changeBackgroundColor();



//time
function showTxtClock() {
    var showDate = new Date();

    var daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"];
    var dayOfWeek = showDate.getDay();
    var formattedDay = daysOfWeek[dayOfWeek];

    var formattedTime = showDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute:'2-digit',  
        second: '2-digit', 
        hour12: true
    });

    document.getElementById("txtClock").innerHTML = formattedTime + " " + formattedDay +"day";
    
    setTimeout(showTxtClock, 1000);
}  
window.onload = showTxtClock;



//move & style time
function styleClock() {
    var txtClock = document.getElementById("txtClock");
    txtClock.style.backgroundImage= "linear-gradient(360deg, gray, black)";
    txtClock.style.right = "0";
    txtClock.style.left = "0";
    txtClock.style.margin = "0 auto";
    txtClock.style.top = "5%";
    txtClock.style.width = "90%";
    txtClock.style.height = "60%";
    txtClock.style.borderRadius = "20px";
    txtClock.style.border = "10px double yellow";
    txtClock.style.fontSize = "10vw";
    txtClock.style.fontFamily = "Arial, sans-serif";
    txtClock.style.textAlign = "center";
    txtClock.style.color = "white";
    txtClock.style.paddingTop = "3%";
}
styleClock();




    


















    

    






    





    






