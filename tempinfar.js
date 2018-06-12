
 



document.write(Date());

var tempfar = prompt("Enter the Temp in fahrenheit");
document.getElementById("fahrenheit").innerHTML = "You Entered " + tempfar + " <sup>0</sup>F    fahrenheit";


var total = parseFloat( ( tempfar - 32 ) /1.8 ) ;
document.getElementById("celsius").innerHTML = "   After Converstion" + total +" <sup>0</sup>C  celsius";