import { selectPlanPage as sPP } from "../pages/selectPlanPage";

const showPlans = document.getElementById('showPlan');
const card = document.getElementsByClassName('card');
const toggleSwitch = document.getElementById('toggle');
//const toggle = document.getElementsByClassName('switch-ball');
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
        ball[0].style.left = "17px";
        // toggleSwitch.style.justifyContent = "flex-end";
        // toggle[0].style.marginLeft = "14px";
        
        extended = true;

    } else {
        for(let i=0; i<cardArr.length; i++) {
            cardArr[i].style.height = "161px";
        }
        ball[0].style.left = "0px";
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

