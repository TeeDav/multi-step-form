//subscribe to formStore.js
//send signal to navHelper after every navigation
//receive signals from 'loader' after it has imported modules of each page
//navigate after 'validation' has been completed on each page
//read 'pageInit' and 'validationInit' from pageStore
//ideally, should be a subscriber to pageStore


//inside 'navigator'
//say there's an import of pageStore
//import { infoPageStore } from "./pageStore.js";

import { pageState } from "./pageState.js"
import { pageStore } from "./pageStore.js";
import { spinner } from "./spinnerState.js";
// import { pageState } from "./stateInit.js"

// import { pageState } from "./stateInit.js";

import animation_ from "../animations/pageTransitions.js";
console.log('navigator imported')

let state = pageState

//subscribe to pageStore so that navigator functions runs whenever the next page has beeen
//lazy loaded and the current page has been validated

//************************************* */
//const unsubscribe = pageStore.subscribe(navigatorHelper) //this calls navigatorHelper everytime
//there's a change in pageStore

//initialize a holder for pageInit and validationInit
let pageInitHolder = null
let validationInitHolder = null

//container where modules will be appended
//this should run after DOMContentLoaded
export async function navigator() {
    //read data: get state from pageState
    let readState = state.get()
    console.log(readState)

    //get details of page to be removed. state has been updated
    //to next page
    let prevState = pageStore.currentPage.prevPage.page


    const containerChild = document.getElementById('container-child');
    console.log(containerChild)

    //should read 'pageInit' and 'validationInit' in pageStore
    // let pageNav = infoPageStore.pageInit;
    // let validationLoad = infoPageStore.validationInit;

    //get page and validation init from state
    let pageNav = readState.pageInit;
    console.log(readState)
    console.log(pageNav)
    let validationLoad = readState.validationInit;

    pageInitHolder = document.getElementById(pageNav);
    validationInitHolder = validationLoad;

    let removePage = ''
    //remove page
    if (!(prevState == 'head')) {
        console.log(readState)
        // if (readState.fromStorage) return
        try {
            removePage = prevState.pageInit()
            console.log(removePage)
            let pageId
            typeof(removePage) == 'object' ? pageId = document.getElementById(eval(removePage).getAttribute('id')) 
            : pageId = document.getElementById(removePage)
            // let pageHolder = document.getElementById(removePage);
            console.log(pageId)
            pageId.remove()
        } catch (err) {
            console.log(err)
        }
    }

    // if (!(pageInitHolder == null)) {
    //     console.log(pageInitHolder)
    //     pageInitHolder.remove()
    // }

    //bring in the new page
    if (!containerChild.contains(pageInitHolder)) {
        //remove skeleton
        const skeleton = document.getElementById('skeleton');
        skeleton.innerHTML = '';

        console.log(pageNav)
        //containerChild.innerHTML = pageNav()
        containerChild.appendChild(pageNav())
        animation_.pageAnimIn(pageNav().getAttribute("id"))
        validationLoad()
    }

    //stop the spinner
    if(spinner.getState()) {
        spinner.setState(false)
    }

    //notify manager
    state.notifyManager()

}

let unsubscribe = state.joinNavList(navigator);