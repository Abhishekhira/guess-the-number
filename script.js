let secretNumber=Math.trunc(Math.random()*20)+1
let score=20
let highScore=0
const message=function (msg) {
    document.getElementById(message).textContent=msg
    
}
let playerName;
document.getElementById('sub').addEventListener('click', function () {
    playerName=document.getElementById('player').value
    document.getElementById('name').textContent=playerName
})

console.log(secretNumber)
document.getElementById('btnn').addEventListener('click',function () {
    let guess=Number(document.getElementById('inp').value);

    console.log(guess)
    if (!guess) {
        message('no number');
    }else if (guess===secretNumber) {
        document.getElementById('number').textContent=secretNumber;
        document.getElementById('body').style.backgroundColor=' #60b347'
        document.getElementById('win').style.display='contents'
      
       
        document.getElementById('message').textContent='correct number';
        if (score>highScore) {
           highScore=score
            document.getElementById('high').textContent=highScore;
            
        }
    //     else if (guess!==secretNumber) {
    //         if (score>1) {
    //                     document.getElementById('message').textContent= guess>secretNumber? 'too high' : 'too low';
    //                     score--;
    //                     document.getElementById('para').textContent=score;
    //                 }else{
    //                     document.getElementById('message').textContent='you lose the game';
    //                     score--;
                        
    //                     document.getElementById('para').textContent=0;
    //                 }
    //     }
    }
    else if(guess>secretNumber){
        if (score>1) {
            document.getElementById('message').textContent='too high';
            score--;
            document.getElementById('para').textContent=score;
        }else{
            document.getElementById('message').textContent='you lose the game';
            score--;
            
            document.getElementById('para').textContent=0;
        }
        
    }else if(guess<secretNumber){
        
        if (score>1) {
            document.getElementById('message').textContent='too low';
            score--;
            document.getElementById('para').textContent=score;
        }else{
            document.getElementById('message').textContent='you lose the game';
            score--;
            document.getElementById('para').textContent=0;
        }
    }
})
document.getElementById('btn').addEventListener('click',function () {
    score=20;
    document.getElementById('win').style.display='none'
 secretNumber=Math.trunc(Math.random()*20)+1;
 guess=Number(document.getElementById('inp').value);
 document.getElementById('number').textContent='?'
    document.getElementById('para').textContent=score;
    document.getElementById('message').textContent='play the game';
    document.getElementById('body').style.backgroundColor='#222';
     document.getElementById('inp').value=''
    
})
    
    

