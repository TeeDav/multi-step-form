class Validator {
    constructor([msgId, inputBox, errClass, errMsg, validateInput, pageReady]) {
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
        input.isValid = false
        //console.log(input.errMsg)
        document.querySelector(input.msgId).textContent = input.errMsg;
        input.inputBox.classList.add(input.errClass)
    }

    static clearErr(input) {
        //console.log(input.isValid)
        if(!(input.isValid)) {
            document.querySelector(input.msgId).textContent = '';
            input.inputBox.classList.remove(input.errClass)
            window.dispatchEvent(new CustomEvent(input.pageReady))
        }
    
        input.isValid = true
    }
    
    //this method performs validation, to be accessed from instantiated objects.
    validate() {
        this.inputBox.addEventListener('keyup', () => {
            ////console.log(this.inputBox.value);
            let value = this.inputBox.value;
            // let inputOut = false

            if(!(value == '')) {
                let inputRes = this.validateInput(value);
                ////console.log(inputRes.valid)

                if((inputRes.valid)) {
                    Validator.clearErr(this)
                    //console.log(inputRes.valid)
                    //console.log('true')
                    //this.inputOut = true
                    this.inputBox.dispatchEvent(new CustomEvent('outFocus', { detail: this.inputOut }))  
                    return; 
                } else if(!(inputRes.valid)) {
                    //console.log('not true')
                    Validator.showErr(this)
                    this.inputBox.dispatchEvent(new CustomEvent('outFocus', { detail: this.inputOut }))   
                    return
                }   


                this.inputBox.addEventListener('outFocus', () => {
                    this.inputBox.addEventListener('keyup', () => {
                        let inputRes = this.validateInput(this.inputBox.value);
                        //console.log('keyup', this.inputOut, inputRes.valid)
                        if((inputRes.valid)) {
                            Validator.clearErr(this)
                            //console.log(inputRes.valid)
                            //console.log(1)
                            return; 
                        } else if(!(inputRes.valid)) {
                            Validator.showErr(this)
                            return
                        } 
                    })
                })

                this.inputBox.addEventListener('focusout', () => {
                    this.inputOut = true
                    //console.log(inputRes.valid)

                    if((inputRes.valid)) {
                        Validator.clearErr(this)
                        //console.log(inputRes.valid)
                        //console.log('true')
                        //this.inputOut = true
                        this.inputBox.dispatchEvent(new CustomEvent('outFocus', { detail: this.inputOut }))  
                        return; 
                    } else if(!(inputRes.valid)) {
                        //console.log('not true')
                        Validator.showErr(this)
                        this.inputBox.dispatchEvent(new CustomEvent('outFocus', { detail: this.inputOut }))   
                        return
                    }   
                })

            } else if (value == '') {
                value = ''
                document.querySelector(this.msgId).textContent = '';
                if (this.inputBox.classList.contains(this.errClass) || !(this.inputBox.classList.contains(this.errClass))) {
                    this.inputBox.classList.remove(this.errClass)
                }
                this.inputBox.addEventListener('focusout', () => {
                    Validator.clearErr(this)
                })
                this.isValid = false
                return 
            }

        })

        //console.log(this.isValid)

        if (this.isValid == true) {
            //window.dispatchEvent(new CustomEvent(input.pageReady))
            return true
        }
    }

}

export { Validator }