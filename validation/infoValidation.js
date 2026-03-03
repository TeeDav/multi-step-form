import { Validator } from "./validationHelper.js";
import { validationScrits } from "./validationScripts.js";
import { setReady } from "./validationState.js";

function infoValidation () {
    window.addEventListener('infoPageValidation', () => {
        
        console.log('hi')
        // const formControl = document.getElementById('formId')
        // console.log(document.querySelector('input[name="email"]'))
        const emailInput = document.querySelector('input[name="email"]');
        console.log(emailInput)
        const phoneInput = document.querySelector('input[name="phone"]');
        const errorBox = document.querySelector('.error-message')


        const validatePhone = new Validator([
            '#phoneErr', //msgId
            phoneInput, //inputBox
            'error', //errClass
            'Please enter a valid phone number', //errMsg
            validationScrits.validatePhone, //function that will perform validation
            'infoPageReady' //event that should fire when input is valid
        ])

        const phoneValid = validatePhone.validate()
        // phoneValid()

        const validateEmail = new Validator([
            '#emailErr', //msgId
            emailInput, //inputBox
            'error', //errClass
            'Please enter a valid email', //errMsg
            validationScrits.validateEmail, //function that will perform validation
            'infoPageReady' //event that should fire when input is valid
        ])

        const emailValid = validateEmail.validate()
        // emailValid()

        console.log(validateEmail.isValid)

        let x = 10;

        window.addEventListener('infoPageReady', () => {
            let infoPageReady = false

            if ((validatePhone.validate() == true) && (validateEmail.validate() == true)) {
                console.log(`x is ${x}`)
                infoPageReady = true

                const id = crypto.randomUUID();
                console.log(id)
                setReady(id);

                window.dispatchEvent(new CustomEvent('nextPageReady', { detail: { id }}))  
                
                return
             } //else {
            //     window.dispatchEvent(new CustomEvent('nextPageReady', { detail: infoPageReady}))  
            // }
        })
    })
}

export { infoValidation }