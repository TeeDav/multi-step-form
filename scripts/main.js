function play() {
    // console.log('clicked');
    // alert('playing');
}


const showPlans = document.getElementById('showPlan');
const card = document.getElementsByClassName('card');
const toggleSwitch = document.getElementById('toggle');
const toggleBall = document.getElementsByClassName('switch-ball');
let extended = false;
// console.log(showPlans);
// console.log(card);
// console.log(toggleSwitch);

showPlans.addEventListener("click", function (e) {
    // console.log('yes');
    if (extended == false) {
        for(i=0; i<card.length; i++) {
            card[i].style.height = "190px";
        }
        toggleBall[0].style.left = "17px";
        // toggleSwitch.style.justifyContent = "flex-end";
        // toggleBall[0].style.marginLeft = "14px";
        
        extended = true;

    } else {
        for(i=0; i<card.length; i++) {
            card[i].style.height = "161px";
        }
        toggleBall[0].style.left = "0px";
        // toggleSwitch.style.justifyContent = "flex-start";
        // toggleBall[0].style.marginLeft = "4px";
        // toggleBall[0].style.transition - "margin-left 300ms ease-in";
        
        extended = false;
    }
    
})

let storeFocus;
let keepFocus;

for(i=0; i<card.length; i++) {
    let u = i;
    let z;
    card[i].addEventListener("click", function (e) {
        card[u].classList.add('focused');
        storeFocus = e.target;
        e.stopPropagation();
        keepFocus = document.activeElement; //the element that has focus in the browser
        console.log(keepFocus);
        for (z=0; z<card.length; z++) {
            card[z].classList.remove('focused');
            if (u == z) {
                card[z].classList.add('focused');
            }
        }
    }, false);     
}


document.body.addEventListener("click", function (e){
        console.log("keepFocus");
        keepFocus.classList.add('focused');      
}, false)
