window.addEventListener('outFocus', () => {
    console.log('yay')
})

if (this.inputOut) {
    this.inputBox.addEventListener('keyup', () => {
        console.log(this.inputOut)
        if(!(inputRes.valid)) {
            Validator.showErr(this)
            console.log(inputRes.valid)
            console.log(1)
            return; 
        } else {
            Validator.clearErr(this)
                return
        } 
    })
}


