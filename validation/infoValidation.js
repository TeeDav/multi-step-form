import { Validator } from "./validationHelper.js";
import { validationScrits } from "./validationScripts.js";

function infoValidation () {
    window.addEventListener('validation', () => {
        
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
            validationScrits.validatePhone //function that will perform validation
        ])

        validatePhone.validate()

        // valid()

        // emailInput.focusin = console.log('yay')
        // emailInput.addEventListener('focusout', () => {
        //     console.log('focus-out')
        //     const email = emailInput.value;
        //     console.log(email)

        //     if(!(email == '')) {
        //         if (!validateEmail(email)) {
        //             document.querySelector('#emailErr').textContent = 'Please enter a valid email address.';
        //             // errorBox.classList.add('error');
        //             // emailInput.focus();
        //             emailInput.classList.add('error')
        //             // email.style.hover.borderColor = 'green'
        //             return;
        //         } else if (validateEmail(email)) {
        //             document.querySelector('#emailErr').textContent = '';
        //             if (emailInput.classList.contains('error')) {
        //                 emailInput.classList.remove('error')
        //             }
        //         }

        //         // Valid — you can use phoneRes.normalized and email
        //         console.log('Email valid:', email);
        //     } else return
        // })
        
        //id of error message
        //input box
        //error class
        //error message

        // function showPhoneErr() {
        //     document.querySelector('#phoneErr').textContent = 'Please enter a valid phone number.';
        //     phoneInput.classList.add('error')
        // }

        // function removePhoneErr () {
        //     document.querySelector('#phoneErr').textContent = '';
        //     if (phoneInput.classList.contains('error')) {
        //         phoneInput.classList.remove('error')
        //     }
        // }

        // phoneInput.addEventListener('keyup', () => {
        //     let phone = phoneInput.value;
        //     console.log(phone)

        //     if(!(phone == '')) {
        //         const phoneRes = validatePhone(phone);

        //         if (!phoneRes.valid) {
        //                 if (phoneRes.valid) {   
        //                 removePhoneErr()
        //                 return
        //             }  

        //             phoneInput.addEventListener('focusout', () => {
        //                 showPhoneErr()
        //             })
                    
        //             console.log('here')
        //             return;
        //         } else if (phoneRes.valid) {

        //             if (!phoneRes.valid) {    
        //                 showPhoneErr()
        //                 return
        //             }

        //             removePhoneErr()
        //             phoneInput.addEventListener('focusout', () => {
        //                 removePhoneErr()
        //             })
        //             return
        //         }                    
        //         // Valid — you can use phoneRes.normalized and email
        //         console.log('Phone normalized:', phoneRes.normalized);
        //         return
        //     } else if(phone == '') {
        //         phone = ''
        //         document.querySelector('#phoneErr').textContent = '';
        //         if (phoneInput.classList.contains('error') || !(phoneInput.classList.contains('error'))) {
        //             phoneInput.classList.remove('error')
        //         }
        //         phoneInput.addEventListener('focusout', () => {
        //             removePhoneErr()
        //         })
        //         return
        //     }
        // })

        // phoneInput.addEventListener('focusout', () => {
        //     const phone = phoneInput.value;
        //     if(!(phone == '')) {
        //         const phoneRes = validatePhone(phone);
        //         if (!phoneRes.valid) {
        //             document.querySelector('#phoneErr').textContent = 'Please enter a valid phone number.';
        //             // errorBox.classList.add('error');
        //             // phoneInput.focus();
        //             phoneInput.classList.add('error')
        //             return;
        //         } else if (phoneRes.valid) {
        //             document.querySelector('#phoneErr').textContent = '';
        //             if (phoneInput.classList.contains('error')) {
        //                 phoneInput.classList.remove('error')
        //             }
        //         }                    
        //         // Valid — you can use phoneRes.normalized and email
        //         console.log('Phone normalized:', phoneRes.normalized);
        //     } else return
        // })

        // async function valid() {
        //     console.log('valid')
        //     // console.log(emailInput)
        //     const value = await emailInput?.value
        //     console.log(value)
        // }

        
        
        // window.addEventListener('navigate', (e) => {
        //     console.log('validation')
        //     if (e.detail == 2) {
        //         console.log('validated')
        //         e.preventDefault();
        //     const email = emailInput?.value;
        //     const phone = phoneInput?.value;

        //     console.log(emailInput)

        //     if (!validateEmail(email)) {
        //     errorBox.textContent = 'Please enter a valid email address.';
        //     errorBox.classList.add('error');
        //     emailInput.focus();
        //     return;
        //     }

        //     const phoneRes = validatePhone(phone);
        //     if (!phoneRes.valid) {
        //     errorBox.textContent = 'Please enter a valid phone number.';
        //     errorBox.classList.add('error');
        //     phoneInput.focus();
        //     return;
        //     }

        //     // Valid — you can use phoneRes.normalized and email
        //     console.log('Email valid:', email);
        //     console.log('Phone normalized:', phoneRes.normalized);

        //     }
        // })
    })
}

export { infoValidation }