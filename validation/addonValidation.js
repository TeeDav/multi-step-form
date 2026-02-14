import { addOnId } from "../components/addOn.js"
import { setReady, unsetReady } from "./validationState.js"

export function addonValidation() {
    const addOn = document.querySelectorAll(`#${addOnId}`)

    console.log(addOn)

    addOn.forEach(addon => {
        addon.addEventListener('click', (e) => {
            console.log('addon clicked')
            document.dispatchEvent(new CustomEvent('addonPageReady'))
        })
    })

    let dispatchReady = false
    let dispatched = false
    let b = addOn.length
    let a = 0
    console.log(addOn)

    document.addEventListener('addonPageReady', () => {
        addOn.forEach(addon => {
            console.log(addon)

            if (!addon.classList.contains('focused')) {
                a = a + 1;
            }

            if (addon.classList.contains('focused')) {
                if (dispatched == true) return
                // dispatchReady = true

                console.log('should fire');

                const id = crypto.randomUUID();
                console.log(id)
                setReady(id);

                window.dispatchEvent(new CustomEvent('nextPageReady', { detail: { id }}))

                dispatched = true
            }
        })

        if (a == b) {
            console.log(a)
            console.log('none is selected')
            a = 0
            unsetReady()
            dispatched = false
        }

        a = 0;

        console.log(a)
        })
}



