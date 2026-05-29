//navHelper should serve as a reducer for formStore.js
//it should update the store with the details of each page
//navHelper should subscribe to formStore
//it should also receive signals from 'navigator' in order to 
//update pageStore after every navigation

import { pageState } from "./pageState.js"
import { pageStore } from "./pageStore.js"
import { spinner } from "./spinnerState.js"


console.log('page state helper')

let tezzio = pageState

export function pageStateHelper() {

    let state = tezzio.get()

    console.log(state)

    pageStore.setCurrentPage(state.pageId)
    //console.log(pageStore.currentPage.nextPage)
    
    // let navHolder = document.getElementById('nav-child')
    // console.log(navHolder.childNodes[1])
    // navHolder.childNodes[1].addEventListener('click', () => {
    //     console.log('next button clicked')
    // })
    //send a notification to loader to load the current page
    tezzio.notifyLoaderList();
}
