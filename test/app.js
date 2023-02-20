
function trySwitch(banana){

    switch(banana) {
        case "Jared":
            console.log("Hi Jared!")
            break;
        case "Becca":
            console.log("Hi Becca!")
            break;
        case "Dan":
            console.log("Hi Dan!")
            break;
        default:
            console.log("Who the fuck?")
    }
}

function tryStatement(expression){
    if(expression == "Dan"){
        console.log("Ok then Dan..")
    }
    else if(expression == "Becca"){
        console.log("Hey there.")
    }
    else if(expression == "Jared"){
        console.log("Who invited you?")
    }
    else{
        console.log("Get outta here scum")
    }
}

function tryOdd(number){

    let remainder = number % 2

    console.log("You have given me the number ", number)

    if (remainder === 0){
        console.log("The original number is even")
    }
    else{
        console.log("The original number is odd")
    }


    console.log("Now I'm going to add 1")

    let sum = number+1

    console.log("The new number is ", sum)

    if (sum % 2 === 0){
        console.log("The new number is even")
    }
    else{
        console.log("The new number is odd")
    }
}
