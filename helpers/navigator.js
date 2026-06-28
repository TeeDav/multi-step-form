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
import { waitForLoader, createSignal } from "./signal.js"

// import { pageState } from "./stateInit.js"

// import { pageState } from "./stateInit.js";

import animation_ from "../animations/pageTransitions.js";
console.log('navigator imported')

let tezzio = pageState

//subscribe to pageStore so that navigator functions runs whenever the next page has beeen
//lazy loaded and the current page has been validated

//************************************* */
//const unsubscribe = pageStore.subscribe(navigatorHelper) //this calls navigatorHelper everytime
//there's a change in pageStore

//initialize a holder for pageInit and validationInit
let pageInitHolder = null
let validationInitHolder = null
let firstLoad = true;

//container where modules will be appended
//this should run after DOMContentLoaded
export async function navigator() {
    //read data: get state from pageState
    // let state = tezzio.get()

    console.log(waitForLoader)

    //wait for loader to finish
    const baton = await waitForLoader()
    createSignal()

    //page to be added
    let state = pageStore.currentPage.nextPage.page
    console.log(state)

    if (firstLoad) {
        state = tezzio.get()
        // firstLoad = false
    }
    

    //get details of page to be removed
    let prevState = pageStore.currentPage.page
    console.log(prevState)

    const containerChild = document.getElementById('container-child');
    console.log(containerChild)

    //should read 'pageInit' and 'validationInit' in pageStore
    // let pageNav = infoPageStore.pageInit;
    // let validationLoad = infoPageStore.validationInit;

    //get page and validation init from state
    let pageNav = state.pageInit;
    console.log(state)
    console.log(pageNav)
    let validationLoad = state.validationInit;

    pageInitHolder = document.getElementById(pageNav);
    validationInitHolder = validationLoad;

    let removePage = ''
    //remove page
    if (!(prevState == 'head')) {
        console.log(prevState)
        // if (state.fromStorage) return
        try {
            removePage = prevState.pageInit()
            // let removeId = removePage.getAttribute('id')
            let pageId
            typeof(removePage) == 'object' ? pageId = document.getElementById(removePage.getAttribute('id')) 
            : pageId = document.getElementById(removePage)
            // let pageHolder = document.getElementById(removePage);
            console.log(pageId)
            pageId.remove()
            // document.getElementById(removeId).remove()
        } catch (err) {
            console.log(err)
        }
    }

    // if (!(pageInitHolder == null)) {
    //     console.log(pageInitHolder)
    //     pageInitHolder.remove()
    // }

    // if (pageNav !== prevState.pageInit) {}
            //bring in the new page
            if (!containerChild.contains(pageInitHolder)) { //this here
                //remove skeleton
                const skeleton = document.getElementById('skeleton');
                skeleton.innerHTML = '';

                try {
                    console.log(pageNav)
                    //containerChild.innerHTML = pageNav()
                    containerChild.appendChild(pageNav())
                    animation_.pageAnimIn(pageNav().getAttribute("id"))
                    validationLoad()
                    
                    console.log(pageStore.currentPage)
                    
                    if (firstLoad) {
                        firstLoad = false
                    } else {
                        //push details of next page from store to state
                        tezzio.update(pageStore.currentPage.nextPage.page)

                        //move pageStore to next page
                        pageStore.nextPage()
                    }

                } catch (error) {
                    console.log(error)
                    let state = tezzio.get()

                    if(error) {
                        if (!firstLoad) {
                            //reverse push details of next page from store to state
                            //tezzio.update(pageStore.currentPage.prevPage.page)
                        }

                        console.log('error occured')
                        console.log(tezzio.get())
                        //reverse state to previous page
                        console.log(pageStore.currentPage)
                        // if (state.fromStorage == true) {
                        //     tezzio.update(pageStore.currentPage.page)
                        // } else {
                        //     tezzio.update(pageStore.currentPage.prevPage.page)
                        // }
                        console.log(tezzio.get())
                    }

                }
            }

    //stop the spinner
    if(spinner.getState()) {
        spinner.setState(false)
    }

    //notify manager
    tezzio.notifyManager()

}

let unsubscribe = tezzio.joinNavList(navigator);