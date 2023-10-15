
let body=document.querySelector("body");
var randomno=random(100);
let inputValue=document.getElementById("input");
let chance=document.getElementsByClassName("chance1");
let highscore=document.getElementsByClassName("highscore1")
let Massage=document.getElementsByClassName("changetext")
let Qst=document.getElementsByClassName("Qstmark")


function reset(){
  count=100;
  Massage[0].innerText="Start guessing..."
  chance[0].innerText=`${count}`;
  inputValue.value=null;
  body.style.backgroundColor="lightgrey";
  randomno= random(100);
  Qst[0].innerText="?";
//  console.log(ran);
console.log(randomno);

}


function random(n){
return Math.floor((Math.random()*n))+1;
}
console.log(randomno);
count=100;

function check(){
    let ans=parseInt(inputValue.value);
    console.log(parseInt(inputValue.value));
    
   
 if(ans>randomno){
   Massage[0].innerText="Your Guess is High.."
   count--;
   chance[0].innerText=`${count}`;
 }

 else if(ans<randomno){
    Massage[0].innerText="Your Guess is Low.."
    count--;
    console.log(count);
    chance[0].innerText=`${count}`;
  }

else{
    Massage[0].innerText="Hurray You Won!!.."
    count--;
    Qst[0].innerText=randomno;
   chance[0].textContent=`${count}`;
   highscore[0].innerText=count;
   body.style.backgroundColor="green";
   
}
if(count===0){
  Qst[0].innerText=randomno;
}
}


