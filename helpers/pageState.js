let initialState = {
    pageName: 'infoPage',
    pageId: '#0034abc45',
    hasValidation: true,
    validateOn: 'focusOut',
    validated: false,
    lazyLoaded: false,
    loaded: false,
    currentPage: false,
    pageLoaderName: 'infoPageLoader',
    importPath: "../preLoaders/infoPreLoader.js", //loader
    pageInit: "", //navigator
    validationInit: '', //navigator
    nextPage: 'plansPageStore',
    nextPageId: 'plansPageStore.pageId',
    nextPagePath: 'plansPageStore.importPath', //'loader' uses this to lazy load
    nextPageInit: '' //'loader' stores loaded module here, and navigator should use this to mount stuff
                    //for the next page when user clicks 'next'
}



export const pageState = (state = localStorage.getItem('pageState') || initialState) => {
    
    if (state == initialState) {
        state = {id: 23}
        console.log(state)
        localStorage.setItem('pageState', JSON.stringify(state)) ? console.log('localStorage') : console.log('no storage')
        let viewState = localStorage.getItem('pageState')
        console.log(viewState)
    }
    
    function get() {
        return state
    }
 
    let subscribers = new Set();

    function unsubscribe(fn) {
        subscribers.delete(fn)
    }

    function subscribe(fn) {
        subscribers.add(fn)
        return unsubscribe(fn)
    }

    function notify() {
        subscribers.forEach;((subscriber) => {
            subscriber()
        })
    }

    function update(newState) {
        state = { ...newState }
        localStorage.setItem('pageState', JSON.stringify(state))
        console.log(state)
        notify()
    }

    return { get, subscribe, notify, update }
}