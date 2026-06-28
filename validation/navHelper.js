import { navPages } from "../server.js";
import { canNavigate, unsetReady } from "./validationState.js";
import { pageState } from "../helpers/pageState.js";
import { pageStore } from "../helpers/pageStore.js";
import { spinner } from "../helpers/spinnerState.js";

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

    if (tezzio.get().validated == true) {
        //display spinner
        spinner.setState(true)

        //save current state in pageStore. use update
        // pageStore.currentPage.page = tezzio.get()
        tezzio = pageState
        state = tezzio.get()
        console.log(tezzio.get())
        pageStore.updateCurrentPage(tezzio.get())
        console.log(pageStore)
        console.log(pageStore.currentPage)
        
        // //push details of next page from store to state
        // tezzio.update(pageStore.currentPage.nextPage.page)
        console.log(tezzio.get())

        //state = pageStore.nextPage()
        console.log(state)
        //pageStore.nextPage()
        console.log(pageStore.currentPage.page)

        //call navigator
        tezzio.notifyNavList()
    }
  })

  //create spinner
  let _spinner = document.createElement('span')
  _spinner.id = 'spinner'
  _spinner.classList.add('btn-spinner')
  _spinner.innerText = ''
  navHolder.childNodes[1].appendChild(_spinner)
}
