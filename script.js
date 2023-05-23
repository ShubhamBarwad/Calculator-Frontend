let btnCal = document.getElementsByClassName('button')
let display = document.getElementById('display')
let i = 1;
let displayText = ''
let bracketIndex = 0
let operatorIndex = 0

// console.log(btnCal)
// console.log(display)

const clearAll = () => {
    display.innerHTML = null
    displayText = ''
    bracketIndex = 0
    operatorIndex = 0
}
const equals = (innerHTML) => {
    console.log(innerHTML)
    displayText = eval(displayText)
    displayText = String(displayText).substring(0, 10)
    display.innerHTML = displayText
}
const brackets = () => {
    if (bracketIndex % 2 == 0) {
        displayText = displayText + '('
        display.innerHTML = displayText
        bracketIndex++
    } else {
        displayText = displayText + ')'
        display.innerHTML = displayText
        bracketIndex++
    }
}


Array.from(btnCal).forEach(element => {
    element.addEventListener('click', event => {
        const clickedBtn = event.target
        if (clickedBtn.id == 'btn-ac') {
            // console.log('clearAll')
            clearAll()
        } else if (clickedBtn.id == 'btn-bracket') {
            if (displayText.length < 17) {
                // console.log('brackets')
                brackets()
            }
        } else if (clickedBtn.id == 'btn-clear') {
            console.log('clear')
        } else if (clickedBtn.id == 'btn-equbutton') {
            // console.log('equals')
            if (display.innerHTML != '' && display.innerHTML != 'undefined') {
                equals(display.innerHTML)
            }
        } else {
            if (displayText.length < 17) {
                if (operatorIndex == 0) {
                    displayText = displayText + clickedBtn.innerHTML
                    display.innerHTML = displayText
                } else if (clickedBtn.id != 'btn-multiply' && clickedBtn.id != 'btn-division' && clickedBtn.id != 'btn-subtract' && clickedBtn.id != 'btn-add' && clickedBtn.id != 'btn-decimal') {
                    displayText = displayText + clickedBtn.innerHTML
                    display.innerHTML = displayText
                    operatorIndex = 0
                }
                if (clickedBtn.id == 'btn-multiply' || clickedBtn.id == 'btn-division' || clickedBtn.id == 'btn-subtract' || clickedBtn.id == 'btn-add' || clickedBtn.id == 'btn-decimal') {
                    operatorIndex++
                }
            }
        }
    })
})