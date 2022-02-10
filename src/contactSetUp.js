import makeNewElement from "./makeElement";
import jessy from './assets/jessy.jpg';

const contactSetUp = ()=>{
    const content = document.querySelector('#content');
    const contactContentContainer = makeNewElement('div', 'contact-content-container', 'content-container');
    const contactUsHeader = makeNewElement('div', 'contact-us-header', 'page-header', 'Contact Us');
    const contactUsContainer = makeNewElement('div', 'contact-us-container');
    const jessyImg = new Image(300);
    jessyImg.src = jessy;
    jessyImg.setAttribute('id', 'jessy-image');
    const phone = makeNewElement('div', 'phone-number', 'page-info', 'Phone Number: (123)456-7890');
    const email = makeNewElement('div', 'email-address', 'page-info', 'Email: ');
    email.innerHTML += '<a href= mailto:jessy@jessyskitchen.com>jessy@jessyskitchen.com</a>';
    const address = makeNewElement('div', 'address', 'page-info', 'Address:')
    address.innerHTML += '<br>123 Main St.<br>Corvallis, OR 97330';

    contactUsContainer.appendChild(jessyImg);
    contactUsContainer.appendChild(phone);
    contactUsContainer.appendChild(email);
    contactUsContainer.appendChild(address);

    contactContentContainer.appendChild(contactUsHeader);
    contactContentContainer.appendChild(contactUsContainer);
    content.appendChild(contactContentContainer);


}

export default contactSetUp;