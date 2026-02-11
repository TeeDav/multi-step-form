class Validator {
    constructor([msgId, inputBox, errClass, errMsg, validateInput, pageReady]) {
        this.msgId = msgId,
        this.inputBox = inputBox,
        this.errClass = errClass,
        this.errMsg = errMsg,
        this.validateInput = validateInput,
        this.pageReady = pageReady,
        this.isValid = false

        //console.log(this.msgId)
        //construct stuff with the parameters
        
    }
    //method to validate goes here


    //static methods, to be accessed by Validator class only
    static showErr(input) {
        input.isValid = false
        console.log(input.msgId)
        document.querySelector(input.msgId).textContent = input.errMsg;
        input.inputBox.classList.add(input.errClass)
    }

    static clearErr(input) {
        input.isValid = true
        window.dispatchEvent(new CustomEvent(input.pageReady))
        document.querySelector(input.msgId).textContent = '';
        input.inputBox.classList.remove(input.errClass)
    }
    
    //this method performs validation, to be accessed from instantiated objects.
    validate() {
        this.inputBox.addEventListener('keyup', () => {
            console.log(this.inputBox.value)
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
                this.isValid = false
                return 
            }

        })

        console.log(this.isValid)

        if (this.isValid == true) {
            return true
        }
    }

}

export { Validator }