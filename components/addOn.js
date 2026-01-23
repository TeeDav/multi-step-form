function addOn([headNote, subNote, perMonth]) {
    const addOn = document.createElement('div');
    addOn.id = "add-on"
    addOn.classList = 'add-ons'
    addOn.setAttribute('tabindex', '0')

    const checkDiv = document.createElement('div')
    checkDiv.classList = 'check'
    const checkInput = document.createElement('input')
    checkInput.id = 'check'
    checkInput.setAttribute('type', 'checkbox')

    checkDiv.appendChild(checkInput)

    const addOnCopy = document.createElement('div')
    addOnCopy.classList = 'add-ons-copy'

    const addOnNote_1 = document.createElement('p')
    addOnNote_1.classList = 'notes'
    addOnNote_1.innerHTML = headNote

    const addOnNote_2 = document.createElement('p')
    addOnNote_2.classList = 'notes'
    addOnNote_2.innerHTML = subNote

    addOnCopy.appendChild(addOnNote_1)
    addOnCopy.appendChild(addOnNote_2)


    const amountDiv = document.createElement('div')
    amountDiv.classList = 'add-ons-amount'

    const amount = document.createElement('p')
    amount.classList = 'notes'
    amount.innerHTML = perMonth

    amountDiv.appendChild(amount)

    addOn.appendChild(checkDiv)
    addOn.appendChild(addOnCopy)
    addOn.appendChild(amountDiv)

    let summary = {
        'perk_1': '',
        'perk_2': ''
    }
    localStorage.setItem('summaryStore', summary)

    addOn.addEventListener('click', (e) => {
        checkInput.checked = !checkInput.checked
        if (addOn.classList.contains('focused')) {
            addOn.classList.remove('focused');
        }
        else if (!addOn.classList.contains('focused')) {
            addOn.classList.add('focused');
        }
        
        if (checkInput.checked == true) {
            console.log(checkInput.parentElement.parentElement)
            console.log(headNote)
            console.log(perMonth)

            summary.perk_1 = headNote

            console.log(summary)

            //window.dispatchEvent(new CustomEvent('summary', { detail: u}))
        }
    })
    

    checkInput.addEventListener('click', (e) => {
        console.log(checkInput.parentElement.parentElement)
        // const addOnCheck = checkInput.parentElement.parentElement
        // if (addOnCheck.classList.contains('focused')) {
        //     addOnCheck.classList.remove('focused');
        // }
        // else if (!addOnCheck.classList.contains('focused')) {
        //     addOnCheck.classList.add('focused');
        // }
        //checkInput.checked = !checkInput.checked
    })

    if (checkInput.checked == true) {
        console.log('checked')
    }

    return addOn;
}

export { addOn }