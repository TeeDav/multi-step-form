//pageStore should default to details of infoPage on forst load, and when 
//no data is found in localStorage

let pageStore = {
    pageId: '',
    hasValidation: '',
    validateOn: '',
    validated: '',
    lazyLoaded: '',
    loaded: '',
    currentPage: '',
    nextPage: '',
    nextPageId: '',
    importPath: 'path to module that holds imports',
    initPath: ''
}

export let infoPage = {
    pageId: '#0034abc45',
    hasValidation: true,
    validateOn: 'focusOut',
    validated: false,
    lazyLoaded: false,
    loaded: false,
    currentPage: false,
    nextPage: plansPage,
    nextPageId: '#0234rdf89',
    importPath: 'path to module that holds imports',
    initPath: 'path to module that initializes the page and its validation logic'
}


//lazyLoader or 'loader' should do the loading (may be asynchronous)
//it should read pageStore to load the module that holds imports declaration
//for the page
let importLoad = async () => {
    let importHolder = eval(pageStore.importPath)
    let loading = await importHolder()
}


//path should be a module that hold imports of infoPage and infoValidation
//then navigator should use this path to call the module
//first it should read the pageStore, or use a default on first-load
let initLoad = async () => {
    let initHolder = eval(pageStore.initPath)
    let loading = await initHolder()
}
//navigator should also unmount previous pages from app.js

//on first load, infoPage should be default
//at tis point there is no 'current page'
//  1. loader should load the imports
//  2. navigator should then initialise the modules

//there should be some communication between 'loader' and 'navigator'
//mounting of modules by navigator should happen after loader has executed imports

//loader should import the modules of the next page after validati
//of each page. 


//thoughts***************

//in pageStore.js there should be dedicated subscriber lists
//for example, loader.js should a separate subscriber list
//that navigator.js subscribes to, so that whenever loader.js loads
//resources, it pushes a defined update or notification to its
//subscribers.

// there should be a state (e.g canNavigate() in validationState.js)
// and service worker module that tracks the performance of the 
// different modules to ensure that they work as orchestrated 
// within a defined timeframe and issue retries when there is 
// failure.