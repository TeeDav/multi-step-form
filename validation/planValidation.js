import { setReady } from "./validationState.js";

export function planValidation() {
    window.addEventListener('plansPageReady', () => {
        const id = crypto.randomUUID();
        console.log(id)
        setReady(id);

        window.dispatchEvent(new CustomEvent('nextPageReady', { detail: { id }}))
    })
}

  

