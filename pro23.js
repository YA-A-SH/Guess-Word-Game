let word = document.querySelector('.word');
let tryy;
let trys = 5 ; 
let curentTry = 1 ;
let numOfHint = 2 ;
let words = ['YASER','SHIMA','ALI','HASSAN','MOHAMED','TALA','OMAR','KENAN','ISSRA','HANEEN','BASMA','ASSMA','DANIA','ANAS','AFNAN'];

    let randWord = words[Math.floor(Math.random() * words.length)];
    console.log(randWord);

    let letter = randWord.length;
    console.log(-(20*-100));

function Generate(){


// نعمل المحاولات
for(let i = 1 ; i<=trys ; i++){

     tryy = document.createElement('div');
    tryy.classList.add(`try-${i}`);
    word.appendChild(tryy);

    if(i!==1) tryy.classList.add('disable');
//نظيف عدد المحاولات 

    let span = document.createElement('span');
    span.classList.add('spanTry');
    span.innerHTML = `Try-${i}`;
    tryy.appendChild(span);

// نضيف عدد الاحرف 

    let letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    tryy.appendChild(letterDiv);

    for(let j = 1 ; j<=letter ; j++){
        let letter = document.createElement('input');
        letter.maxLength = '1';
        letter.type = 'text' ;
        letter.id = `word-${i}_Letter-${j}`;
        letterDiv.appendChild(letter);
        letter.disabled;
    }
}
    word.children[0].children[1].children[0].focus();

    let disabledInput = document.querySelectorAll('.disable input');
    disabledInput.forEach((inp)=>(inp.disabled = true));

    tryysss(1);
}
    function tryysss(num){
        let inputs = document.querySelectorAll(`.try-${num} .letter input`);
    
    
        inputs.forEach((input , index)=>{
            
    // ينتقل للحرف اللي بعدو لما يضغط علية 
            input.addEventListener('input',function(){
    
                let nextIndex = inputs[index + 1];
                if(nextIndex){nextIndex.focus();}
                
    
            })
    
            input.addEventListener('keydown', function(event){
              
              //console.log(event)
                let curentIndex = Array.from(inputs).indexOf(this);
    
                if( curentIndex <= letter){
                    let nextIndex = curentIndex +1;
                    if(event.key === 'ArrowRight'){
                       inputs[nextIndex].focus();
                    }
                }
                if( curentIndex > 0){
                    let prevIndex = curentIndex -1;
                    if(event.key === 'ArrowLeft'){
                       inputs[prevIndex].focus();
                    }
                    if(event.key === 'Backspace'){
                        cIndex = inputs[curentIndex];
                        cIndex.value = '';
                        let prevIndex = curentIndex -1;
                        pIndex = inputs[prevIndex];
                         pIndex.focus();
                         pIndex.value = '';
                        
                    }
                }
                
             
            })
        });
    }
    

    
    let check = document.querySelector('#cheakWord');
    let hint = document.querySelector('#hint');
    let rest = document.querySelector('#restart');
    let hintSpan = document.querySelector('#hint span');
    hintSpan.innerHTML = `${numOfHint} Hints`;
    hint.addEventListener('click' , getHint);

        // 
    rest.addEventListener('click' , restart);
    function restart(){
        location.reload();
    }
    document.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
           check.click();
        }
    });
    check.addEventListener('click', game);
    

    
    function game (){
        let sucsses = true;
        for(let i = 1 ; i <= letter ; i++){
        let inputfield = document.querySelector(`#word-${curentTry}_Letter-${i}`);
            let ltr  = inputfield.value.toUpperCase() ; 
           let actualLetter = randWord[i-1];

           if(ltr === actualLetter){
            inputfield.classList.add('correctAndin');
           }
           else if(randWord.includes(ltr) && ltr !== ''){
            inputfield.classList.add('correctAndNot');
            sucsses = false;
           }
           else{
            inputfield.classList.add('not');
            sucsses = false;
           }

        }
        if(sucsses == true){
            let msg = document.querySelector('.final');
            msg.innerHTML = `Congratulation You Winn !!!` ;
            msg.classList.add('win');
            let allInput = document.querySelectorAll('input');
            allInput.forEach((inp)=>{
                inp.disabled = true ;
                inp.classList.add('done');
            });
            check.disabled = true ; 
            check.classList.add('btn_done');
            hint.disabled = true ; 
            hint.classList.add('btn_done');
            rest.style.display= 'block';
            if(numOfHint == 2){
                msg.innerHTML = `Congratulation You Winn Without Any Hint !!!`;
            }
            if(numOfHint == 0){
                 msg.innerHTML = `Allright You Win But You Use All Hints`;
            }

       }
       else{
        document.querySelector(`.try-${curentTry}`).classList.add('disable');
           curentTry++;
           document.querySelectorAll(`.letter input`).forEach((inp)=>(inp.disabled = true));

           if(curentTry <6){
           document.querySelector(`.try-${curentTry}`).classList.remove('disable');

           document.querySelectorAll(`.try-${curentTry} .letter input`).forEach((inp)=>(inp.disabled = false));
           document.querySelector(`.try-${curentTry} .letter`).children[0].focus();
           tryysss(curentTry);
           }

           if(curentTry ==6){
            
            let msg = document.querySelector('.final');
            msg.innerHTML = `Poor You Faild ( The Word Was {${randWord}} )` ;
            msg.classList.add('faild');
            check.disabled = true ; 
            check.classList.add('btn_done');
            hint.disabled = true ; 
            hint.classList.add('btn_done');
            rest.style.display= 'block';

            
        }
       }
       
    }
     
    function getHint(){
        if(numOfHint > 0){
            numOfHint-- ; 
            hintSpan.innerHTML = `${numOfHint} Hints`;
            if (numOfHint == 1){
                hintSpan.innerHTML = `${numOfHint} Hint`;
            }
            if (numOfHint == 0){
                hintSpan.innerHTML = `${numOfHint} Hint`;
                hint.classList.add('btn_done');
                hint.disabled = true;
            }
        }
        
        let enabledInp = document.querySelectorAll(`input:not([disabled])`);
        let emptyInput = Array.from(enabledInp).filter((inp)=>inp.value === "");
        
        if(emptyInput.length > 0 ){
            let randIndex = Math.floor(Math.random() * emptyInput.length);
            let radnInput = emptyInput[randIndex];
            let indexToFill = Array.from(enabledInp).indexOf(radnInput);
            radnInput.value = randWord[indexToFill];
        }
    }
window.onload = function(){
        Generate();
    }







    