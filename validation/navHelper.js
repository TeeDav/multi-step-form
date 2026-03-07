import { navPages } from "../server.js";
import { canNavigate, unsetReady } from "./validationState.js";


const pageLen = navPages.length;
console.log(pageLen)
let u = 1;

export function navHelper () {
    console.log(pageLen)
    //listen for the 'navigate' event when it fires and do something with the information in the 'detail' object
    window.addEventListener('navigate', (e) => {
        let goTo = e.detail
        const navChild = document.getElementById('nav-child')
        console.log(navChild.childNodes[0].childNodes[0])
        if (e.detail == 1) {
            navChild.childNodes[0].childNodes[0].remove()
        } else if (e.detail == pageLen) {
            navChild.childNodes[0].childNodes[0].remove()
            navChild.childNodes[1].remove()
        } else if (e.detail == pageLen - 1) {
            const navBtn = navChild.childNodes[1];
            navBtn.classList.add('buttonLight')
            navBtn.style.backgroundColor = 'hsla(244, 100%, 62%, 0.938)'
            navBtn.addEventListener('pointerdown', () => {
                navBtn.style.backgroundColor = 'hsla(244, 100%, 62%, 0.538)'
            })
            navBtn.addEventListener('pointerup', () => {
                navBtn.style.backgroundColor = 'hsla(244, 100%, 62%, 0.938)'
            })

            //event listener to go to previous page
        } else {
            //add 'Go Back' button for other pages
            navChild.childNodes[0].innerHTML = `<p class="notes">Go Back<p>`

            //event listener to go to previous page
            navChild.childNodes[0].childNodes[0].addEventListener('click', () => {
                //go to previous page
                u = e.detail - 1
                //fire the navigation event
                window.dispatchEvent(new CustomEvent('navigate', { detail: u}))

                //fire the event for side animation
                window.dispatchEvent(new CustomEvent('sideAnimate', { detail: u}))

                console.log('going back')
            })
        }
        console.log(e.detail);
    })




    //listens for when current page is validated
    window.addEventListener('nextPageReady', (e) => {
        console.log(e.detail)
        let useID = e.detail.id
        

        console.log('Navigate once per dispatch')

        const navChild = document.getElementById('nav-child')

        Array.from(navChild.children).forEach(child => {
            child.addEventListener('click', () => {
                console.log(navChild.childNodes[0])

                if (!(canNavigate(useID))) return;
                unsetReady();

                if (child == navChild.childNodes[0]) {
                    console.log('going back')
                    if (u > 1) {
                        console.log('going back')
                        u = u - 1
                        //fire the 'navigate' event
                        window.dispatchEvent(new CustomEvent('navigate', { detail: u }))

                        console.log('going back')

                        //fire the event for side animation
                        window.dispatchEvent(new CustomEvent('sideAnimate', { detail: u}))
                    }
                    return
                } else if((child == navChild.childNodes[1]) || (child == navChild.childNodes[1].childNodes[0])) {
                    
                    if(u < pageLen) {
                        console.log('going front')
                        u = u + 1
                        
                        //fire the 'navigate' event
                        window.dispatchEvent(new CustomEvent('navigate', { detail: u}))
                        console.log('going front')

                        //fire the event for side animation
                        window.dispatchEvent(new CustomEvent('sideAnimate', { detail: u}))
                        console.log(u)
                        console.log('sideanimation fired')
                        return
                    }
                    return
                } else {
                    return
                }
            })
        })

    })
    
}