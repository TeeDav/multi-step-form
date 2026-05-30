//this should orchestrate stuff
//watch and issue commands
//should watch out for page validation before calling navigator()
//and pageStateHelper() to update state when the 'next' button is
//clicked
//delay caling navigator() after the 'next' button is clicked
//till loader() has finished loading the imports 

//interface between ui and state

import { pageState } from "./pageState.js"
import { pageStore } from "./pageStore.js"
import { spinner } from "./spinnerState.js"

let tezzio = pageState
let state = tezzio.get()

// pageStore.setCurrentPage(state.pageId)


export const manager = (source) => {
    console.log('manager working')
    console.log(source)
    //console.log(document.getElementsByClassName('form-control'))

    //details of next page  
    //const page = pageStore.currentPage.nextPage.page

    console.log(state.validated)
    //check if validation is true
    // if ((state.validated == true) && (source == 'btnClick')) {
    //     //display spinner
    //     spinner.setState(true)
    // }

    //call loader to start importing module of next page
    try {
        tezzio.notifyLoaderList()
    } catch(err) {
        console.log(err)
    }
}

tezzio.manager_add(manager)
