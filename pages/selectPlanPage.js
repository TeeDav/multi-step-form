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

    // Header
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    h1.classList = 'heading'
    h1.innerText = 'Select your plan'
    const pNotes = document.createElement('p')
    pNotes.classList = 'notes notes-margin'
    pNotes.innerText = 'You have the option of monthly or yearly billing.'
    header.appendChild(h1)
    header.appendChild(pNotes)

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

    plans.forEach((plan, i) => {
        const card = document.createElement('div')
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

    // Navigation buttons
    const nav = document.createElement('nav')
    const buttons = document.createElement('div')
    buttons.classList = 'buttons'

    const goBackBtn = document.createElement('button')
    const goBackP = document.createElement('p')
    goBackP.classList = 'notes'
    goBackP.innerText = 'Go Back'
    goBackP.onclick = function () { location.href = '../index.html' }
    goBackBtn.appendChild(goBackP)

    const nextBtn = document.createElement('button')
    nextBtn.id = 'next'
    const nextP = document.createElement('p')
    nextP.classList = 'notes'
    nextP.innerText = 'Next Step'
    nextP.onclick = function () { location.href = './pick add-ons.html' }
    nextBtn.appendChild(nextP)

    buttons.appendChild(goBackBtn)
    buttons.appendChild(nextBtn)
    nav.appendChild(buttons)

    // Assemble
    sectionNode.appendChild(cardsWrap)
    sectionNode.appendChild(planSwitchWrap)

    containerChild.appendChild(header)
    containerChild.appendChild(sectionNode)
    containerChild.appendChild(nav)
    containerBody.appendChild(containerChild)
    section.appendChild(containerBody)

    return section
}

export { selectPlanPage }
