import { addOnId } from "../components/addOn.js"
import { pageState } from "../helpers/pageState.js";
import { setReady, unsetReady } from "./validationState.js"

const tezzio = pageState

export function addonValidation() {

    let addOn = document.querySelectorAll(`#${addOnId}`)

    let dispatchReady = false
    let dispatched = false
    let b = addOn.length
    let a = 0
    console.log(addOn)

    addOn.forEach(addon => {
        addon.addEventListener('click', (e) => {
            console.log('addon clicked')
            document.dispatchEvent(new CustomEvent('addonPageReady'))
        })
    })

    document.addEventListener('addonPageReady', () => {
        let addOn = document.querySelectorAll(`#${addOnId}`)
        console.log(addOn)
        addOn.forEach(addon => {
            console.log(addon)

            if (!addon.classList.contains('focused')) {
                a = a + 1;
            } else {
                if (dispatched == true) return
                // dispatchReady = true

                // console.log('should fire');

                // const id = crypto.randomUUID();
                // console.log(id)
                // setReady(id);

                // window.dispatchEvent(new CustomEvent('nextPageReady', { detail: { id }}))

                //validation is true here, update state
                tezzio.update({validated: true})
                tezzio.notifyLoaderList()

                dispatched = true
            }
        })

        if (a == b) {
            console.log(a)
            console.log('none is selected')
            a = 0
            unsetReady()
            dispatched = false

            //validation is false here, update state
            tezzio.update({validated: false})
            // tezzio.notifyLoaderList()
        }

        a = 0;

        console.log(a)
        })
}



