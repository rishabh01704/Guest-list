function submit()
{
    nameofthestudentarray=[];
    for (var j=1;j<=4;j++)
    {
      var nameofthestudent=document.getElementById("name_of_the_student"+j).value;
      console.log(nameofthestudent);
      nameofthestudentarray.push(nameofthestudent);
    }
    console.log(nameofthestudentarray);
    var lengthofnameofstudentarray=nameofthestudentarray.length;
    console.log(lengthofnameofstudentarray);
    for (var k=0;k<lengthofnameofstudentarray;k++)
    {displaystudentarray.push("<h4>NAME-"+nameofthestudentarray[k]+"</h4>")
      console.log(displaystudentarray);
    }
      
document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
var removecommas=displaystudentarray.join("");
document.getElementById("display_name_without_commas").innerHTML=removecommas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
