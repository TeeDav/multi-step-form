import { createSide } from "./components/sidebar.js";
import { navBar } from "./components/navBar.js";
import { header } from "./components/header.js";
import { infoPage } from "./pages/infoPage.js";
import { selectPlanPage } from "./pages/selectPlanPage.js";
import { addOnsPage } from "./pages/pickAddons.js";
import { finishingUp } from "./pages/finishingUp.js";
import { thankYou } from "./pages/thankYou.js";

import animation_ from "./animations/pageTransitions.js";

import { infoValidation } from "./validation/infoValidation.js";
infoValidation()

// const check = animation_
const container = document.getElementById('container-root');
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
    window.dispatchEvent(new CustomEvent('validation', { detail: 1}))
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
        finishingUp().sectionId,
        thankYou()
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
            console.log(page)
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
        case 5:
            // console.log(e.detail)
            console.log(thankYou())
            containerChild.appendChild(thankYou())
            animation_.blink(thankYou().getAttribute("id"))

            const confettiContainer = document.createElement('div');
            function createConfetti() {
                let distanceTop
                let distanceLeft
                let distanceRight
                let interDistance
                for (let i = 0; i < 100; i++) {
                    confettiContainer.classList.add('confettiContainer')
                    container.appendChild(confettiContainer)
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    // confetti.classList.add('explosion')
                    // confetti.classList.add('explosion-start')
                    // confetti.classList.add('explosion-end')
                    
                    confetti.style.top = 1.85 * innerHeight + 'px'
                    confetti.style.left = 0.6 * innerWidth + 'px'
                    confetti.style.transform = `rotateX(${Math.random() * 720}deg) rotateY(${Math.random() * 720}deg) rotateZ(${Math.random() * 720}deg)`
                    // confetti.style.transform = `rotateY(${Math.random() * 720}deg)`
                    // confetti.style.transform = `rotateZ(${Math.random() * 720}deg)`
                    confettiContainer.appendChild(confetti);
                    let confettiTop = Math.random() * innerHeight + 'px'
                    
                    setTimeout(() => {
                        confetti.classList.add('explosion-start');
                        // confetti.classList.add('explosion-end')
                        confetti.style.position = 'absolute'
                        confetti.style.top = Math.random() * innerHeight + 'px'
                        distanceTop = confetti.style.top
                        console.log(distanceTop)
                        // console.log(`${Math.random() * innerHeight}px`)
                        // confetti.style.transform = `translate(${Math.random() * innerWidth}px, ${Math.random() * innerHeight}px)`
                        confetti.style.left = Math.random() * innerWidth + 'px';
                        confetti.style.right = Math.random() * innerWidth + 'px';
                        confetti.style.transform = `rotateX(${Math.random() * 720}deg) rotateY(${Math.random() * 720}deg) rotateZ(${Math.random() * 720}deg)`
                        // confetti.style.transform = `rotateY(${Math.random() * 720}deg)`
                        confetti.classList.add('explosion-start')
                        
                        // let distanceLeft = confetti.style.left
                        // let distanceRight = confetti.style.right
                        // console.log(distance.slice(1, -2))
                        
                        // setTimeout(() => {
                        //     confetti.classList.add('explosion-end');
                        // }, 12)   
                        // slowDown()
                        let loopDistance = distanceTop.slice(1, -2);
                    let newDistance

                    let setNew = false;

                    // setInterval(() => {
                    //     if (setNew == false) {
                    //         // newDistance = loopDistance;
                    //         newDistance = (loopDistance * 1) - 1;
                    //         setNew = true
                    //         confetti.style.top = `${newDistance}px`;
                    //     console.log(`${newDistance}`) 
                    //         return
                    //     } else if (setNew == true) {
                    //         newDistance = (newDistance * 1) - 1;
                    //         confetti.style.top = `${newDistance}px`;
                    //     console.log(`${newDistance}`)
                    //     }
                    // }, 300)

                    }, 100)

                    
                    // function slowDown() {
                    //     distanceTop = confetti.style.top
                    //     let newDistance = distanceTop.slice(1, -2);
                    //     confetti.style.top = `${newDistance+10}px`;
                    //
                    
                    
                    //confetti.style.left = Math.random() * innerWidth + 'px';
                    //confetti.style.right = Math.random() * innerHeight + 'px';

                    
                    
                    confetti.style.backgroundColor = `hsl(${Math.random() * 360}deg, 100%, 50%)`;
                    // Animate with CSS, then remove
                    //setTimeout(() => confetti.remove(), 3000);
                }
            }
            createConfetti()
            console.log(createConfetti())
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