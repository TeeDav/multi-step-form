function header (){
    const headerSection = document.createElement('section');
    headerSection.id = "header"
    const headerHolder = document.getElementById(headerSection.id)
    // let headerClass = headerSection.classList.add("lazy")
    let headerClass = 'yo'
    // headerSection.classList.add("header_anim")
    // headerSection.classList.add("header_pre")
    
    // const bodySection = document.createElement('section');

    function addHeaderClass(addClass) {
        // headerClass = 'headerSection.classList.add("lazy")'
        headerHolder.classList.add(addClass)
        console.log(headerSection)
    }

    const headerCopy = [
        [
            'Personal info',
            'Please provide your name, email address, and phone number.'
        ],
        [
            'Select your plan',
            'You have the option of monthly or yearly billing.'
        ],
        [
            'Pick add-ons',
            'Add-ons help enhance your gaming experience.'
        ],
        [
            'Finishing Up',
            'Double-check everything looks OK before confirming'
        ]
    ]

    let w = 0;

    const heading = document.createElement('h1')
    heading.classList.add('heading')
    heading.innerText = headerCopy[w][0]

    const subHeading = document.createElement('p')
    subHeading.classList.add('notes')
    subHeading.classList.add('notes-margin')
    subHeading.innerText = headerCopy[w][1]

    headerSection.appendChild(heading)
    headerSection.appendChild(subHeading)

    window.addEventListener('navigate', (e) => {
        w = e.detail - 1;
        console.log(w);

        heading.innerText = headerCopy[w][0]
        subHeading.innerText = headerCopy[w][1]
    })

    

    return { headerSection, addHeaderClass };
}

export { header };