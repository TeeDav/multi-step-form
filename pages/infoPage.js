function infoPage (){
    const bodySection = document.createElement('section');
    bodySection.id = "info-page"
    bodySection.classList.add("anim")
    bodySection.classList.add("noshow")

    const labelCopy = [
        'Name',
        'Email Address',
        'Phone Number'
    ]

    const labelAttrs = [
        'name',
        'email',
        'phone'
    ]

    const inputAttrs = [
        {
            type: 'text',
            name: 'name',
            placeholder: "e.g. Stephen King"
        },
        {
            type: 'email',
            name: 'email',
            placeholder: "e.g. stephenking@lorem.com"
        },
        {
            type: 'text',
            name: 'phone',
            placeholder: "e.g. +1 234 567 890"
        }
    ]

    const labelCopyObj = Object.entries(labelCopy)
    // const labelAttrsObj = Object.entries(labelAttrs)
    const inputAttrsObj = Object.entries(inputAttrs)

    let formControl = ''
    let inputField = ''
    let inputLabel = ''

    //create input field
    

    

    const formContainer = document.createElement('form')
    formContainer.setAttribute('action', '')
    

    const formDiv = document.createElement('div')
    formDiv.classList = 'form-container notes'
    
    bodySection.appendChild(formDiv)

    let formControlId

    for (let [k, v] of labelCopyObj) {
            console.log(k)
            
            // inputLabel.setAttribute('for', k)
            // inputLabel.innerText = v
            inputField = document.createElement('input')
            


            

            inputLabel = document.createElement('label')
                        

            // inputLabel.setAttribute('for', labelAttrs[k])
            console.log(labelAttrs[k])
            inputLabel.setAttribute('for', labelAttrs[k])
            inputLabel.innerText = v

            const inputAttrsObj = Object.entries(inputAttrs[k])

            console.log(inputAttrsObj)

            for (let [u, v] of inputAttrsObj){
                inputField.setAttribute(u, v)
            }
            

            formControl = document.createElement('div')
            formControl.id = 'formId'
            formControlId = document.getElementById(formControl.id)
            formControl.classList = 'form-control'
            formControl.append(inputLabel)
            formControl.appendChild(inputField)

            

            

            //convert inputAttrs into array of key/value pairs
            // const setInputAttr = Object.entries(inputAttrs[e])
            // for (let [k, v] of setInputAttr){
            //     inputField.setAttribute(k, v)
            // }
        
            
            console.log(k)

            formContainer.appendChild(formControl)

            formDiv.appendChild(formContainer)

        }

        console.log(formControl)

    // labelCopy.forEach(e => {
    //     formControl = document.createElement('div')
    //     formControl.classList = 'form-control'

    //     const inputLabel = document.createElement('label')
    //     // for (let [k, v] of e) {
    //     //     inputLabel.setAttribute('for', k)
    //     //     inputLabel.innerText = v
    //     // }
    //     inputLabel.setAttribute('for', labelAttrs[e])
    //     console.log(labelAttrsObj[e])
    //     inputLabel.innerText = e

    //     formControl.appendChild(inputLabel)
        
    //     //create input field
    //     const inputField = document.createElement('input')

    //     //convert inputAttrs into array of key/value pairs
    //     // const setInputAttr = Object.entries(inputAttrs[e])
    //     // for (let [k, v] of setInputAttr){
    //     //     inputField.setAttribute(k, v)
    //     // }
        
    //     formControl.appendChild(inputField)
    // });

    // Object.entries(inputAttrs).forEach((k, v) => {
    //     const inputField = document.createElement('input')
    //     inputField.setAttribute(k, v)
    //     formControl.appendChild
    // })
    

    
    
    

    return bodySection;
}

export { infoPage }