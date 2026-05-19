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
import { pageState } from "./pageState.js"

console.log('loader imported')

let state = pageState

// let readState = state.get()

// pageState().subscribe('added subscriber')
// console.log(pageState().getSubscribers())
//console.log(pageState().subscribe(loadStore))

export const loader = async () =>  {
    //if (!(notification) == 'notifyLoader') return

    //this line models reading data from pageStore as a subscriber
    // const storeData = await import("../helpers/pageStore.js");

    //import 
    //let { default: pageLoader } = await import(storeData.infoPageStore.importPath);

    //read data: get state from pageState
    let readState = state.get()

    //import
    console.log(readState)
    let { default: pageLoader } = await import(readState.loaded ? readState.nextPagePath : readState.importPath);


    //read name of the module from the store
    //let loadHandler = storeData.infoPageStore.pageLoaderName;
    console.log(pageLoader)

    let { pageLoad, validationLoad } = await pageLoader()
    // console.log(await pageLoader())
    // console.log(pageLoad, validationLoad)

    //after importing, write the details to 'initPath' and 'validationInit'
    // in pageStore
    readState.pageInit = pageLoad
    readState.validationInit = validationLoad

    //update store
    readState.loaded = true;
    
    //console.log(readState)

    state.notifyNavigatorList()
}

let runLoadStore = loader
let unsubscribe = state.joinLoaderList(runLoadStore)

