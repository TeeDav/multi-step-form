let ready = true;
let currentDispatchId = null;

export function setReady(id) {
    console.log('set')
    ready = true;
    currentDispatchId = id;
}

export function unsetReady() {
    ready = false;
}

export function canNavigate(id) {
    return ready && id == currentDispatchId
}