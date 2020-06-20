var multi_array=[3][4];

var arr=[3][4];
[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];



document.write("<h1>Task 2 numeric counting<h2> <br>" );


for(var i=1;i<=10;i++)
{
    document.write(i+"<br>");

}
//var table=prompt("Enter table \n");
//var length=prompt("Enter length \n");
for(var i=1;i<=length;i++)
{
    document.write(table+"*"+i+"="+table*i+"<br>");
}


document.write("<h1>Task 3 array index<h1> <br>" );

var fruits=["apple","banana","mango","orange","stawberry"];


for(var i=0;i<fruits.length;i++)
{
    document.write("element at index "+i+" is "+fruits[i]+"<br>");
}


document.write("<h1>generating outputs<h1> <br>" );
for(var i=1;i<=15;i++)
{
    document.write(""+i);
}
document.write("<br>");
for(var i=10;i>=1;i--)
{ 
    document.write(""+i+"");
}
document.write("<br>");

for( var i=0;i<=20;i++)
{
   document.write(""+i+"");
   i++;
}
document.write("<br>");
for(var i=1;i<20;i++)
{
    document.write(""+i+"");
    i+2;
}
document.write("<br>");
for(var i=2;i<=20;i++)
{
    document.write(""+i+"K");
    i++;
}
document.write("<br>");


document.write("<h1>Bakery.....<h2> <br>")


//var item=prompt("Enter item to buy from bakery \n");
//var  flag=false;
///var bakery=["bread","eggs","pastries","milk","cake"];

//for(var i=0;i<bakery.length;i++)
//{
  //  if(item===bakery[i])

    //{
      //  document.write("Yes this "+item+" exist on index "+i+"<br>");
        //flag=true;


    //}


   
    
//}

//if(flag==false)
//{
  //  document.write("Sorry this item does not exist");
//}



document.write("<h1>largest number.....<h2> <br>");
var largest=0;

var arr=[2,3,4,6,7,3];

for(var i=0;i<arr.length;i++)
{
    if(arr[i]<arr[i+1])
    {
        largest=arr[i+1];

    }
  

    
}
document.write("largest number in array is "+largest+"<br>");

document.write("<h1>Smallest number.....<h2> <br>");
var Smallest=0;
var arr=[5,3,4,6,7,3];
Smallest=arr[0];


for(var i=1;i<arr.length;i++)
{
    if(Smallest>arr[i])
    {
        Smallest=arr[i];

    }
  

    
}
document.write("smallest number in array is "+Smallest+"<br>");

document.write("<h1>Multiple of 5.....<h2> <br>");

var num=5;
for(i=1;i<=20;i++)

{
 document.write(" " + num*i);
}