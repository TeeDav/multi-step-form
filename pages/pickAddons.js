import { addOn } from "../components/addOn.js";
import { server } from "../server.js";

function addOnsPage() {
    const addOnSection = document.createElement('section');
    addOnSection.id = "add-on-section"
    addOnSection.classList.add("anim")
    addOnSection.classList.add("noshow")

    const addOnBody = document.createElement('div')
    addOnBody.classList = 'add-ons-body'

    // console.log(server().addons)
    let addOnArr = []

    server().addons.forEach(addon => {
        const addonDetails = addOn(addon)
        addOnArr.push(addonDetails)
        // console.log(details)
        addOnBody.appendChild(addonDetails)
    })

    console.log(addOnBody)

    addOnSection.appendChild(addOnBody)

    const checkInput = document.getElementsByTagName('input')
    console.log(checkInput)
    const checkArr = [...checkInput]
    console.log(checkArr[2])
    
    //console.log(checkInput.parentElement.parentElement)

    
    //implement sending user add-on selection to a store in server.js
    //check for parent.parentElement of checkbox that is checked attribute 

    // let storeFocus;
    // let keepFocus;

    // for(let i=0; i<addOnArr.length; i++) {
    //     let u = i;
    //     let z;
    //     addOnArr[i].addEventListener("click", function (e) {
    //         addOnArr[u].classList.add('focused');
    //         console.log(e.target)
    //         storeFocus = e.target;
    //         e.stopPropagation();
    //         keepFocus = document.activeElement; //the element that has focus in the browser
    //         console.log(keepFocus);
    //         for (z=0; z<addOnArr.length; z++) {
    //             addOnArr[z].classList.remove('focused');
    //             if (u == z) {
    //                 addOnArr[z].classList.add('focused');
    //             }
    //         }
    //     }, false);     
    // }

    return addOnSection
}

export { addOnsPage }