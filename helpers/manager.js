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
let firstLoad = true
// pageStore.setCurrentPage(state.pageId)


export const manager = (source) => {
    console.log('manager working')
    console.log(source)

    if (firstLoad){
        // pageStore.setCurrentPage(state.pageId)
        // tezzio.notifyLoaderList();
        // firstLoad = false
    }

    //call loader to start importing module of next page
    try {
        //tezzio.notifyLoaderList()
    } catch(err) {
        console.log(err)
    }
}

tezzio.manager_add(manager)
