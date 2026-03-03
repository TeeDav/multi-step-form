
//contains main body container and footer
function navBar () {
    const nav = document.createElement('nav');
    // console.log(nav)

    const navChild = document.createElement('div');
    navChild.id = 'nav-child'
    navChild.classList.add('buttons');

    

    const navCopy = [
        'Go Back',
        'Next Step',
    ]

    const pages = [ // add the form pages here
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

    return nav
};

export { navBar };