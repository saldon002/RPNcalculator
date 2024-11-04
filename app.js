class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }

    pop() {
        if (this.isEmpty()){
            return "Stack is Empty"
        }
        return this.items.pop()
    }

    clear() {
        this.items = []
    }

    size() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }
}

const stack_Operand = new Stack()

function calc_init() {
    console.log("calc_init()");
    let display = document.getElementById("display");
    display.innerText="0"
}

function updateDisplay(value) {
    document.getElementById("display").innerText = value;
}

function insertNum(num) {
    stack_Operand.push(num)
    updateDisplay(num)
}

function calcOperator(operator) {
    if (stack_Operand.size() < 2) {
        updateDisplay("ERROR")
        stack_Operand.clear()
        return
    }

    let operand2 = stack_Operand.pop()
    let operand1 = stack_Operand.pop()
    let result

    switch (operator) {
        case '+':
            result = operand1 + operand2
            break
        case '-':
            result = operand1 - operand2
            break
        case '*':
            result = operand1 * operand2
            break
        case '/':
            if (operand2 === 0) {
                updateDisplay("ERROR")
                stack_Operand.clear()
                return
            }
            result = operand1 / operand2
            break
        default:
            updateDisplay("ERROR")
            return
    }

    stack_Operand.push(result)
    updateDisplay(result)
}



document.getElementById("button_NUM_0").addEventListener("click", ()=>{insertNum(0)})
document.getElementById("button_NUM_1").addEventListener("click", ()=>{insertNum(1)})
document.getElementById("button_NUM_2").addEventListener("click", ()=>{insertNum(2)})
document.getElementById("button_NUM_3").addEventListener("click", ()=>{insertNum(3)})
document.getElementById("button_NUM_4").addEventListener("click", ()=>{insertNum(4)})
document.getElementById("button_NUM_5").addEventListener("click", ()=>{insertNum(5)})
document.getElementById("button_NUM_6").addEventListener("click", ()=>{insertNum(6)})
document.getElementById("button_NUM_7").addEventListener("click", ()=>{insertNum(7)})
document.getElementById("button_NUM_8").addEventListener("click", ()=>{insertNum(8)})
document.getElementById("button_NUM_9").addEventListener("click", ()=>{insertNum(9)})

document.getElementById("button_ADD").addEventListener("click", ()=>{calcOperator('+')})
document.getElementById("button_SUB").addEventListener("click", ()=>{calcOperator('-')})
document.getElementById("button_MUL").addEventListener("click", ()=>{calcOperator('*')})
document.getElementById("button_DIV").addEventListener("click", ()=>{calcOperator('/')})

document.getElementById("button_AC").addEventListener("click", ()=>{stack_Operand.clear(); updateDisplay('0')})
