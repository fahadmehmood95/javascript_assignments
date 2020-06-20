

var city=prompt("Enter the name of city \n" );

if(city==="karachi")
{
    document.write("Welcome to the city of lights");
}


document.write("<h1>Task 2</h1>");

var gender=prompt("Enter gender of city \n" );

if(gender==="male")
{
    document.write("good morning sir");

}
if(gender==="female")
{
    document.write("good morning mam");

}
document.write("<h1>Task 3</h1>");

var color=prompt("Enter Traffic signal color of city \n" );

if(color==="red")
{
    document.write("Must stop");

}
else if(color=="yellow")
{
    document.write("ready to move");
}
else if(color==-"red")
{
    document.write("move now")
}


document.write("<h1>Task 3</h1>");

var fuel=prompt("Enter feul remaning of car in (liters) \n" );
if(fuel<0.25)
{
    document.write("please refill the car <br>");
}


document.write("<h1>Task 4</h1>");

var subject_1 ,subject2,subject3=prompt("Enter marks of 3 subjects");

var total_marks=300;

var result;
var grade;
result=subject2+subject3+subject_1;
var percentage=result/total_marks;
if(percentage>=80)
{
grade="A-one";
}
if(percentage>=70)
{
grade="A";
}
if(percentage>=60)
{
grade="B";
}
if(percentage<60)
{
grade="fail";
}
document.write("Total marks : "+total_marks+" <br>");
document.write("marks obtained : "+result+" <br>");
document.write("percentage : "+percentage+" <br>");
document.write("grade : "+grade+" <br>");

document.write("<h5>guess game</h5> <br>");

var secret_number=6;

var guess_number=prompt("Enter number to guess the secret number \n");

if(secret_number===guess_number)
{
    document.write("Bingo you guess the correct number <br>");
}

if(guess_number===secret_number+1)
{
    document.write("you are close enough ! <br>");
}

document.write("<h5>division_check</h5> <br>");
var division_check=prompt("Enter number to check whether it is divisible by 3 or not");

if(division_check%3==0)
{
    document.write("Number is divisble by 3");
}



document.write("<h5>Tempreature check</h5> <br>");

var t=prompt("Enter tempreature to check the whether ");
if(t>40)
{
    document.write("It is too hot outside.<br>"); 
}

if(t>30)
{
    document.write("The Weather today is Normal..<br>"); 
}

if(t>20)
{
    document.write("The Weather today is cool..<br>"); 
}

if(t>10)
{
    document.write(" OMG !The Weather today is cool..<br>"); 
}


document.write("<h5>Calulator</h5> <br>");
var result
var number1=prompt("Enter number 1 \n");

var sign=prompt("Enter sign  \n");
var number2=prompt("Enter number 2 \n");

if(sign==='+')
{
   document.write( result=number1+number2);
}
if(sign==='-')
{
   document.write( result=number1-number2);
}

if(sign==='*')
{
   document.write( result=number1*number2);
}

if(sign==='/')
{
   document.write( result=number1/number2);
}

if(sign==='%')
{
    document.write( result=number1%number2);
}