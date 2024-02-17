const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let randWords="";
let words=['python','javascript','sql','http','microcontroller','embedded','butterfly','freezer','orange','apple','tree','cat'];


const createNewWords=() =>{
    let ranNum= Math.floor(Math.random() * words.length );
    let newTempWords=words[ranNum];
    // console.log(newTempWords)
    return newTempWords;

}

const scrambleWords=(arr) =>{
    for(let i=arr.length-1; i>0;i--){
        let temp=arr[i];
        // console.log(temp);
        let j=Math.floor(Math.random() * (i+1));
        arr[i]=arr[j];
        arr[j]=temp;
        // console.log(i);
        // console.log(j);
    }
    return arr;
}

btn.addEventListener('click', function(){
    if(!play){
        play=true;
        btn.innerHTML="GUESS";
        guess.classList.toggle('hidden');
        newWords=createNewWords();
        randWords=scrambleWords(newWords.split("")).join("");
        msg.innerHTML=`Guess the word:  ${randWords}`;
        // console.log(randWords);
    }
        else{
            let tempWord= guess.value;
            if(tempWord===newWords){
                // console.log("correct")
                play=false;
                msg.innerHTML=`Awesome it is correct. The answer is ${newWords}`
                btn.innerHTML="Start Again";
                guess.classList.toggle('hidden');
                guess.value="";
            }
            else{
                msg.innerHTML=`Sorry it is incorrect. Please try again ${randWords}`
                console.log("incorrect")

            }
        }
    }
);

