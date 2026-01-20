//contains main body container and footer
function navBar () {
    const nav = document.createElement('nav');
    // console.log(nav)

    const navChild = document.createElement('div');
    navChild.classList.add('buttons');

    

    const navCopy = [
        'Go Back',
        'Next Step',
    ]

    const pages = [
        'index',
        'select-your-plan',
        'pick add-ons',
        'finishing-up',
        'thank you'
    ]

    navCopy.forEach(copy => {
        const buttonCopy = document.createElement('p');
        buttonCopy.innerText = copy;
        buttonCopy.classList.add('notes');

        const button = document.createElement('button');
        button.appendChild(buttonCopy);
        navChild.appendChild(button);
    })

    nav.appendChild(navChild);
    // console.log(navChild);

    const pageLen = pages.length;
    let u = 1;
    
    //create the custom 'navigate' event
    //let nextPage = new CustomEvent('navigate', { detail: pages [u]})

    //listen for the 'navigate' event when it fires and do something with the information in the 'detail' object
    window.addEventListener('navigate', (e) => {
                    //console.log(e.detail);
                    //console.log("navigating")
                    console.log(e.detail);
    })
    
    navChild.addEventListener('click', function(e) {
        e.preventDefault();
        //console.log(e.target)

        if (e.target == navChild.childNodes[0].childNodes[0]) {
            // e.target.addEventListener('click', (e) => {
            //         location = '/index.html'
            //     })
            if(u !== 0){
                if (u == 1) {
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

            //create the event
            

            

            // { detail: pages[u] }

            //this should go to the global js script - app.js
            // window.addEventListener('navigate', (e) => {
            //     //console.log(e.detail);
            //     console.log("navigating")
            // });

        }
    });

    

    return nav
};

export { navBar };