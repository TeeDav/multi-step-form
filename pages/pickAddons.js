import { addOn } from "../components/addOn.js";
import { addons } from "../server.js";

function addOnsPage() {
    const addOnSection = document.createElement('section');
    addOnSection.id = "add-on-section"
    addOnSection.classList.add("anim")
    addOnSection.classList.add("noshow")

    const addOnBody = document.createElement('div')
    addOnBody.classList = 'add-ons-body'

    // console.log(server().addons)
    let addOnArr = []

    addons.forEach(addon => {
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

    // addOn.addEventListener('click', (e) => {
    //     console.log('addon clicked')
    // })
    
    
    return addOnSection
}

export { addOnsPage }