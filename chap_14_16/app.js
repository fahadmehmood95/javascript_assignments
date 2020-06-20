document.write("<h1>Task 1<h1>");
//literal notation array//

//var numbers=[];
//object notation array//
var arr=new Array();
//String array//
var strings=["fahad","mehmood","meer"];
//numbers array//
var nums=[1,3,4,5,6];
//boolean array//
var  boolea_array=[true,false,true];

var mixed_array=["fahad",3,"33",4,false];
var qualifications=["SSC","HSC","BCS","BS","B.COM","MS","M-PHIL","PHD"];
for(var i=0;i<=qualifications.length-1;i++)
{



    document.write(qualifications[i]+"<br>");
}

document.write("<h1>Task 2<h1>");
var student_name=["fahad","saad","khalid"];
var score=[74,88,55];
var total_marks=500;
for(var i=0;i<student_name.length;i++)
{

    document.write("Score of "+student_name[i] +" is "+score[i]+ " percentage  "+score[i]/total_marks+" <br>");

}


document.write("<h1>Task 3<h1>");

var colors=["black","green","blue","white","yellow"];


for(var i=0;i<colors.length;i++)
{
document.write("colors["+colors[i]+"] <br>");
}

var get_color=prompt("Which color do you want to add at the start? <br>");


colors.unshift(get_color);

document.write("_______________________________________ <br>");
for(var i=0;i<colors.length;i++)
{
document.write("colors["+colors[i]+"] <br>");
}
get_color=prompt("Which color do you want to add at the the? <br>");

colors.push(get_color);

document.write("_______________________________________ <br>");

for(var i=0;i<colors.length;i++)
{
document.write("colors["+colors[i]+"] <br>");
}
colors.unshift("pink","red");

for(var i=0;i<colors.length;i++)
{
document.write("colors["+colors[i]+"] <br>");
}
colors.shift();
for(var i=0;i<colors.length;i++)
{
document.write("colors["+colors[i]+"] <br>");
}
colors.pop();
for(var i=0;i<colors.length;i++)
{
document.write("colors["+colors[i]+"] <br>");
}

var position ,get_color=prompt("Which color do you want to add at the which position? <br>");
colors.splice(position,get_color);
for(var i=0;i<colors.length;i++)
{
document.write("colors["+colors[i]+"] <br>");
}
var _color_position, index=prompt("how many color do you want to delete and at at the which position? <br>");
colors.splice(index,_color_position);
for(var i=0;i<colors.length;i++)
{
document.write("colors["+colors[i]+"] <br>");
}

document.write("<h1>Sorting</h1>");

var scores_student=[223,55,1,667,22];

for(var i=0;i<colors.length;i++)
{
document.write("Array before sorting "+scores_student[i]);
}

scores_student.sort();
for(var i=0;i<colors.length;i++)
{
document.write("Array after sorting "+scores_student[i]);
}


document.write("<h1>City names</h1>");

var city_names=["karachi","lahore","rawalpindi","multan"];
var selected_cities=city_names.slice(1,3);

for(var i=0;i<selected_cities.length;i++)
{
    document.write(selected_cities);
}


document.write("<h1>join megthod</h1>");
var arr=["this ","is","fahad","mehmood"];
var stg;
stg=arr.join();

document.write(stg);
