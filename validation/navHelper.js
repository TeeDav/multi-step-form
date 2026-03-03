import { navPages } from "../server.js";
import { canNavigate, unsetReady } from "./validationState.js";


// const navPages = navBar().pages
const pageLen = navPages.length + 1;
let u = 1;
//create the custom 'navigate' event
//let nextPage = new CustomEvent('navigate', { detail: pages [u]})

export function navHelper () {
    //listen for the 'navigate' event when it fires and do something with the information in the 'detail' object
    window.addEventListener('navigate', (e) => {
        //console.log(e.detail);
        //console.log("navigating")
        const navChild = document.getElementById('nav-child')
        console.log(navChild.childNodes[0].childNodes[0])
        if (e.detail == 1) {
            navChild.childNodes[0].childNodes[0].remove()
        } else {
            //add 'Go Back' button for other pages
            navChild.childNodes[0].innerHTML = `<p class="notes">Go Back<p>`

            //event listener to go to previous page
            navChild.childNodes[0].childNodes[0].addEventListener('click', () => {
                //go to previous page
                u = e.detail - 1
                //fire the navigation event
                window.dispatchEvent(new CustomEvent('navigate', { detail: u}))
            })
        }
        //e.detail == 1 ? navChild.childNodes[0].childNodes[0].remove() :
        console.log(e.detail);
    })


    //listens for when current page is validated
    window.addEventListener('nextPageReady', (e) => {
        console.log(e.detail)
        let useID = e.detail.id
        

        console.log('Navigate once per dispatch')

        // window.dispatchEvent(new CustomEvent('nextPageReady', { detail: false}))  
        

        // e.detail = false
        const navChild = document.getElementById('nav-child')
        navChild.addEventListener('click', function(e) {

            if (!(canNavigate(useID))) return;

            unsetReady();
            
            e.preventDefault();

            console.log(e.detail)

            if (e.target == navChild.childNodes[0].childNodes[0]) {
                // e.target.addEventListener('click', (e) => {
                //         location = '/index.html'
                //     })
                if(u !== 0){
                    if (u == 1) {
                        // navChild.childNodes[0].childNodes[0].remove()
                        return
                    } else {
                        u = u - 1
                        //fire the 'navigate' event
                        window.dispatchEvent(new CustomEvent('navigate', { detail: u}))
                    }
                } 
            }

            if((e.target == navChild.childNodes[1]) || (e.target == navChild.childNodes[1].childNodes[0])) {
                //console.log('here')
                
                if(u < pageLen - 1) {
                    u = u + 1
                    //console.log(u)
                    
                    //fire the 'navigate' event
                    window.dispatchEvent(new CustomEvent('navigate', { detail: u}))
                }
            }  
        });

    })
}