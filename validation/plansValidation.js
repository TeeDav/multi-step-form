import { pageState } from "../helpers/pageState.js";
import { pageStore } from "../helpers/pageStore.js";

const tezzio = pageState

const state = tezzio.get()

export function plansValidation() {

    //get cards from the DOM
    const cardArr = document.getElementsByClassName('card')

    let storeFocus;
    let keepFocus;

    for(let i=0; i<cardArr.length; i++) {
        let u = i;
        let z;
        cardArr[i].addEventListener("mousedown", function (e) {
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

                    //validation is true here, update state
                    tezzio.update({validated: true})
                    console.log('id correct', state)
                    // if (pageStore.currentPage.page.pageId == plansPageStore.pageId) {
                        
                    // }
                }
            }
        }, false);     
    }
}

  

