//subscribe to formStore.js
//send signal to navHelper after every navigation
//receive signals from 'loader' after it has imported modules of each page
//navigate after 'validation' has been completed on each page
//read 'pageInit' and 'validationInit' from pageStore
//ideally, should be a subscriber to pageStore


//inside 'navigator'
//say there's an import of pageStore
import { infoPageStore } from "./pageStore.js";
import animation_ from "../animations/pageTransitions.js";


//subscribe to pageStore so that navigator functions runs whenever the next page has beeen
//lazy loaded and the current page has been validated

//************************************* */
//const unsubscribe = pageStore.subscribe(navigatorHelper) //this calls navigatorHelper everytime
//there's a change in pageStore

//initialize a holder for pageInit and validationInit
var pageInitHolder = ''
var validationInitHolder = ''

//container where modules will be appended
//this should run after DOMContentLoaded
const containerChild = document.getElementById('container-child');
console.log(containerChild)

export async function navigator() {
    //should read 'pageInit' and 'validationInit' in pageStore
    let pageNav = infoPageStore.pageInit;
    let validationLoad = infoPageStore.validationInit;

    if (!(pageInitHolder == '')) {
        pageInitHolder.remove()
    }

    pageInitHolder = document.getElementById(pageNav);
    validationInitHolder = validationLoad;

    //bring in the new module
    if (!containerChild.contains(pageInitHolder)) {
        //remove skeleton
        const skeletonHold = document.getElementById('skeleton');
        skeletonHold.innerHTML = '';

        //containerChild.innerHTML = pageNav()
        containerChild.appendChild(pageNav())
        animation_.pageAnimIn(pageNav().getAttribute("id"))
        validationLoad()
    }

    //send signal to module to confirm
}