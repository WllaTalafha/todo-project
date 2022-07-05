var userName = prompt ("what is your name ?");
console.log ("user name is",userName);

var userGender = prompt ("what is your gender (male/female)?");
console.log ("user gender is",userGender);

var userAge = prompt ("what is your age ?");
console.log ("user gender is",userAge);

if(userAge<=0)
{
   alert("the age is less than or equal to zero");
   console.log ("the age is less than or equal to zero");
}

var userAnswer = confirm ("do you want to skip the welcoming message?");
console.log("skipping the welcoming message?",userAnswer);
if (!userAnswer)
{
if(userGender==="male")
{
    alert("welcome to my page Mr "+userName);
}
else if(userGender==="female")
{
    alert("welcome to my page Ms "+userName);
}
else 
{
    alert("welcome to my page "+userName);
}
}


    var firstQuestion = prompt ("do you want pizza?(yes/no)");
    console.log ("wants pizza? ",firstQuestion);

    var secondQuestion = prompt ("are you ok?(yes/no)");
    console.log ("he-she is ok? ",secondQuestion);
    
    var thirdQuestion = prompt ("can we be friends?(yes/no)");
    console.log ("being friends? ",thirdQuestion);

    if (firstQuestion==="")
    {
        firstQuestion="invalid";
    }

    else if (secondQuestion==="")
    {
        secondQuestion="invalid";
    }

    else if (thirdQuestion==="")
    {
        thirdQuestion="invalid";
    }
        
    let arr=[];
    arr.push(firstQuestion);
    arr.push(secondQuestion);
    arr.push(thirdQuestion);

    for (var i=0 ; i<arr.length ; i++)
    {
        console.log(arr[i]);
    }

