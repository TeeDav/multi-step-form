// function createside() {
//     const side = document.createElement('div');
//     side.classList.add('side');

//     const sideCopy = [
//         { number: '1', page: 'step1' },
//         { number: '2', page: 'step2' },
//         { number: '3', page: 'step3' },
//         { number: '4', page: 'step4' }
//     ];
//     const sideChild = document.createElement('ul');

//     sideCopy.forEach(link => {
//         const listItem = document.createElement('li');
//         const anchor = document.createElement('a');
//         anchor.href = `#${link.page}`;
//         anchor.textContent = link.number;
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             window.dispatchEvent(new CustomEvent('navigate', { detail: link.page }));
//         });
//         listItem.appendChild(anchor);
//         sideChild.appendChild(listItem);
//     });

//     side.appendChild(sideChild);
//     return side;
// }




function createSide() {
    const side = document.createElement('div');
    side.classList.add('side');

    const sideCopy = [
        { number: '1', step: 'STEP 1', copy: 'YOUR INFO'},
        { number: '2', step: 'STEP 2', copy: 'SELECT PLAN'},
        { number: '3', step: 'STEP 3', copy: 'ADD-ONS'},
        { number: '4', step: 'STEP 4', copy: 'SUMMARY'}
    ];

   

    sideCopy.forEach(link => {

         //create side-child div and add class
        const sideChild = document.createElement('div');
        sideChild.classList.add('side-child')

        //create number div and add class
        const num = document.createElement('div');
        num.classList.add('number');
        
        //create copy div and add class
        const copy = document.createElement('div');
        copy.classList.add('desc');

        // console.log(num);

        //create number child and insert textContent
        const numP = document.createElement('p');
        numP.textContent = link.number;
        // console.log(numP);
        
        //append number child to number div
        num.appendChild(numP);
        // console.log(num);

        //create copy child and add textContent
        const numCopy1 = document.createElement('p');
        numCopy1.textContent = link.step;
        copy.appendChild(numCopy1);

        //create second copy child and add textContent
        const numCopy2 = document.createElement('p');
        numCopy2.textContent = link.copy;
        copy.appendChild(numCopy2);

        sideChild.appendChild(num);
        sideChild.appendChild(copy);
        // console.log(sideChild);

        side.appendChild(sideChild);
        console.log(side);


        // const listItem = document.createElement('li');
        // const anchor = document.createElement('a');
        // anchor.href = `#${link.page}`;
        // anchor.textContent = link.number;
        // anchor.addEventListener('click', function(e) {
        //     e.preventDefault();
        //     window.dispatchEvent(new CustomEvent('navigate', { detail: link.page }));
        // });
        // listItem.appendChild(anchor);
        // sideChild.appendChild(listItem);
    });
    
    return side;
}

export { createSide };