
export function sideAnimation () {
    const circles = Array.from(document.querySelectorAll('.number'));
    console.log('sideAnimation', circles)

    const wrapper = document.createElement('div')
    wrapper.classList.add('parent-container')

    const circle1 = circles[0]
    const circle2 = circles[1]
    const circle3 = circles[2]
    const circle4 = circles[3]

    const circleArr = [
        circle1,
        circle2,
        circle3,
        circle4
    ]

    const arrLength = circleArr.length
    let u = 1

    console.log(circle1, circle2, circle3, circle4, wrapper)

    const circleBound1 = circle1.getBoundingClientRect();
    const circleBound2 = circle2.getBoundingClientRect();
    const circleBound3 = circle3.getBoundingClientRect();
    const circleBound4 = circle4.getBoundingClientRect();


    circleArr.forEach((circle, index)=> {
        const overlay = document.createElement('div')
        overlay.id = 'overlay'
        overlay.classList.add('overlay')
        overlay.style.position = 'absolute'
        overlay.style.left = 'auto'
        overlay.style.top = 'auto'
        overlay.style.width = circleBound1.width + 'px'
        overlay.style.height = circleBound1.height + 'px'
        // overlay.style.border = getComputedStyle(circle1).border + 'px'
        overlay.style.borderRadius = '17px'
        overlay.style.backgroundColor = 'hsl(206, 94%, 87%)'
        // overlay.style.transition = 'all 0.5s ease'
        overlay.stylezIndex = '999'
        overlay.style.transform = 'translateY(-100%)'


        const overlayNumber = document.createElement('p')
        overlayNumber.classList.add('overlay-number')
        overlayNumber.innerText = index + 1

        circle.appendChild(overlayNumber)

        circle.appendChild(overlay)
    })

    circleArr[0].childNodes[2].style.transform = 'translateY(0%)'
    circleArr[0].childNodes[1].classList.add('inset-number')



    function animateTransfer(pos) {
        //let pos = u 
        console.log('pos', pos, `u is ${u}`)
        
        console.log(circleArr[pos])

        const overlay = document.querySelectorAll('#overlay')
        console.log(overlay)

        if (pos > u) {
            console.log('slide down!')
            circleArr[pos - 2].childNodes[2].addEventListener('transitionend', (e) => {
                console.log('transitioned')
                if (e.propertyName === 'transform') {
                    console.log('transitioned')
                //enter
                circleArr[pos - 1].childNodes[2].style.transform = 'translateY(0%)'
                circleArr[pos - 1].childNodes[1].classList.add('inset-number')
                }
            })
    
            //go down
            circleArr[pos - 2].childNodes[2].style.transform = 'translateY(100%)'
            circleArr[pos - 2].childNodes[1].classList.remove('inset-number')
            circleArr[pos - 2].childNodes[1].classList.add('inset-number-post')
        } else if (pos < u) {
            console.log('slide up!')
        }

        u = pos
        console.log(`u is now ${u}`)

        setTimeout(() => {

        }, )

        requestAnimationFrame(() => {
            //
        });

    }

    function animateTransfer2() {
        const circleBound1 = circle1.getBoundingClientRect();
        const circleBound2 = circle2.getBoundingClientRect();
        const circleBound3 = circle3.getBoundingClientRect();
        const circleBound4 = circle4.getBoundingClientRect();

        const overlay = document.createElement('div')
        overlay.style.position = 'relative'
        overlay.style.left = circleBound1.left + 'px'
        overlay.style.top = circleBound1.top + 'px'
        overlay.style.width = circleBound1.width + 'px'
        overlay.style.height = circleBound1.height + 'px'
        // overlay.style.border = getComputedStyle(circle1).border + 'px'
        overlay.style.borderRadius = '17px'
        overlay.style.backgroundColor = getComputedStyle(circle1).backgroundColor
        overlay.style.transition = 'all 0.5s ease'
        overlay.stylezIndex = '999'

        const overlay2 = document.createElement('div')
        overlay2.style.position = 'fixed'
        overlay2.style.left = circleBound2.left + 'px'
        overlay2.style.top = '20px'
        overlay2.style.transform = 'translateY(10px)';
        overlay2.style.width = circleBound1.width + 'px'
        overlay2.style.height = circleBound1.height + 'px'
        // overlay.style.border = getComputedStyle(circle1).border + 'px'
        overlay2.style.borderRadius = '17px'
        overlay2.style.backgroundColor = getComputedStyle(circle1).backgroundColor
        overlay2.style.transition = 'all 0.5s ease'
        overlay2.stylezIndex = '999'
        
        // circle1.style.overflow = 'hidden'
        circle1.appendChild(overlay)
        circle2.appendChild(overlay)


        console.log(overlay)

        requestAnimationFrame(() => {
            // overlay.style.transform = 'translateY(-100%)';
            overlay2.style.top = circleBound2.top + 'px'

            // overlay.style.left = circleBound2.left + 'px'
            // overlay.style.top = circleBound2.top + 'px'
            // circle2.appendChild(overlay)

        });

        overlay.addEventListener('transitioned', () => {

        })

    }


    function moveOverlay(from, to) {
        console.log('moveto')
        const fromRect = from.getBoundingClientRect()
        const toRect = to.getBoundingClientRect()
        const wrapperRect = wrapper.getBoundingClientRect()

        console.log(fromRect, toRect,wrapperRect)

        const circleBound1 = from.getBoundingClientRect();
        // const circleBound2 = circle2.getBoundingClientRect();
        // const circleBound3 = circle3.getBoundingClientRect();
        // const circleBound4 = circle4.getBoundingClientRect();

        // from.classList.add('pseudo-number')
        // to.classList.add('pseudo-number')


        //position overlay at circle1
        const overlay = document.createElement('div')
        overlay.style.position = 'absolute'
        overlay.style.left = fromRect.left - wrapperRect.left + 'px'
        overlay.style.top = fromRect.top - wrapperRect.top + 'px'
        overlay.style.width = fromRect.width + 'px'
        overlay.style.height = fromRect.height + 'px'
        // overlay.style.border = getComputedStyle(circle1).border + 'px'
        overlay.style.borderRadius = '17px'
        overlay.style.backgroundColor = getComputedStyle(circle1).backgroundColor
        overlay.style.transition = 'all 0.5s ease'
        overlay.stylezIndex = '999'

        wrapper.appendChild(overlay)

        console.log(overlay)


        //trigger animation to box 2
        requestAnimationFrame(() => {
            overlay.style.left = toRect.left - wrapperRect.left + 'px'
            overlay.style.top = toRect.top - wrapperRect.top + 'px'
            // overlay.style.transform = 'translateY(100px)'
        })

    }

    function moveOverlayTo (from, to) {
        console.log('moveto')
        const fromRect = from.getBoundingClientRect()
        const toRect = to.getBoundingClientRect()
        const wrapperRect = wrapper.getBoundingClientRect()

        from.classList.add('pseudo-number')
        to.classList.add('pseudo-number')


        //position overlay at circle1
        const overlay = document.createElement('div')
        overlay.style.position = 'absolute'
        overlay.style.left = fromRect.left - wrapperRect.left + 'px'
        overlay.style.top = fromRect.top - wrapperRect.top + 'px'
        overlay.style.width = fromRect.width + 'px'
        overlay.style.height = fromRect.height + 'px'
        // overlay.style.border = getComputedStyle(circle1).border + 'px'
        overlay.style.borderRadius = '17px'
        overlay.style.backgroundColor = getComputedStyle(circle1).backgroundColor
        overlay.style.transition = 'all 0.5s ease'
        overlay.stylezIndex = '999'

        from.appendChild(overlay)

        //trigger animation to box 2
        requestAnimationFrame(() => {
            // to.appendChild(overlay)
            overlay.style.left = toRect.left - wrapperRect.left + 'px'
            overlay.style.top = toRect.top - wrapperRect.top + 'px'
        })

    }


    window.addEventListener('sideAnimate', (e) => {
        // u = e.detail
        console.log(e.detail)
        animateTransfer(e.detail)

        // moveOverlay(circle1, circle2)

        // console.log(overlay)
    })
}