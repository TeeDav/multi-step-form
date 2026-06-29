//pageStore should default to details of infoPage on forst load, and when 
//no data is found in localStorage

import { PageList } from "../pageList.js"

const pageState = {
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

 const addonsStore = {
    pageName: 'addonPage',
    pageId: '#0256t13qu',
    hasValidation: true,
    validateOn: 'focusOut',
    validated: false,
    lazyLoaded: false,
    loaded: false,
    loading: false,
    currentPage: false,
    pageLoaderName: 'addonsPageLoader',
    importPath: "../preLoaders/addonsPreLoader.js", //loader
    pageInit: "", //navigator
    validationInit: '', //navigator
    nextPage: 'addons',
    // nextPageId: 'addons.pageId',
    // nextPagePath: 'addons.importPath', //'loader' uses this to lazy load
    // nextPageInit: '' //'loader' stores loaded module here, and navigator should use this to mount stuff
}

 const plansPageStore = {
    pageName: 'plansPage',
    pageId: '#0234rdf89',
    hasValidation: true,
    validateOn: 'focusOut',
    validated: false,
    lazyLoaded: false,
    loaded: false,
    loading: false,
    currentPage: false,
    pageLoaderName: 'plansPageLoader',
    importPath: "../preLoaders/plansPreLoader.js", //loader
    pageInit: "", //navigator
    validationInit: '', //navigator
    nextPage: addonsStore
    // nextPageId: 'addons.pageId',
    // nextPagePath: 'addons.importPath', //'loader' uses this to lazy load
    // nextPageInit: '' //'loader' stores loaded module here, and navigator should use this to mount stuff
}

export const infoPageStore = {
    pageName: 'infoPage',
    pageId: '#0034abc45',
    hasValidation: true,
    validateOn: 'focusOut',
    validated: false,
    lazyLoaded: false,
    loaded: false,
    loading: false,
    currentPage: false,
    pageLoaderName: 'infoPageLoader',
    importPath: "../preLoaders/infoPreLoader.js", //loader
    pageInit: "", //navigator
    validationInit: '', //navigator
    nextPage: plansPageStore
    // nextPageId: plansPageStore.pageId,
    // nextPagePath: 'plansPageStore.importPath', //'loader' uses this to lazy load
    // nextPageInit: '' //'loader' stores loaded module here, and navigator should use this to mount stuff
    //                 //for the next page when user clicks 'next'
}


const pageArray = [
    infoPageStore,
    plansPageStore,
    addonsStore
    
]

export const pageStore = new PageList()
pageStore.insertArray(pageArray)

//'loader' should import a fn that holds the page and its
//validation logic
//'navigator' should run that function when it is
//time

//so there should be a central store for 'navigator'
//to read what function to call 


//this code should be stored in 'importPath' of infoPageStore
//every page should have this, say there's a registry
// import { infoPage } from "./pages/infoPage.js";
// import { infoValidation } from "../validation/infoValidation";

// export async function infoPageLoader() {
//     //this should await import of the page and validation
//     const page = await import("../pages/infoPage.js");
//     const pageLoad = page.infoPage
//     const validation = await import("../validation/infoValidation.js");
//     const validationLoad = validation.infoValidation
    
//     return { pageLoad, validationLoad }
// }

// //inside 'loader', after reading details of 'pageSore'- 
// // (after validation of each page)
// //say there's an import of pageStore
// import { infoPageStore } from "";

// //subscribe to pageStore so that the loadStore function runs whenever there is an update
// //to validation state of each page
// const unsubscribe = pageStore.subscribe(loadStore)

// async function loadStore() {
//     //this line models reading data from pageStore as a subscriber
//     const storeData = await import("./helpers/pageStore.js");

//     //import 
//     let pageLoader = await import(storeData.pageStore.importPath);

//     //read name of the module from the store
//     let loadHandler = storeData.pageStore.pageLoaderName;

//     //call the funtion using window[string object]()
//     let { pageInit, validationInit } = window[loadHandler]()

//     //after importing, write the details to 'initPath' and 'validationInit'
//     // in pageStore
//     storeData.pageStore.pageInit = pageInit
//     storeData.pageStore.validationInit = validationInit   
// }



// //inside 'navigator'
// //say there's an import of pageStore
// import { infoPageStore } from "";

// //subscribe to pageStore so that navigator functions runs whenever the next page has beeen
// //lazy loaded and the current page has been validated
// const unsubscribe = pageStore.subscribe(navigatorHelper) //this calls navigatorHelper everytime
// //there's a change in pageStore

// //initialize a holder for pageInit and validationInit
// var pageInitHolder = ''
// var validationInitHolder = ''

// //container where modules will be appended
// const containerChild = document.getElementById('container-child');

// async function navigatorHelper(pageInit, validationInit) {
//     //should read 'pageInit' and 'validationInit' in pageStore
//     if (!(pageInitHolder == '')) {
//         pageInitHolder.remove()
//     }

//     pageInitHolder = document.getElementById(pageInit);
//     validationInitHolder = validationInit;

//     //bring in the new module
//     containerChild.appendChild(pageInit())
//     animation_.pageAnimIn(pageInit().getAttribute("id"))
//     validationInit()
// }