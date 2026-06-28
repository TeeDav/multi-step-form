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
import { finishedLoading, createSignal } from "./signal.js";

console.log('loader imported')

const tezz = pageState;


export const loader = async () =>  {

    let tezzio = tezz

    //read data: get state from pageState
    let state = tezzio.get()

    //details of next page
    //I should subscribe to pageStore here.
    let page = pageStore.currentPage.nextPage?.page
    console.log(pageStore.currentPage)
    //function that should be called when pageStore is updated
    function storeDetails() {
        page = pageStore.currentPage.nextPage.page
    }
    
    //pageStore.subscribe(storeDetails)

    //import
    console.log(state)

    if (state.loaded == false) {
        // state.loading = true
        tezzio.update({loading: true}) //we're loading the current page
    } else {
        // page.loading = true 
        pageStore.updateNextPage({loading: true}, storeDetails) //we're loading the next page
    }

    //we add a condition to import a page that has been loaded
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
        // state.pageInit = pageLoad
        tezzio.update({pageInit: pageLoad})

        // state.validationInit = validationLoad
        tezzio.update({validationInit: validationLoad})
        
        console.log(tezzio.get())

        //update state
        // state.loading = false //not loading
        tezzio.update({loading: false}) //not loading
        // state.loaded = true;
        tezzio.update({loaded: true}) //not loading

        //update pageStore
        pageStore.updateCurrentPage(tezzio.get())
        console.log(pageStore.currentPage.page)

        if (tezzio.get().fromStorage == true) {
            // pageStore.updateNextPage(tezzio.get())
            // tezzio.update({fromStorage: false})
        }
        
        //notify navigator
        tezzio.notifyNavList()
    } else {
        try {
            // page.pageInit = pageLoad
            pageStore.updateNextPage({pageInit: pageLoad}, storeDetails)
            // page.validationInit = validationLoad
            pageStore.updateNextPage({validationInit: validationLoad}, storeDetails)
            // page.loading = 'false' //not loading
            pageStore.updateNextPage({loading: false}, storeDetails) //not loading
            // page.loaded = true
            pageStore.updateNextPage({loaded: true}, storeDetails) //loaded
            console.log(page)

            //update pageStore
            pageStore.updateCurrentPage(tezzio.get())
            console.log(pageStore.currentPage.page)

            //tezzio.notifyManager() this should stop the spinner animation
            //tezzio.notifyManager()

        } catch (err) {
            console.log(err)
        }
    }

    //finished loading - signal to to B
    finishedLoading(true)

    //prepare for next run
    // createSignal()
}
let unsubscribe = tezz.loaderList_add(loader)

