let state = false
let check = false

const spinnerState = () => {

    function checkSpinner(_value) {
        check = _value
    }

    function getCheck() {
        return check
    }

    function setState(_state) {
        let spinnerWrapper = document.getElementById('spinner')
        if(_state) {
            //display spinner or loading in button
            spinnerWrapper.style.display = 'inline-block'
            state = true
        } else {
            spinnerWrapper.style.display = 'none'
            state = false
        }
    }
    
    function getState() {
        return state
    }

    return { setState, getState, checkSpinner, getCheck, check }
}

export const spinner = spinnerState()

