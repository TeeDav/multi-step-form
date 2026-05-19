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

let subscribers = new Set();
console.log('declaring new set')

let loaderList = new Set();

let navigatorList = new Set();

export const stateInit = (state = JSON.parse(localStorage.getItem('pageState')) || initialState) => {
    
    if (state == initialState) {
        console.log(localStorage.setItem('pageState', JSON.stringify(state)))
        localStorage.setItem('pageState', JSON.stringify(state)) ? console.log('localStorage') : console.log('no storage')
        let viewState = localStorage.getItem('pageState')
        console.log(viewState)
    }
    
    function get() {
        return state
    } 

    function unsubscribe(fn) {
        subscribers.delete(fn)
    }

    function joinLoaderList(fn) {
        console.log('subscriber added')
        loaderList.add(fn)
        //console.log(getSubscribers())
        //return () => unsubscribe(fn)
    }

    function joinNavigatorList(fn) {
        console.log('navigator added added')
        navigatorList.add(fn)
        //console.log(getSubscribers())
        //return () => unsubscribe(fn)
    }

    function getSubscribers() {
        return subscribers
    }

    function notifyLoaderList() {
        loaderList.forEach((subscriber) => {
            try {
                subscriber()
            } catch(err) {
                console.log(err)
            }
        })
    }

    function notifyNavigatorList() {
        navigatorList.forEach((subscriber) => {
            try {
                subscriber()
            } catch(err) {
                console.log(err)
            }
        })
    }

    function update(newState) {
        state = { ...newState }
        localStorage.setItem('pageState', JSON.stringify(state))
        console.log(state)
        notify()
    }

    return { 
        get, joinLoaderList, notifyLoaderList, 
        joinNavigatorList, notifyNavigatorList, 
        update, subscribers, getSubscribers 
    }
}

export const pageState = stateInit()