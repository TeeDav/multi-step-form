import { Validator } from "./validationHelper.js";
import { validationScrits } from "./validationScripts.js";
import { setReady, unsetReady } from "./validationState.js";
import { pageState } from "../helpers/pageState.js";
import { pageStore } from "../helpers/pageStore.js";
import { infoPageStore } from "../helpers/pageStore.js";

let tezzio = pageState

function infoValidation () {
    console.log('hi')
    // const formControl = document.getElementById('formId')
    // console.log(document.querySelector('input[name="email"]'))
    const emailInput = document.querySelector('input[name="email"]');
    console.log(emailInput)
    const phoneInput = document.querySelector('input[name="phone"]');
    const errorBox = document.querySelector('.error-message')

    let validPhoneState = false;
    let validEmailState = false;

    const validatePhone = new Validator([
        '#phoneErr', //msgId
        phoneInput, //inputBox
        'error', //errClass
        'Please enter a valid phone number', //errMsg
        validationScrits.validatePhone, //function that will perform validation
        'infoPageReady', //event that should fire when input is valid
        validPhoneState
    ])

    const phoneValid = validatePhone.validate()
    // phoneValid()

    const validateEmail = new Validator([
        '#emailErr', //msgId
        emailInput, //inputBox
        'error', //errClass
        'Please enter a valid email', //errMsg
        validationScrits.validateEmail, //function that will perform validation
        'infoPageReady', //event that should fire when input is valid
        validEmailState
    ])

    const emailValid = validateEmail.validate()
    // emailValid()

    console.log(validateEmail.isValid)
    let validPhone = validatePhone.validate();
    let validEmail = validateEmail.validate();

    let x = 10;

    window.addEventListener('infoPageReady', () => {
        console.log(validPhone, validEmail)
        console.log(validatePhone.validPhoneState)
        let infoPageReady = false
        let nextDispatched = false

        if (validateEmail.isValid == true) {
            console.log('email true')
        }

        if ((validatePhone.isValid == true) && (validateEmail.isValid == true)) {
            tezzio.notifyLoaderList()
            //update validation in state to true
            let state = pageState.get()
            console.log(pageStore.currentPage.page.pageId, infoPageStore.pageId)
            if (pageStore.currentPage.page.pageId == infoPageStore.pageId) {
                tezzio.update({validated:  true})
                console.log('id correct', state)
            }

            console.log(`x is ${x}`)
            infoPageReady = true
            
            unsetReady();
            const id = crypto.randomUUID();
            console.log(id)
            setReady(id);

            window.dispatchEvent(new CustomEvent('nextPageReady', { detail: { id }})) 
            //nextDispatched = true
            
            return
    } //else {
    //     window.dispatchEvent(new CustomEvent('nextPageReady', { detail: infoPageReady}))  
    // }
    })

    //add a subscriber to display err message when next button is clicked
    //without validation
}

export { infoValidation }