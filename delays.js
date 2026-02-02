import { load } from "./loader.js";

function delay() {
    const pages = {
        'info-page': "() => import ('./pages/infoPage.js')",
        'select-plan': "() => import ('./pages/selectPlanPage.js')",
        'add-on-section': "() => import ('./pages/pickAddons.js')"
    }

    let loadModule;
    let loaded = {};

    //delays and imports
    const pageObj = Object.entries(pages)
    console.log(typeof(pageObj.length));
    // const pageObjLength = pageObj.length

    function lazyLoading(parent) {
        console.log('yay')
        pageObj.forEach(pagePath => {
            let key = pagePath[0];
            for (key of pagePath) {
                const pageId = document.getElementById(key)
                if (parent.contains(pageId)) {
                    console.log(pageObj.indexOf(pagePath))
                    console.log(key)
                    let next = pageObj.indexOf(pagePath)+1
                    console.log(pageObj[next])
                    pageId.addEventListener('mouseenter', async () => {
                        console.log('entered')
                        let moduleId = pageObj[next][0]
                        let path = pageObj[next][1]
                        loadModule = load(moduleId, path);
                        console.log(eval("loadModule"))
                        const loading = eval(loadModule)
                        console.log(loading)
                        loaded = await loading();
                        console.log(loaded)
                        console.log(loaded.selectPlanPage().section)
                    });
                }
            }
        });
    };

    return { lazyLoading, pages, loaded }

}

export { delay }
