//navHelper should serve as a reducer for formStore.js
//it should update the store with the details of each page
//navHelper should subscribe to formStore
//it should also receive signals from 'navigator' in order to 
//update pageStore after every navigation


// import { infoPageStore } from "./pageStore.js"
import { pageState } from "./pageState.js"
//import { pages } from "../pageList.js"
// import { pageState } from "./stateInit.js"
import { pageStore } from "./pageStore.js"


console.log('page state helper')

pageStore.setCurrentPage('#0034abc45')
console.log(pageStore.currentPage.nextPage.page)
// pages.display()
// pages.setCurrentPage('767673')
// console.log(pages.currentPage)
// import { pageState } from "./pageState.js"

// let state = pageState()

//read curent state from store and decide what page to load

export function pageStateHelper() {

    let state = pageState


    console.log(state)

    let newState = {
        pageId: '',
        hasValidation: '',
        validateOn: '',
        validated: '',
        lazyLoaded: '',
        loaded: '',
        currentPage: '',
        nextPage: '',
        nextPageId: '',
        pageLoaderName: '',
        importPath: '../preLoaders/infoPreLoader.js',//path to module that holds imports
        pageInit: '',
        validationInit: '',
        nextPageInit: ''
    }

    //state.subscribe('added subscriber')
    //console.log(state.getSubscribers())
    //console.log(state.subscribers)


    // let currentState = state.get()
    
    //send a notification to loader to load the current page
    state.notifyLoaderList();
}
