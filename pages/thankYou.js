function thankYou() {
    const section = document.createElement('section');
    const sectionId = 'finishing-up'
    section.id = 'thank-you-section';
    //section.classList.add('arcade-section')
    // section.classList.add('anim');
    // section.classList.add('noshow');

    section.innerHTML = 
        `<div class="thankyou">

            <img src='../assets/images/icon-thank-you.svg' alt='checkmark' width='80' height='80'/>
            <h1 class="heading">Thank you!</h1>
            <p class="notes thankyou-notes">Thanks for confirming your subscription! We hope you have fun usinf our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>`

    return section
}

export { thankYou }