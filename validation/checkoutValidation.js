import { setReady } from "./validationState.js";

export function checkoutValidation() {
    window.addEventListener('checkoutReady', () => {
        const id = crypto.randomUUID();
        console.log(id)
        setReady(id);

        window.dispatchEvent(new CustomEvent('nextPageReady', { detail: { id }}))
    })
}