//navHelper should serve as a reducer for formStore.js
//it should update the store with the details of each page
//navHelper should subscribe to formStore
//it should also receive signals from 'navigator' in order to 
//update pageStore after every navigation


import { infoPageStore } from "./pageStore.js"
import { pageState } from "./pageState.js"

let pageHelper = pageState()

// pageState().update(newState);

export function pageStateHelper() {

    //console.log(pageState)
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

    pageHelper.update(infoPageStore)
}
