let favmovie="taitanic";
let guess=prompt("guess my fav movie!!");
while((guess!=favmovie)&&(guess!="quit"))
{
    guess=prompt("wrong!...try again");
}
if(guess==favmovie)
{
    console.log("congratulations!!!");
}
else
{
    console.log("u quit");
}