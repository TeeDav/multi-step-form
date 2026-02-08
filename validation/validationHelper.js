class Validator {
    constructor([msgId, inputBox, errClass, errMsg, validateInput]) {
        this.msgId = msgId,
        this.inputBox = inputBox,
        this.errClass = errClass,
        this.errMsg = errMsg,
        this.validateInput = validateInput

        console.log(this.msgId)
        //construct stuff with the parameters
        
    }
    //method to validate goes here

    //static methods, to be accessed by Validator class only
    static showErr(input) {
        console.log(input.msgId)
        document.querySelector(input.msgId).textContent = input.errMsg;
        input.inputBox.classList.add(input.errClass)
    }

    static clearErr(input) {
        document.querySelector(input.msgId).textContent = '';
        input.inputBox.classList.remove(input.errClass)
    }
    
    //this method performs validation, to be accessed from instantiated objects.
    validate() {
        this.inputBox.addEventListener('keyup', () => {
            let value = this.inputBox.value;

            if(!(value == '')) {
                const inputRes = this.validateInput(value);

                if(!inputRes.valid) {
                    if (inputRes.valid) {
                        Validator.clearErr(this)
                        return
                    }

                    this.inputBox.addEventListener('focusout', () => {
                        Validator.showErr(this)
                    })

                    return;
                } else if (inputRes.valid) {
                    if (!inputRes.valid) {
                        Validator.showErr(this)
                        return
                    }

                    Validator.clearErr(this)
                    this.inputBox.addEventListener('focusout', () => {
                        Validator.clearErr(this)
                    }) 
                    return                   
                }

                console.log(`Input is valid`);

                return
            } else if (value == '') {
                value = ''
                document.querySelector(this.msgId).textContent = '';
                if (this.inputBox.classList.contains(this.errClass) || !(this.inputBox.classList.contains(this.errClass))) {
                    this.inputBox.classList.remove(this.errClass)
                }
                this.inputBox.addEventListener('focusout', () => {
                    Validator.clearErr(this)
                })
                return
            }

        })
    }

}

export { Validator }