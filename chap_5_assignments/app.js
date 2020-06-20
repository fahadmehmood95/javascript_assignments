var num1,num2,result;
num1=3;
num2=4;
result=num1+num2;
document.write("sum of "+num1+" and "+num2+" is"+result+"<br>");

result=num1-num2;
document.write("subtraction of "+num1+" and "+num2+" is"+result+"<br>");

result=num1*num2;
document.write("multiplication of "+num1+" and "+num2+" is"+result+"<br>");
result=num1/num2;
document.write("division of "+num1+" and "+num2+" is"+result+"<br>");

document.write("<h1>Task 2 </h2> <br>");

var value;
document.write("value after declaration is "+value+ "<br>");

value=5;
document.write("value after initialaization is "+value+ "<br>");

value++;


document.write("value after increment is "+value+ "<br>");
value+=7;


document.write("value after adding 7 is "+value+ "<br>");

value--;

document.write("value after decrement is "+value+ "<br>");

value=value%3;

document.write("value reminder with 3  is "+value+ "<br>");


document.write("<h1>Task 3 </h1> <br>");

var cost=600;

document.write("Cost of 1 movie is ticket " +cost+  "<br>");
document.write("Cost of buying 5  movie is ticket " +cost*5+ "<br>");

document.write("<h1>Task 4  (Table of any number)</h2> <br>");

var num=2;
for(var table=1;table<=10;table++)
{
    document.write("2*"+table+"="+num*table+"<br>");
}

document.write("<h1>Temperature Converter</h1> <br>");

var ct=25;
var ft;


ft=(ct*9/5)+32;
document.write(+ct+"C is "+ft+"F"+"<br>");

var ft=70;

ct=(ft-32)*5/9;

document.write(ft+"F is "+ct+"C  <br>" );

document.write("<h1>shopping cart</h1> <br>");


var item1=650;
var item2=100;
var order_quantity_1=3;
var order_quantity_2=7;


var total_Cost=item1*order_quantity_1+item2*order_quantity_2+100;


document.write("price of item 1 is :"+item1+"<br>");
document.write("Quantitiy of item 1 is :"+order_quantity_1+"<br>");
document.write("price of item 2 is :"+item2+"<br>");
document.write("Quantitiy of item 1 is :"+order_quantity_2+"<br>");
document.write("Total shopping cost is :"+total_Cost+"<br>");

document.write("<h1>marksheet</h1> <br>");
var total_marks=980;
var marks_got=804;
var per=marks_got/total_marks;


document.write("Total marks "+total_marks+ "<br>");
document.write("MArks obtained "+marks_got+ "<br>");
document.write("percentage "+per+ "<br>");

document.write("<h1>Currency in Pkr</h1> <br>");

var dollers=10;
var riyals=25;

var pkr=10*104.80+25*28;
document.write("Total Currency in PKR is:"+pkr+ "<br>");


document.write("<h1>Number expression </h1> <br>");

var num;

num+=5*10/2;
document.write("Number after calculating in 1 expression "+num+ "<br>");


document.write("<h1>Age calculator </h1> <br>");
var current_year=2020;
var birth_year=1995;
var birth=birth_year;
var age=0;
while(birth_year!=current_year)
{
age++;
birth_year++;

}
document.write("Current year :"+current_year+ "<br>");
document.write("birth year :"+birth+ "<br>");
document.write("Age is :" +age+ "<br>");


document.write("<h1>. The Geometrizer </h1> <br>");

var radius=20;

document.write("Radius is :"+radius+ "<br>");
document.write("Circumferrence is  :"+2*3.142*radius+ "<br>");
document.write("Area is  :"+3.142*radius*radius+ "<br>");


document.write("<h1>The Lifetime Supply Calculator </h1> <br>");
var snacks="lays";
var Age=20
var max_age=70;
var amount=2;
var cal;

cal=50*311;

document.write("i would eat "+cal+" lays for the rest of my life if live unitl 70");
