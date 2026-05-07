class Validator {
    constructor([msgId, inputBox, errClass, errMsg, validateInput, pageReady, isValid, inputOut]) {
        this.msgId = msgId,
        this.inputBox = inputBox,
        this.errClass = errClass,
        this.errMsg = errMsg,
        this.validateInput = validateInput,
        this.pageReady = pageReady,
        this.isValid = false,
        this.inputOut = false
        ////console.log(this.msgId)
        //construct stuff with the parameters
        
    }
    //method to validate goes here

    //static methods, to be accessed by Validator class only
    static showErr(input) {
        //console.log(input.errMsg)
        let readyState = input.isValid;
        document.querySelector(input.msgId).textContent = input.errMsg;
        input.inputBox.classList.add(input.errClass)
        window.dispatchEvent(new CustomEvent(input.pageReady, { detail: { readyState }}))

    }

    static clearErr(input) {
        //console.log(isValid)
        console.log(input.isValid)
        let readyState = input.isValid;
        document.querySelector(input.msgId).textContent = '';
        input.inputBox.classList.remove(input.errClass)
        window.dispatchEvent(new CustomEvent(input.pageReady, { detail: { readyState }}))
    }
    
    //this method performs validation, to be accessed from instantiated objects.
    validate() {
        // //on auto-fill
        // let valueAuto = this.inputBox.value;
        // let inputResAuto = this.validateInput(valueAuto);
        // if(!(valueAuto == '')) {
        //     if((inputResAuto.valid)) {
        //     this.isValid = true
        //     Validator.clearErr(this)
        // } else if(!(inputRes.valid)) {
        //     this.isValid = false
        //     Validator.showErr(this)
        // }
        // } 

        //user enters details, on 'keyup' this runs
        // this.inputBox.addEventListener('keyup', () => {
        //     let value = this.inputBox.value;

        //     //if there's something in the box
        //     if(!(value == '')) {
        //         let inputRes = this.validateInput(value);

        //         //after entering details and user leaves the box
        //         this.inputBox.addEventListener('focusout', () => {
        //             if((inputRes.valid)) {
        //                 this.isValid = true
        //                 Validator.clearErr(this)
        //             } else if(!(inputRes.valid)) {
        //                 this.isValid = false
        //                 Validator.showErr(this)
        //             } 
        //         })
        //     }   
        // })
        
        this.inputBox.addEventListener('change', () => {
            let value = this.inputBox.value;
            console.log(value)
            // let inputOut = false

            //on key-up if input box is not empty
            if(!(value == '')) {
                console.log('here')
                let inputRes = this.validateInput(value);
                ////console.log(inputRes.valid)

                if((inputRes.valid)) {
                    this.isValid = true
                    Validator.clearErr(this)
                    //console.log(inputRes.valid)
                    //console.log('true')
                    //this.inputOut = true
                    //this.inputBox.dispatchEvent(new CustomEvent('outFocus', { detail: this.inputOut }))   
                } else if(!(inputRes.valid)) {
                    //console.log('not true')
                    this.isValid = false
                    Validator.showErr(this)
                    //this.inputBox.dispatchEvent(new CustomEvent('outFocus', { detail: this.inputOut }))   
                }   


                // this.inputBox.addEventListener('outFocus', () => {
                //     this.inputBox.addEventListener('keyup', () => {
                //         let inputRes = this.validateInput(this.inputBox.value);
                //         //console.log('keyup', this.inputOut, inputRes.valid)
                //         if((inputRes.valid)) {
                //             this.isValid = true
                //             Validator.clearErr(this)
                //             //console.log(inputRes.valid)
                //             //console.log(1)
                //             return; 
                //         } else if(!(inputRes.valid)) {
                //             this.isValid = false
                //             Validator.showErr(this)
                //             return
                //         } 
                //     })
                // })

                // this.inputBox.addEventListener('focusout', () => {
                //     this.inputOut = true
                //     //console.log(inputRes.valid)

                //     if((inputRes.valid)) {
                //         this.isValid = true
                //         Validator.clearErr(this)
                //         //console.log(inputRes.valid)
                //         //console.log('true')
                //         //this.inputOut = true
                //         this.inputBox.dispatchEvent(new CustomEvent('outFocus', { detail: this.inputOut }))  
                //         return; 
                //     } else if(!(inputRes.valid)) {
                //         //console.log('not true')
                //         this.isValid = false
                //         Validator.showErr(this)
                //         this.inputBox.dispatchEvent(new CustomEvent('outFocus', { detail: this.inputOut }))   
                //         return
                //     }   
                // })

            }
            
            //on key-up if input box is empty
            if (value == '') {
                console.log('nothing in the box')
                value = ''
                document.querySelector(this.msgId).textContent = '';
                if (this.inputBox.classList.contains(this.errClass) || !(this.inputBox.classList.contains(this.errClass))) {
                    console.log('empty')
                    this.inputBox.classList.remove(this.errClass)
                }
                this.isValid = false
                Validator.clearErr(this)
                // this.inputBox.addEventListener('focusout', () => {
                //     this.isValid = false
                //     Validator.showErr(this)
                // })
                // this.isValid = false
            }

            if (this.isValid == true) {
            window.dispatchEvent(new CustomEvent(this.pageReady))
            console.log('end true')
            return true
            } else if (this.isValid == false) {
                console.log('end false')
                return false
            }

        });

        //console.log(this.isValid)
    }

}

export { Validator }