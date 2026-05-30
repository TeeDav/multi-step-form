//inside 'loader', after reading details of 'pageSore'- 
// (after validation of each page)
//loader should also play loading animation of skeleton while loading
//and then navigator should remove it after it has rendered the information.

//say there's an import of pageStore
//*************
//import { infoPageStore } from "./pageStore.js";

//subscribe to pageStore so that the loadStore function runs whenever there is an update
//to validation state of each page
//const unsubscribe = pageStore.subscribe(loadStore)

// import { pageState } from "./pageState.js";
import { pageState } from "./pageState.js";
import { pageStore } from "./pageStore.js";

console.log('loader imported')

let tezzio = pageState

export const loader = async () =>  {
    //read data: get state from pageState
    let state = tezzio.get()

    //details of next page  
    const page = pageStore.currentPage.nextPage.page

    //import
    console.log(state)

    if (state.loaded == false) {
        state.loading = true
    } else {
        page.loading = true
    }

    let { default: pageLoader } = await import(state.loaded ? page.importPath : state.importPath);


    //read name of the module from the store
    //let loadHandler = storeData.infoPageStore.pageLoaderName;
    console.log(pageLoader)

    //add spinner here
    //

    let { pageLoad, validationLoad } = await pageLoader()

    //after importing, write the details to 'initPath' and 'validationInit'
    // in pageStore
    if (state.loaded == false) {
        state.pageInit = pageLoad
        state.validationInit = validationLoad
        
        //update state
        state.loading = false //not loading
        state.loaded = true;
        
        //notify navigator
        tezzio.notifyNavList()
    } else {
        try {
            page.pageInit = pageLoad
            page.validationInit = validationLoad
            page.loading = 'true' //not loading
            page.loaded = true
            console.log(page)
            //tezzio.notifyManager() this should stop the spinner animation
            //tezzio.notifyManager()
        } catch (err) {
            console.log(err)
        }
    }
}
let unsubscribe = tezzio.loaderList_add(loader)

