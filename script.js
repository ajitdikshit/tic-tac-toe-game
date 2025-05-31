const mybutton1=document.getElementById('button1');
const mybutton2=document.getElementById('button2');
const mybutton3=document.getElementById('button3');
const mybutton4=document.getElementById('button4');
const mybutton5=document.getElementById('button5');
const mybutton6=document.getElementById('button6');
const mybutton7=document.getElementById('button7');
const mybutton8=document.getElementById('button8');
const mybutton9=document.getElementById('button9');

const resetbutton=document.getElementById('resetbutton');

let button1= mybutton1.innerHTML;
let button2= mybutton2.innerHTML;
let button3= mybutton3.innerHTML;
let button4= mybutton4.innerHTML;
let button5= mybutton5.innerHTML;
let button6= mybutton6.innerHTML;
let button7= mybutton7.innerHTML;
let button8= mybutton8.innerHTML;
let button9= mybutton9.innerHTML;

let playermove='×';

function toggleplayermove(){
    if (playermove==='×'){
        playermove='o';
    }else if(playermove==='o'){
        playermove='×';
    }
}

mybutton1.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx();  
        checkwinnero();
        checktie();
    }
});

mybutton2.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx(); 
        checkwinnero();
        checktie();
    }
});

mybutton3.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx(); 
        checkwinnero();
        checktie();
    }
});

mybutton4.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx(); 
        checkwinnero();
        checktie();
    }
});

mybutton5.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx(); 
        checkwinnero();
        checktie();
    }
});

mybutton6.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx(); 
        checkwinnero();
        checktie();
    }
});

mybutton7.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx(); 
        checkwinnero();
        checktie();
    }
});

mybutton8.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx(); 
        checkwinnero();
        checktie();
    }
});

mybutton9.addEventListener('click',function(){
    if(this.innerHTML===''){
        this.innerHTML=playermove;
        toggleplayermove();
        checkwinnerx(); 
        checkwinnero();
        checktie();
    }
});

function checkwinnerx(){
    if((mybutton1.innerHTML=='×' && mybutton2.innerHTML=='×' && mybutton3.innerHTML=='×') || (mybutton1.innerHTML=='×' && mybutton4.innerHTML=='×' && mybutton7.innerHTML=='×') || (mybutton1.innerHTML=='×' && mybutton5.innerHTML=='×' && mybutton9.innerHTML=='×') || (mybutton2.innerHTML=='×' && mybutton5.innerHTML=='×' && mybutton8.innerHTML=='×') || (mybutton3.innerHTML=='×' && mybutton6.innerHTML=='×' && mybutton9.innerHTML=='×') || (mybutton3.innerHTML=='×' && mybutton5.innerHTML=='×' && mybutton7.innerHTML=='×') || (mybutton4.innerHTML=='×' && mybutton5.innerHTML=='×' && mybutton6.innerHTML=='×') || (mybutton7.innerHTML=='×' && mybutton8.innerHTML=='×' && mybutton9.innerHTML=='×')){
        alert('player 1 won');
        resetscore();
    }
}

function checkwinnero(){
    if((mybutton1.innerHTML=='o' && mybutton2.innerHTML=='o' && mybutton3.innerHTML=='o') || (mybutton1.innerHTML=='o' && mybutton4.innerHTML=='o' && mybutton7.innerHTML=='o') || (mybutton1.innerHTML=='o' && mybutton5.innerHTML=='o' && mybutton9.innerHTML=='o') || (mybutton2.innerHTML=='o' && mybutton5.innerHTML=='o' && mybutton8.innerHTML=='o') || (mybutton3.innerHTML=='o' && mybutton6.innerHTML=='o' && mybutton9.innerHTML=='o') || (mybutton3.innerHTML=='o' && mybutton5.innerHTML=='o' && mybutton7.innerHTML=='o') || (mybutton4.innerHTML=='o' && mybutton5.innerHTML=='o' && mybutton6.innerHTML=='o') || (mybutton7.innerHTML=='o' && mybutton8.innerHTML=='o' && mybutton9.innerHTML=='o')){
        alert('player 2 won');
        resetscore();
    }
}



function checktie(){
    if(mybutton1.innerHTML){
        if(mybutton2.innerHTML){
            if(mybutton3.innerHTML){
                if(mybutton4.innerHTML){
                    if(mybutton5.innerHTML){
                        if(mybutton6.innerHTML){
                            if(mybutton7.innerHTML){
                                if(mybutton8.innerHTML){
                                    if(mybutton9.innerHTML){
                                        alert('tied');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function resetscore(){
    mybutton1.innerHTML='';
    mybutton2.innerHTML='';
    mybutton3.innerHTML='';
    mybutton4.innerHTML='';
    mybutton5.innerHTML='';
    mybutton6.innerHTML='';
    mybutton7.innerHTML='';
    mybutton8.innerHTML='';
    mybutton9.innerHTML='';
    playermove='×';
}
