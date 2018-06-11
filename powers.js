/*
    In the following code, replace `event` with the correct string to handle
    a click event on the button. Then write the function that has instructions
    for activating the corresponding power. The function should...
        1. Remove the `disabled` class
        2. Add the `enabled` class

*/
const handlerFunction = () => {
    document.querySelector('#flight').classList.toggle('disabled')
    document.querySelector('#flight').classList.toggle('enabled')
}

document.querySelector("#activate-flight").addEventListener('click', handlerFunction)

const handlerFunction2 = () => {
    document.querySelector('#mindreading').classList.toggle('disabled')
    document.querySelector('#mindreading').classList.toggle('enabled')
}

document.querySelector("#activate-mindreading").addEventListener('click', handlerFunction2)

const handlerFunction3 = () => {
    document.querySelector('#xray').classList.toggle('disabled')
    document.querySelector('#xray').classList.toggle('enabled')
}

document.querySelector("#activate-xray").addEventListener('click', handlerFunction3)
/*
    Now write two more event handlers that activate the other two powers
    when the corresponding buttons are clicked.
*/


/*
    Write two more event handlers for activating and deactivating all powers
    when the corresponding buttons are clicked. You will need to use the
    `document.querySelectorAll()` method for these.
*/

const handlerFunction4 = () => {
    const sections = document.querySelectorAll('.power')
    sections.forEach(item =>{
        item.classList.add('enabled')
        item.classList.remove('disabled')
    })
}

document.querySelector("#activate-all").addEventListener('click', handlerFunction4)

const handlerFunction5 = () => {
    const sections = document.querySelectorAll('.power')
    sections.forEach(item =>{
        item.classList.add('disabled')
        item.classList.remove('enabled')
    })
}

document.querySelector("#deactivate-all").addEventListener('click', handlerFunction5)