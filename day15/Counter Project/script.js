const result = document.getElementById("result")
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const reset = document.getElementById('reset')

let num = 0 

function incrase(){
    num++
    result.innerHTML = num

    if( num > 0){
        result.style.textShadow = '0px 0px 10px limegreen'
    result.style.color = 'limegreen'
    
    document.getElementById('section1').style.boxShadow = "0px 0px 15px limegreen"
    document.getElementById('section1').style.border = "2px solid limegreen"
    }else if(num == 0){
        result.style.textShadow = '0px 0px 10px black'
        result.style.color = 'black'
        
        document.getElementById('section1').style.boxShadow = "0px 0px 15px black"
        document.getElementById('section1').style.border = "2px solid black"
    }
    

}

function decrase(){
    num--
    result.innerHTML = num

    if(num < 0){
        result.style.textShadow = '0px 0px 10px tomato'
    result.style.color = 'tomato'
    
    document.getElementById('section1').style.boxShadow = "0px 0px 15px tomato"
    document.getElementById('section1').style.border = "2px solid tomato"
    }else if(num == 0){
        result.style.textShadow = '0px 0px 10px black'
        result.style.color = 'black'
        
        document.getElementById('section1').style.boxShadow = "0px 0px 15px black"
        document.getElementById('section1').style.border = "2px solid black"
    }
}

function restart(){
    num = 0
    result.innerHTML = num

    if(num == 0){
        result.style.textShadow = '0px 0px 10px black'
        result.style.color = 'black'
        
        document.getElementById('section1').style.boxShadow = "0px 0px 15px black"
        document.getElementById('section1').style.border = "2px solid black"
    }
}