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

let Manager = new Set();
console.log('declaring new set')

let loaderList = new Set();

let navigatorList = new Set();

export const stateInit = async (state = JSON.parse(localStorage.getItem('pageState')) || initialState) => {
    
    function update(newState) {
        state = { ...state, ...newState }
        console.log(get())
        localStorage.setItem('pageState', JSON.stringify(state))
        console.log(state)
        //notify()
    }

    if (state == initialState) {
        console.log(localStorage.setItem('pageState', JSON.stringify(state)))
        localStorage.setItem('pageState', JSON.stringify(state))
        let viewState = localStorage.getItem('pageState')
        console.log(viewState)
    } else {
        update({ loaded: false, fromStorage: true })
    }
    
    function get() {
        return state
    } 

    function unsubscribe(fn) {
        //subscribers.delete(fn)
    }

    function manager_add(fn) {
        console.log('manager added')
        Manager.add(fn)
        //console.log(getSubscribers())
        //return () => unsubscribe(fn)
    }

    function loaderList_add(fn) {
        console.log('subscriber added')
        loaderList.add(fn)
        //console.log(getSubscribers())
        //return () => unsubscribe(fn)
    }

    function joinNavList(fn) {
        console.log('navigator added added')
        navigatorList.add(fn)
        //console.log(getSubscribers())
        //return () => unsubscribe(fn)
    }

    function getSubscribers() {
        //return subscribers
    }

    function notifyManager(param) {
        Manager.forEach((subscriber) => {
            try {
                subscriber(param)
            } catch(err) {
                console.log(err)
            }
        })
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

    function notifyNavList() {
        navigatorList.forEach((subscriber) => {
            try {
                subscriber()
            } catch(err) {
                console.log(err)
            }
        })
    }

    

    return { 
        get, manager_add, notifyManager, 
        loaderList_add, notifyLoaderList, 
        joinNavList, notifyNavList, 
        update, getSubscribers 
    }
}

export const pageState = await stateInit()