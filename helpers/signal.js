let resolveLoader;
let loaderFinished;

export function createSignal() {
    loaderFinished = new Promise(resolve => {
        resolveLoader = resolve
        console.log('resolved')
    })
}

export function waitForLoader() {
    return loaderFinished
}

export function finishedLoading(data) {
    resolveLoader(data)
}

createSignal();