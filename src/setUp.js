import makeNewElement from "./makeElement";

const setUpSite = ()=>{
    const body = document.querySelector("#body");
    const header = makeNewElement('div', 'header', "" ,"Jessy's Kitchen")
    body.appendChild(header);
    const content = makeNewElement('div', 'content');
    const tabContainer = makeNewElement('div', 'tab-container');
    const homeTab = makeNewElement('button', 'home-tab-button', 'tab-button active', 'Home');
    const menuTab = makeNewElement('button', 'menu-tab-button', 'tab-button', 'Menu');
    const contactTab = makeNewElement('button', 'contact-tab-button', 'tab-button', 'Contact Us');
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);
    content.appendChild(tabContainer);
    body.appendChild(content);

}

export default setUpSite;