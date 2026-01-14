import { createSide } from "./components/sidebar.js";
import { navBar } from "./components/navBar.js";
import { header } from "./components/header.js";
import { infoPage } from "./pages/infoPage.js";
import { selectPlanPage } from "./pages/selectPlanPage.js";

import animation_ from "./animations/pageTransitions.js";

// const check = animation_

const containerChild = document.getElementById('container-child');
let headerSection

document.addEventListener('DOMContentLoaded', () => {
    
    // Render sidebar
    const sidebarRoot = document.getElementById('sidebar-root');
    sidebarRoot.appendChild(createSide());
    
    //render navbar
    containerChild.appendChild(navBar());

    //render header
    // containerChild.appendChild(header().headerSection);
    //animation_.HeaderAnim(header().headerSection.getAttribute("id"))
    containerChild.appendChild(header().headerSection);
    console.log(header().headerSection.id)
    let headerId = header().headerSection.id
    headerSection = document.getElementById('header')
    // headerSection.classList.add('addClass')
    animation_.headerClassAdd() ? console.log('done') : console.log('not done')
    animation_.HeaderAnim(headerId)

    //dispatch the navigate event so that the infoPage() renders
    window.dispatchEvent(new CustomEvent('navigate', { detail: 1}))
    
});

function addHeaderSectionClass(addClass) {
        // headerClass = 'headerSection.classList.add("lazy")'
        // headerSection.classList.add(addClass)
        console.log(headerSection)
}

//listen for the 'navigate' event and change content
window.addEventListener('navigate', (e) => {
    
    const pageArr = []
    //pageArr.push = e.detail

    const main = document.getElementById('main-content')

    console.log(containerChild.querySelector('section[id]'))
    // const oldPage = containerChild.querySelector('section[id]');
    // if (oldPage) oldPage.remove();
 

    // You can expand this with AJAX or templates
    switch(e.detail) {
        case 1: //render infoPage
            containerChild.appendChild(infoPage())
            animation_.InfoPageAnimIn(infoPage().getAttribute("id"))
            break;
        case 2:
            // containerChild.appendChild(selectPlanPage())
            break;
        case 'step3':
            main.innerHTML = '<h1>Step 3: Add-ons</h1>';
            break;
        case 'step4':
            main.innerHTML = '<h1>Step 4: Summary</h1>';
            break;
        default:
            console.log(containerChild.lastElementChild)
            containerChild.lastElementChild.remove()
            console.log(parentNode)
            //main.innerHTML = '<h1>Not Found</h1>';
            //containerChild.innerHTML = "infoPage().innerHTML"
    }    
})

export { addHeaderSectionClass }