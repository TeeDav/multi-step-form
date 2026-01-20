function selectPlanPage (){
    const section = document.createElement('section');
    section.id = 'select-plan'
    section.classList.add('anim')
    section.classList.add('noshow')

    // container equivalent
    const containerBody = document.createElement('div')
    containerBody.classList = 'container-body'

    const containerChild = document.createElement('div')
    containerChild.classList = 'container-child'

    // Plans (cards)
    const sectionNode = document.createElement('section')
    const cardsWrap = document.createElement('div')
    cardsWrap.classList = 'container-child-card margin'
    cardsWrap.id = 'cards'

    const plans = [
        { name: 'Arcade', price: '$9/mo' },
        { name: 'Advanced', price: '$12/mo' },
        { name: 'Pro', price: '$15/mo' }
    ]

    let cardArr = []

    plans.forEach((plan, i) => {
        const card = document.createElement('div')
        cardArr.push(card)
        card.classList = 'card'
        card.setAttribute('tabindex', '0')
        if (i === 0) card.id = 'card'

        const holder = document.createElement('div')
        holder.classList = 'holder'

        const icon = document.createElement('div')
        icon.classList = 'card-icon'

        const title = document.createElement('p')
        title.classList = 'notes'
        title.innerText = plan.name

        const price = document.createElement('p')
        price.classList = 'notes'
        price.innerText = plan.price

        holder.appendChild(icon)
        holder.appendChild(title)
        holder.appendChild(price)
        card.appendChild(holder)
        cardsWrap.appendChild(card)
    })

    // Switch
    const planSwitchWrap = document.createElement('div')
    planSwitchWrap.classList = 'plan margin'

    const childMonthly = document.createElement('div')
    childMonthly.classList = 'child'
    const monthlyText = document.createElement('p')
    monthlyText.classList = 'notes'
    monthlyText.innerText = 'Monthly'
    childMonthly.appendChild(monthlyText)

    const childToggle = document.createElement('div')
    childToggle.classList = 'child'
    childToggle.id = 'showPlan'
    // keep API similar to original: onclick expected to call play(), but we don't implement play here

    const toggle = document.createElement('div')
    toggle.classList = 'switch'
    toggle.id = 'toggle'
    const ball = document.createElement('div')
    ball.classList = 'switch-ball'
    toggle.appendChild(ball)
    childToggle.appendChild(toggle)

    const childYearly = document.createElement('div')
    childYearly.classList = 'child'
    const yearlyText = document.createElement('p')
    yearlyText.classList = 'notes'
    yearlyText.innerText = 'Yearly'
    childYearly.appendChild(yearlyText)

    planSwitchWrap.appendChild(childMonthly)
    planSwitchWrap.appendChild(childToggle)
    planSwitchWrap.appendChild(childYearly)

    // Assemble
    sectionNode.appendChild(cardsWrap)
    sectionNode.appendChild(planSwitchWrap)

    // containerChild.appendChild(header)
    containerChild.appendChild(sectionNode)
    // containerChild.appendChild(nav)
    containerBody.appendChild(containerChild)
    section.appendChild(sectionNode)


    //

    console.log(cardArr)

    let extended = false;
    // console.log(showPlans);
    // console.log(card);
    // console.log(toggleSwitch);

    childToggle.addEventListener("click", function (e) {
        // console.log('yes');
        if (extended == false) {
            for(let i=0; i<cardArr.length; i++) {
                cardArr[i].style.height = "190px";
            }
            ball.style.left = "17px";
            // toggleSwitch.style.justifyContent = "flex-end";
            // toggle[0].style.marginLeft = "14px";
            
            extended = true;

        } else {
            for(let i=0; i<cardArr.length; i++) {
                cardArr[i].style.height = "161px";
            }
            ball.style.left = "0px";
            // toggleSwitch.style.justifyContent = "flex-start";
            // toggle[0].style.marginLeft = "4px";
            // toggle[0].style.transition - "margin-left 300ms ease-in";
            
            extended = false;
        }
        
    })

    let storeFocus;
    let keepFocus;

    for(let i=0; i<cardArr.length; i++) {
        let u = i;
        let z;
        cardArr[i].addEventListener("click", function (e) {
            cardArr[u].classList.add('focused');
            console.log(e.target)
            storeFocus = e.target;
            e.stopPropagation();
            keepFocus = document.activeElement; //the element that has focus in the browser
            console.log(keepFocus);
            for (z=0; z<cardArr.length; z++) {
                cardArr[z].classList.remove('focused');
                if (u == z) {
                    cardArr[z].classList.add('focused');
                }
            }
        }, false);     
    }


    document.body.addEventListener("click", function (e){
            keepFocus = document.activeElement;
            console.log(storeFocus);
            //keepFocus.classList.add('focused');      
    }, false)

    //

    return { section, childToggle, cardArr, toggle  }
}

export { selectPlanPage }
