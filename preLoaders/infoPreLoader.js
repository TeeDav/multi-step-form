//this code's path should be stored in 'importPath' of infoPageStore
//every page should have this, say there's a registry
//import { infoPage } from "../pages/infoPage.js";
//import { infoValidation } from "../validation/infoValidation.js";

export default async function infoPageLoader() {
    //this should await import of the page and validation
    const page = await import("../pages/infoPage.js");
    console.log(page);
    const pageLoad = page.infoPage;
    const validation = await import("../validation/infoValidation.js");
    const validationLoad = validation.infoValidation;
    
    console.log(pageLoad, validationLoad);

    return { pageLoad, validationLoad }
}