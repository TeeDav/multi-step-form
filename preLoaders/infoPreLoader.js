//this code's path should be stored in 'importPath' of infoPageStore
//every page should have this, say there's a registry
//import { infoPage } from "../pages/infoPage.js";
//import { infoValidation } from "../validation/infoValidation.js";

const skeletonSection = `<section class="anim">
          <div class="form-container notes">
            <form action="pages/select-your-plan.html" class="skeleton">
              <div class="form-control">
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="" disabled="true">
              </div>
              <div class="form-control">
                <label for="email">Email Address</label>
                <input type="email" name="email" id="" placeholder="">
              </div>
              <div class="form-control">
                <label for="phone">Phone Number</label>
                <input type="text" name="phone" id="" placeholder="">
              </div>
            </form>
          </div>
        </section>`;

//console.log(skeletonHold)

export default async function infoPageLoader() {
    const skeletonHold = document.getElementById('skeleton');
    skeletonHold.innerHTML = skeletonSection;

    //this should await import of the page and validation
    const page = await import("../pages/infoPage.js");
    console.log(page);
    const pageLoad = page.infoPage;
    const validation = await import("../validation/infoValidation.js");
    const validationLoad = validation.infoValidation;
    
    console.log(pageLoad, validationLoad);

    return { pageLoad, validationLoad }
}