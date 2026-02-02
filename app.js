import { createSide } from "./components/sidebar.js";
import { navBar } from "./components/navBar.js";
import { header } from "./components/header.js";
import { infoPage } from "./pages/infoPage.js";
import { selectPlanPage } from "./pages/selectPlanPage.js";
import { addOnsPage } from "./pages/pickAddons.js";
import { finishingUp } from "./pages/finishingUp.js";

import animation_ from "./animations/pageTransitions.js";

// const check = animation_

const containerChild = document.getElementById('container-child');
let headerSection

let headerId = header().headerSection.id

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

//Router. listen for the 'navigate' event and change app content
window.addEventListener('navigate', (e) => {

    // delay().lazyLoading(containerChild)
    
    // animation_.headerClassAdd()
    // animation_.HeaderAnim(headerId)

    const pageArr = []
    //pageArr.push = e.detail

    const main = document.getElementById('main-content')

    console.log(containerChild)

    //console.log(document.getElementById(pages[1].getAttribute("id")))


    const pages = [
        infoPage(),
        selectPlanPage().section,
        addOnsPage(),
        finishingUp().sectionId
    ]

    //holdOn
    pages.forEach(page => {
        console.log(typeof(page))
        // let pageObj = page.concat('()')
        // console.log(document.getElementById(page) || document.getElementById(eval(page).getAttribute('id')))
        let pageId
        typeof(page) == 'object' ? pageId = document.getElementById(eval(page).getAttribute('id')) 
        : pageId = document.getElementById(page)
        if (containerChild.contains(pageId)) {
            console.log('yes')
            pageId.remove()
        }
    })

    // const oldPage = containerChild.querySelector('section[id]');
    // if (oldPage) oldPage.remove();
 

    // You can expand this with AJAX or templates
    switch(e.detail) {
        case 1: //render infoPage
            containerChild.appendChild(infoPage())
            animation_.pageAnimIn(infoPage().getAttribute("id"))
            break;
        case 2:
            console.log('page2')
            //const removeInfo = document.getElementById(infoPage().getAttribute("id"))
            //console.log(removeInfo.remove())
            //removeInfo.remove() ? console.log('removed') : console.log('not removed')
            
            containerChild.appendChild(selectPlanPage().section)
            animation_.pageAnimIn(selectPlanPage().section.getAttribute("id"))
            break;
        case 3:
            containerChild.appendChild(addOnsPage())
            animation_.pageAnimIn(addOnsPage().getAttribute("id"))
            break;
        case 4:
            console.log(e.detail)
            containerChild.appendChild(finishingUp().section)
            animation_.pageAnimIn(finishingUp().sectionId)
            break;
            
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