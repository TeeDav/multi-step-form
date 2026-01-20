import { header } from "../components/header.js";
import { addHeaderSectionClass } from "../test/app.js";

const headerClass = [
    'header_anim',
    'header_pre'
]

// console.log(header().headerSection().getAttribute("id"))
// const headerId = header().getAttribute("id")

// const headerSection = document.getElementById(headerId)
// console.log(headerSection)
// headerSection.classList.add("header_anim")
// headerSection.classList.add("header_pre")

// header().setAttribute('class', 'header_anim') ? console.log('done') : console.log('not done')
// console.log(header().getAttribute("class"))

// const anim = document.getElementsById("info-page")

// getAttribute("id")
// const containerChild = document.getElementById('container-child');

// anim.classList.add('hide');

// animIn(infoPage().getAttribute("id"))
const animation_ = {
    InfoPageAnimIn(pag)  {
        const pageName = document.getElementById(pag)
        // pageName.classList.add('hide');

        setTimeout(() => {
            pageName.classList.remove('noshow');
        }, 100)
    },

    headerClassAdd() {
        headerClass.forEach(class_ => {
            header().addHeaderClass(class_)
        })
    },

    HeaderAnim(pag)  {
        //console.log(page.getAttribute("id"))
        //const pageId = page.getAttribute("id")
        const pageName = document.getElementById(pag)
        // pageName.classList.add('hide');

        setTimeout(() => {
            pageName.classList.remove('header_pre');
        }, 10)
    }    
}

export default animation_