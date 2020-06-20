document.write("<h1>Task 1</h1>");
var a=10;
document.write("The value of a is :"+a+"<br>");

document.write("The value of ++a is 11 <br>");
++a;
document.write("Now the value of a is :"+a+"<br>");
document.write("The value of a++ is : 11 <br>");
a++;
document.write("Now the value of a is :"+a+"<br>");
document.write("The value of --a is : 11 <br>");
--a;
document.write("now the  value of a is : "+a+" <br>");
document.write("Now the value of a-- is :11<br>");
a--;
document.write("The value of a is :"+a+"<br>");




document.write("<h1>Task 2</h1>");
var a=2,b=1;
var result;
result=--a - --b + ++b + b--;
document.write(result);
document.write("--a =1 <br> --a - --b =1-0=1 <br> --a - --b + ++b=1-0+1=2 <br> --a - --b + ++b + b--=1-0+1+1+0=3 <br>");
document.write("result"+result);

document.write("<h1>Task 3 Take input from user</h1> <br>");
var input=prompt("Enter any thing in a variable \n");
document.write("You enterd this is variable :"+input+"<br>");


document.write("<h1>Task 4</h1>");
var num=prompt("Enter any number to genetate the table \n");
if(num==0 ||  num==null )
{
    num=5;
}
for(var i=1;i<=10;i++)
{
    document.write(num+"*"+i+"="+num*i+"<br>");


}


document.write("<h1>Task 5</h1>");
var subject_1=prompt("Enter subject 1 \n");
var subject_2=prompt("Enter subject 2 \n");
var subject_3=prompt("Enter subject 3 \n");
var total_marks=100;

var m_subject_1=prompt("Enter obtained marks subject 1 \n");
var m_subject_2=prompt("Enter  obtained marks subject 2 \n");
var m_subject_3=prompt("Enter  obtained marks subject 3 \n");

var percentage_subject_1=m_subject_1/100;
var percentage_subject_1=m_subject_2/100;
var percentage_subject_1=m_subject_3/100;

