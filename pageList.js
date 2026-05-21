function Page(page) {
    this.page = page;
    this.prevPage = null;
    this.nextPage = null;
}

export function PageList() {
    this.head = new Page('head');
    this.findPage = findPage;
    this.insertPage = insertPage;
    this.insertArray = arrayInsert;
    this.setCurrentPage = setCurrentPage; //this should use page id of data from local
                                //storage to point to the curent page in the browser
    this.nextPage = nextPage;
    this.prevPage = prevPage;
    this.currentPage = {};
    this.display = display
}

function findPage(page) {
    let currentPage = this.head;
    while (currentPage.page != page) {
        currentPage = currentPage.nextPage;
    }
    return currentPage;
}

function insertPage(newPage, page) {
    let addPage = new Page(newPage)
    let currentPage = this.findPage(page)
    addPage.nextPage = currentPage.nextPage
    currentPage.nextPage = addPage
    addPage.prevPage = currentPage
}

function arrayInsert(pageArr) {
    //paegArr.length
    let start = 0
    while (!(start == pageArr.length)) {
        let node = ''
        if (start == 0) {
            node = 'head'
        } else {
            node = pageArr[start - 1]
        }
        //let current = (start == 0) ? this.head : pages[start - 1]
        let newNode = pageArr[start]
        this.insertPage(newNode, node)
        start = start + 1
    }
}

function setCurrentPage(pageId) {
    let currentNode = this.head.nextPage
    while (currentNode.page.pageId != pageId) {
        currentNode = currentNode.nextPage;
    }
    this.currentPage = currentNode
    //return currentNode
}

function nextPage() {
    let currentPage = this.currentPage
    while (!(currentPage.nextPage == null)) {
        currentPage = currentPage.nextPage
    }
    return currentPage.page
}

function prevPage() {
    let currentPage = this.currentPage
    while (!(currentPage.prevPage == this.head)) {
        currentPage = currentPage.prevPage
    }
    return currentPage.page
}

function display() {
    let currentNode = this.head;
    while (!(currentNode.nextPage == null)) {
        console.log(currentNode.nextPage.page)
        currentNode = currentNode.nextPage
    }
}

//export let pages = new PageList()

const phone = {
    pageId: '767673'
}

const tv = {
    pageId: '676754'
}

// pages.insertPage(phone, 'head')
// pages.insertPage(tv, phone)
const equipment = [phone, tv]
//pages.insertArray(equipment)




