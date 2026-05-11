//inside 'loader', after reading details of 'pageSore'- 
// (after validation of each page)
//say there's an import of pageStore
//*************
//import { infoPageStore } from "./pageStore.js";

//subscribe to pageStore so that the loadStore function runs whenever there is an update
//to validation state of each page
//const unsubscribe = pageStore.subscribe(loadStore)

export async function loadStore() {
    //this line models reading data from pageStore as a subscriber
    const storeData = await import("../helpers/pageStore.js");

    //import 
    let { default: pageLoader } = await import(storeData.infoPageStore.importPath);

    //read name of the module from the store
    //let loadHandler = storeData.infoPageStore.pageLoaderName;
    console.log(pageLoader)

    //call the funtion using window[string object]()
    let { pageLoad, validationLoad } = await pageLoader()
    console.log(await pageLoader())
    console.log(pageLoad, validationLoad)

    //after importing, write the details to 'initPath' and 'validationInit'
    // in pageStore
    storeData.infoPageStore.pageInit = pageLoad
    storeData.infoPageStore.validationInit = validationLoad

    //update store
    // infoPageStore.loaded = true;
    
    console.log(storeData.infoPageStore)
}
