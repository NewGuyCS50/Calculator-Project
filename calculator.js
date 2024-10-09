function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate (a,b, operator){
    if (operator == "+"){
        return sum(a,b)
    }

    else if( operator == "-"){
        return subtract(a,b)
    }

    else if (operator == "*"){
        return multiply(a,b)
    }

    else if (operator == "/") {
         return divide(a,b)
        }
}

// Create variables for first num second num and operator
let firstNum = ""
let secondNum = ""
let operator = ""


const divDisplay = document.querySelector("#display")

// Create the buttons for the numbers and display it in the display

for (let i = 0; i < 10; i++){

    const button = document.createElement("button")
    button.textContent = `${i}`

   
    button.addEventListener("click", ()=>{
        divDisplay.textContent = `${divDisplay.textContent}${button.textContent}`
        })
     
        const container = document.querySelector(".container")
    container.appendChild(button)

   
    
    
}

// Make the buttons for operations work


const buttonOperators = document.querySelectorAll(".operator")

buttonOperators.forEach((button)=>{
    button.addEventListener("click", ()=>{

        if (operator != ""){
            for (let i = 0; i < divDisplay.textContent.length; i++){
                if(divDisplay.textContent[i] == operator){
                    firstNum = divDisplay.textContent.slice(0,i)
                }
            }
            
            for (let i = 0; i < divDisplay.textContent.length; i++){
                if(divDisplay.textContent[i] == operator){
                    secondNum = divDisplay.textContent.slice(i+1,divDisplay.textContent.length)
                }
            }
            
            console.log(firstNum)
            console.log(secondNum)
            let result = operate(+firstNum,+secondNum,operator)
            divDisplay.textContent = result
            // Clear the operator
            operator = ""
        }
     
        divDisplay.textContent = `${divDisplay.textContent}${button.textContent}`
        operator = button.textContent
    
    
    
    })
    


})









// FOr equals to make it work

const buttonEquals = document.querySelector("#equals")



buttonEquals.addEventListener("click", ()=>{
    //if (secondNum = ""){
        //alert("enter the second number")
    //}

    //else if (secondNum != ""){

    for (let i = 0; i < divDisplay.textContent.length; i++){
        if(divDisplay.textContent[i] == operator){
            firstNum = divDisplay.textContent.slice(0,i)
        }
    }
    
    for (let i = 0; i < divDisplay.textContent.length; i++){
        if(divDisplay.textContent[i] == operator){
            secondNum = divDisplay.textContent.slice(i+1,divDisplay.textContent.length)
        }
    }
    
  



    console.log(firstNum)
    console.log(secondNum)
    let result = operate(+firstNum,+secondNum,operator)
    divDisplay.textContent = result
    // clear the operator
    operator = ""
//}
})












//to make clear work

const buttonClear = document.querySelector("#clear")

buttonClear.addEventListener("click", ()=>{
    operator = ""
    divDisplay.textContent = ""
    firstNum = ""
    secondNum = ""
})