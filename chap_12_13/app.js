






    document.write("<h1>Task</h1>");

    var variable = prompt("Enter any number or variable");
    if (variable >= 65 && variable <= 90) {

        document.write("  it is uppercase letter <br>");


    }
    if (variable >= 97 && variable <= 122) {
        document.write("  it is lowercase letter <br>");
    }

    if (variable >= 48 && variable <= 57) {
        document.write("  it is an number <br>");
    }

    document.write("<h1>Task 2</h1>");

    var num1, num2 = prompt("Enter numbers to compare \n");
    if (num1 > num2) {
        document.write(" number 1 is bigger");
    }

    if (num1 < num2) {
        document.write(" number 2 is bigger");
    }
    else {
        document.write(" both are equal");

    }
    document.write("<h1>Task 3</h1>");

    var check = prompt("Enter any number\n");
    if (check >= 1) {
        document.write(" number is positive <br>");
    }
    if (check < 0) {
        document.write(" number is negative <br>");
    }
    else {
        document.write(" number is 0 <br>");
    }

    document.write("<h1>Task 4</h1>");

    var char = prompt("Enter any character \n");

    if (char === 'a' || char === 'o' || char === 'e' || char === 'u' || char === 'i') {
        document.write("Character is Vowel <br>");
    }


    document.write("<h1>Task 5</h1>");

    var pass = prompt("Enter an password \n");
    var c_pass = "fahad";

    if (pass === null) {
        alert("Enter your password please \n");
    }
    if (pass === c_pass) {
        alert("The password you enter is correct password \n");

    }
    else {
        alert("wrong password \n");

    }

    document.write("<h1>Task 6</h1>");


    var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else
{
greeting = "Good evening";
alert(greeting);
}

document.write("<h1>Task 7</h1>");

var time=prompt("Enter time in 24 hours  liker 00:00 \n");

if(time=="00:00")
{
    document.write("its 12 AM");

}
if(time=="2300")
{
    document.write("its 11 PM");

}
if(time=="2200")
{
    document.write("its 10 PM");

}
if(time=="2100")
{
    document.write("its 9 PM");

}
if(time=="2000")
{
    document.write("its 8 PM");

}
if(time=="1900")
{
    document.write("its 7 PM");

}
if(time=="1800")
{
    document.write("its 6 PM");

}
if(time=="1700")
{
    document.write("its 5 PM");

}
if(time=="1600")
{
    document.write("its 4 PM");

}
if(time=="1500")
{
    document.write("its 3 PM");

}
if(time=="1400")
{
    document.write("its 2 PM");

}
if(time=="1300")
{
    document.write("its 1 PM");

}
if(time=="1:00")
{
    document.write("its 1 AM");

}
if(time=="2:00")
{
    document.write("its 2 AM");

}
if(time=="3:00")
{
    document.write("its 3 AM");

}
if(time=="4:00")
{
    document.write("its 4 AM");

}
if(time=="5:00")
{
    document.write("its 5 AM");

}
if(time=="6:00")
{
    document.write("its 6 AM");

}
if(time=="7:00")
{
    document.write("its 7 AM");

}
if(time=="8:00")
{
    document.write("its 8 AM");

}
if(time=="9:00")
{
    document.write("its 9 AM");

}
if(time=="10:00")
{
    document.write("its 10 AM");

}
if(time=="11:00")
{
    document.write("its 11 AM");

}