

let operation = []


function registerClick(value){
    console.log(value)

    if (value === "clear") {
        operation = []
        output()
        return
    }

    else if (operation.length === 0) {
        if (isNum(value)) {
            operation[0] = value
        }
    }

    else if (operation.length === 1) {
        if (isNum(value)) {
            if ((value === ".")){
                if (!(operation[0].includes('.'))) {

                    operation[0] += value
                }
            } else {
                operation[0] += value
            }
        }
        else if (value === "plusminus"){
            operation[0] *= -1
        }
        
        else if (value === "percent"){
            operation[0] *= .01
        }
        else {
            operation[1] = value
        }
    }

    else if (operation.length === 2) {
        if (isNum(value)) {
            operation[2] = value
        }
    }

    else if (operation.length === 3) {


        if (isNum(value)) {
            if ((value === ".")){
                if (!(operation[2].includes('.'))) {

                    operation[2] += value
                }
            } else {
                operation[2] += value
            }
        }
        else if (value === "plusminus"){
            operation[2] *= -1
        }
        else if ((value === ".") && (!(operation[2].includes('.')))){
            operation[2] += value
        }
        else if (value === "percent"){
            operation[2] *= .01
        }
        else if (value === "equals"){
            console.log(operation)
            let result = operate(parseInt(operation[0]), operation[1], parseInt(operation[2]))

            operation = []
            operation.push(result)
            console.log(operation)
        }
    }

    output()
}

function isNum(str){
    return(str === '.' || !isNaN(Number(str)))
}

function output(){
    document.getElementById("output").innerHTML = operation.join(' ')
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        registerClick(button.id)
    })
})


function operate(a, op, b) {
    if(op==="+") {
        return(a+b)
    }
    if(op==="-") {
        return(a-b)
    }
    if(op==="/") {
        return(a/b)
    }
    if(op==="*") {
        return(a*b)
    }
}
