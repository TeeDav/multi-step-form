import { navPages } from "../server.js";
import { canNavigate, unsetReady } from "./validationState.js";
import { pageState } from "../helpers/pageState.js";

let tezzio = pageState
let state = tezzio.get()

const pageLen = navPages.length;
console.log(pageLen);
let u = 1;
let useID = null;
unsetReady();
let infoPage = false
let checkoutPage = false;
let ranOnce = false;

export function navHelper() {
  console.log(pageLen);
  //listen for the 'navigate' event when it fires and do something with the information in the 'detail' object
  window.addEventListener("navigate", (e) => {
    let goTo = e.detail;
    const navChild = document.getElementById("nav-child");
    console.log(navChild.childNodes[0].childNodes[0]);
    if (e.detail == 1) {
      navChild.childNodes[0].childNodes[0].remove();
    } else if (e.detail == pageLen) {
      navChild.childNodes[0].childNodes[0].remove();
      navChild.childNodes[1].remove();
    } else if (e.detail == pageLen - 1) {
      const navBtn = navChild.childNodes[1];
      navBtn.classList.add("buttonLight");
      navBtn.style.backgroundColor = "hsla(244, 100%, 62%, 0.938)";
      navBtn.addEventListener("pointerdown", () => {
        navBtn.style.backgroundColor = "hsla(244, 100%, 62%, 0.538)";
      });
      navBtn.addEventListener("pointerup", () => {
        navBtn.style.backgroundColor = "hsla(244, 100%, 62%, 0.938)";
      });

      //event listener to go to previous page
    } else {
      //add 'Go Back' button for other pages
      navChild.childNodes[0].innerHTML = `<p class="notes">Go Back<p>`;

      //event listener to go to previous page
      navChild.childNodes[0].childNodes[0].addEventListener("click", () => {

        //unsetReady();

        if (canNavigate(useID)) return;

        console.log(u);

        //go to previous page
        u = u - 1;
        //fire the navigation event
        window.dispatchEvent(new CustomEvent("navigate", { detail: u }));

        //fire the event for side animation
        window.dispatchEvent(new CustomEvent("sideAnimate", { detail: u }));

        console.log("going back");
      });
    }
    console.log(e.detail);
  });

  let navHolder = document.getElementById('nav-child')
  console.log(navHolder.childNodes[1])
  navHolder.childNodes[1].addEventListener('click', () => {
    console.log('next button clicked')

    //call manager here
    let source = 'btnClick'
    tezzio.notifyManager(source)
  })
  
  if (state.validated == true) {
    

  } else{

  }

  //create spinner
  let spinner = document.createElement('span')
  spinner.id = 'spinner'
  spinner.classList.add('btn-spinner')
  spinner.innerText = ''
  navHolder.childNodes[1].appendChild(spinner)
}
