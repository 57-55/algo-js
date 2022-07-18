let notFortyTwo = true;
while(notFortyTwo)
{
    let a = prompt("What's your favorite number?");
    notFortyTwo = Number(a) !== 42;
    if(notFortyTwo)
    {
        console.log("Are you sure? Start again!");
    }
}