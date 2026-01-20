import { addOn } from "../components/addOn.js";

function addOnsPage() {
    const addOnSection = document.createElement('section');
    addOnSection.id = "add-on-section"
    // bodySection.classList.add("anim")
    // bodySection.classList.add("noshow")

    const addOnBody = document.createElement('div')
    addOnBody.classList = 'add-ons-body'

    
    const addOn_1 = addOn([
        'Online Service',
        'Access to multiplayer games',
        '+$1/mo'
    ])
    addOnBody.appendChild(addOn_1)


    const addOn_2 = addOn([
        'Larger Storage',
        'Extra 1TB of cloud save',
        '+$2/mo'
    ])
    addOnBody.appendChild(addOn_2)


    const addOn_3 = addOn([
        'Customizable Profile',
        'Custom theme on your profile',
        '+$2/mo'
    ])
    addOnBody.appendChild(addOn_3)

    addOnSection.appendChild(addOnBody)

    
    return addOnSection
}

export { addOnsPage }