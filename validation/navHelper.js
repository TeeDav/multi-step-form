import { navPages } from "../server.js";
import { canNavigate, unsetReady } from "./validationState.js";

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

  //const navChild = document.getElementById("nav-child");

  //when 'next step' is clicked in info page, dispatch event to 
  //validate user inputs
  Array.from(navChild.children).forEach((child) => {
    //ranOnce = false;
    child.addEventListener("click", () => {
      // ranOnce = false;
      console.log(navChild.childNodes[0]);

      if (
        child == navChild.childNodes[1] ||
        child == navChild.childNodes[1].childNodes[0]
      ) {
          if (u == 1) {
            infoPage = true;
            window.addEventListener("nextPageReady", (e) => {
              //infoPage = true;
              if (u !== 1) return
              console.log('up here');
              useID = e.detail.id;
              console.log(useID)

              console.log("Navigate once per dispatch"); 
              console.log(u)
              u = u + 1;
              //infoPage = true;
            
              unsetReady();

              //fire the 'navigate' event
              window.dispatchEvent(new CustomEvent("navigate", { detail: u }));

              infoPage = false;
            });

            console.log('validate info')
            window.dispatchEvent(new CustomEvent('infoPageValidation'))
            return
          }

          else if ((u == 4)) {
            console.log('u became 4', ranOnce)
            unsetReady();

            //if (canNavigate(useID)) return

            if (ranOnce == true) {
              console.log(ranOnce)
              ranOnce = false;
              return
            }
            console.log('not!')
            //if (!canNavigate(useID)) return
            checkoutPage = true;
            console.log(u, ranOnce)
            //if (ranOnce) return
            console.log(u, ranOnce)
            //ranOnce = true;
            
            window.addEventListener("congratsPage", (e) => {
              checkoutPage = true;
              useID = e.detail.id;
              unsetReady();
              if (canNavigate(useID)) return
              //if (ranOnce) return
  
              console.log(u)
              console.log((u !== 4))
              //infoPage = true;
              if (!(u == 4))  return
              console.log('up here');
              useID = e.detail.id;
              console.log(useID)

              console.log("Navigate once per dispatch"); 
              console.log(u)
              //ranOnce = true;
              console.log(ranOnce)
              u = u + 1;
              unsetReady();
              //infoPage = true;
              
              console.log(u)
              

              //fire the 'navigate' event
              window.dispatchEvent(new CustomEvent("navigate", { detail: u }));

              checkoutPage = false;
              ranOnce = false;
              console.log(ranOnce)
            });

            console.log('validate info')
            window.dispatchEvent(new CustomEvent('checkoutReady'))
            return
          }
        }
    })
  })


  
  });

  //listens for when current page is validated
  window.addEventListener("nextPageReady", (e) => {
    //ranOnce = false;
    console.log((infoPage == true) || checkoutPage == true) 
    if ((infoPage == true) || checkoutPage == true) return;
    console.log('called');
    useID = e.detail.id;
    console.log(useID)

    console.log("Navigate once per dispatch"); 

    const navChild = document.getElementById("nav-child");

    Array.from(navChild.children).forEach((child) => {
      child.addEventListener("click", () => {
        console.log(navChild.childNodes[0], canNavigate(useID));

        console.log(pageLen)
        if (!canNavigate(useID) || infoPage == true) return;
        unsetReady();

        if (child == navChild.childNodes[0]) {
          console.log("going back");
          if (u > 1) {
            console.log("going back");
            u = u - 1;
            console.log(u)
            //fire the 'navigate' event
            window.dispatchEvent(new CustomEvent("navigate", { detail: u }));

            console.log("going back");

            //fire the event for side animation
            window.dispatchEvent(new CustomEvent("sideAnimate", { detail: u }));
          }
          return;
        } else if (
          child == navChild.childNodes[1] ||
          child == navChild.childNodes[1].childNodes[0]
        ) {
          console.log(u, (u < pageLen) && (u >= 2))
          if ((u < pageLen) && (u >= 2)) {
            console.log('here!', u)
            console.log(((infoPage == true) && (u == 1)))

            if (((infoPage == true) && (u == 1)) || (checkoutPage == true)) return
            console.log("going front", u);
            
            ranOnce = true;

            u = u + 1;

            //fire the 'navigate' event
            window.dispatchEvent(new CustomEvent("navigate", { detail: u }));
            console.log("going front");

            //fire the event for side animation
            window.dispatchEvent(new CustomEvent("sideAnimate", { detail: u }));
            console.log(u);
            console.log("sideanimation fired");
            return;
          }
          return;
        } else {
          return;
        }
      });
    });
  });

}
