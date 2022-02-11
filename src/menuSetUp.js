import makeNewElement from "./makeElement";
import shells from "./assets/Garlic-Parmesan-Shellbows.jpg";
import broccoli from "./assets/Broccoli-Cheese-Soup.jpg";
import gnocchi from "./assets/Sweet-Potato-Gnocchi.jpg";
import tofu from "./assets/Tofu-Burgers.jpg";
import bahnmi from './assets/Banh-Mi-Bowls.jpg';
import caprese from './assets/Caprese-Grilled-Cheese.jpg'
import salmon from './assets/Coconut-Curry-Salmon.jpg'
import tacos from './assets/fish-tacos.jpg'
import scallops from './assets/Green-Curry-Scallops.jpg'
import orange from './assets/orange-tofu.jpg'
import french from './assets/Portobello-French-Dip.jpg'
import shrimp from './assets/Shrimp-and-Feta-Orzo.jpeg'
import sopa from './assets/Sopa-Tarasca.jpg'


const menuSetUp = () =>{
    const content = document.querySelector('#content');
    const menuContentContainer = makeNewElement('div', 'menu-content-container', 'content-container');
    const menuHeader = makeNewElement('div', 'menu-header', 'page-header', 'Menu');
    const menuContainer = makeNewElement('div', 'menu-container');

    const broccoliImg = new Image(175,175);
    broccoliImg.src = broccoli;
    const tofuImg = new Image(175,175);
    tofuImg.src = tofu;
    const shellsImg = new Image(175,175);
    shellsImg.src = shells;
    const gnocchiImg = new Image(175,175);
    gnocchiImg.src = gnocchi;
    const bahnmiImg = new Image(175,175);
    bahnmiImg.src = bahnmi;
    const capreseImg = new Image(175,175);
    capreseImg.src = caprese;
    const salmonImg = new Image(175,175);
    salmonImg.src = salmon;
    const tacosImg = new Image(175,175);
    tacosImg.src = tacos;
    const scallopsImg = new Image(175,175);
    scallopsImg.src = scallops;
    const orangeImg = new Image(175,175);
    orangeImg.src = orange;
    const frenchImg = new Image(175,175);
    frenchImg.src = french;
    const shrimpImg = new Image(175,175);
    shrimpImg.src = shrimp;
    const sopaImg = new Image(175,175);
    sopaImg.src = sopa;
    
    const soupCategory = makeNewElement('div', 'soup-category', 'menu-category', 'Soup (Comes with side of freshly baked baguette)')
    const soupContainer = makeNewElement('div', 'soup-container', 'menu-container')
    const sopaCont = makeNewElement('div', 'sopa-container', 'food-container');
    sopaCont.appendChild(sopaImg);
    sopaCont.appendChild(makeNewElement('div', 'sopa-description', 'menu-description page-info', 'Sopa Tarasca: A delicious pinto bean based soup with Jalapeno Corn Fritters'));
    sopaCont.appendChild(makeNewElement('div', 'sopa-price', 'menu-price', '$9.00'));
    soupContainer.appendChild(sopaCont);
    const broccoliCont = makeNewElement('div', 'broccoli-container', 'food-container');
    broccoliCont.appendChild(broccoliImg);
    broccoliCont.appendChild(makeNewElement('div', 'broccoli-description', 'menu-description page-info', 'Broccoli Cheese Soup: This creamy, silky soup is packed with broccoli and carrots. Finished with sharp Wisconsin Cheddar'));
    broccoliCont.appendChild(makeNewElement('div', 'broccoli-price', 'menu-price', '$8.00'));
    soupContainer.appendChild(broccoliCont);
    soupCategory.appendChild(soupContainer);

    const pastaCategory = makeNewElement('div', 'pasta-category', 'menu-category', 'Pasta and Grains');
    const pastaContainer = makeNewElement('div', 'pasta-container', 'menu-container');
    const shellsCont = makeNewElement('div', 'shells-container', 'food-container');
    shellsCont.appendChild(shellsImg);
    shellsCont.appendChild(makeNewElement('div', 'shells-description', 'menu-description page-info', 'Garlic Parmesan Shells: Creamy and garlicky, this comfort food will make you feel warm and gooey inside'));
    shellsCont.appendChild(makeNewElement('div', 'shells-price', 'menu-price', '$8.00'));
    pastaContainer.appendChild(shellsCont);
    const gnocchiCont = makeNewElement('div', 'gnocchi-container', 'food-container');
    gnocchiCont.appendChild(gnocchiImg);
    gnocchiCont.appendChild(makeNewElement('div', 'gnocchi-description', 'menu-description page-info', 'Sweet Potato Gnocchi: Soft pillows packed with flavor over a bed of broccoli rabe finished with a garlic sage brown butter sauce'));
    gnocchiCont.appendChild(makeNewElement('div', 'gnocchi-price', 'menu-price', '$10.00'));
    pastaContainer.appendChild(gnocchiCont);
    const orangeCont = makeNewElement('div', 'orange-container', 'food-container');
    orangeCont.appendChild(orangeImg);
    orangeCont.appendChild(makeNewElement('div', 'orange-description', 'menu-description page-info', 'Orange Tofu: Sticky and crispy, this spin on a classic will have you begging for more. Topped with scallions and sesame seeds'));
    orangeCont.appendChild(makeNewElement('div', 'orange-price', 'menu-price', '$10.00'));
    pastaContainer.appendChild(orangeCont);
    const bahnmiCont = makeNewElement('div', 'bahnmi-container', 'food-container');
    bahnmiCont.appendChild(bahnmiImg);
    bahnmiCont.appendChild(makeNewElement('div', 'bahnmi-description', 'menu-description page-info', 'Bahn-Mi Bowl: Hearty quinoa topped with quick pickled carrots, herbs, peanuts, and lemongrass impossible meatballs all covered with our spicy house sauce. This is what you\'ll keep coming back for'));
    bahnmiCont.appendChild(makeNewElement('div', 'bahnmi-price', 'menu-price', '$12.00'));
    pastaContainer.appendChild(bahnmiCont);
    pastaCategory.appendChild(pastaContainer);

    const sandwichCategory = makeNewElement('div', 'sandwich-category', 'menu-category', 'Sandwiches (Comes with a side of chips or fries)');
    const sandwichContainer = makeNewElement('div', 'sandwich-container', 'menu-container');
    const tofuCont = makeNewElement('div', 'tofu-container', 'food-container');
    tofuCont.appendChild(tofuImg);
    tofuCont.appendChild(makeNewElement('div', 'tofu-description', 'menu-description page-info', 'Spicy Tofu Burgers: Crumbled tofu pressed with sriracha, herbs, and spices, browned with a crispy coating. This is an absolute flavor bomb!'));
    tofuCont.appendChild(makeNewElement('div', 'tofu-price', 'menu-price', '$11.00 / Add choice of cheese for $1.00'));
    sandwichContainer.appendChild(tofuCont);
    const frenchCont = makeNewElement('div', 'french-container', 'food-container');
    frenchCont.appendChild(frenchImg);
    frenchCont.appendChild(makeNewElement('div', 'french-description', 'menu-description page-info', 'Portobello French Dip: Roasty portobello strips, golden caramelized onions, melted provolone cheese, zippy horseradish aioli, all piled on a warm, crusty roll. Dipped in a warm mushroom jus'));
    frenchCont.appendChild(makeNewElement('div', 'french-price', 'menu-price', '$11.00'));
    sandwichContainer.appendChild(frenchCont);
    const capreseCont = makeNewElement('div', 'caprese-container', 'food-container');
    capreseCont.appendChild(capreseImg);
    capreseCont.appendChild(makeNewElement('div', 'caprese-description', 'menu-description page-info', 'Loaded Caprese Grilled Cheese: Fresh tomatoes, spicy garlic, creamy butter, gooey mozzarella, and crisp green basil on fresh sourdough bread. This will make you dream about the warm days of Summer'));
    capreseCont.appendChild(makeNewElement('div', 'caprese-price', 'menu-price', '$8.00'));
    sandwichContainer.appendChild(capreseCont);
    sandwichCategory.appendChild(sandwichContainer);

    const seafoodCategory = makeNewElement('div', 'seafood-category', 'menu-category', 'Seafood (Comes with a side of freshly baked baguette)');
    const seafoodContainer = makeNewElement('div', 'seafood-container', 'menu-container');
    const salmonCont = makeNewElement('div', 'salmon-container', 'food-container');
    salmonCont.appendChild(salmonImg);
    salmonCont.appendChild(makeNewElement('div', 'salmon-description', 'menu-description page-info', 'Coconut Curry Salmon: A light, fluffy bowl of rice topped with perfectly cooked salmon with crispy skin and a creamy coconut curry sauce that\'s PACKED with flavor!'));
    salmonCont.appendChild(makeNewElement('div', 'salmon-price', 'menu-price', '$14.00'));
    seafoodContainer.appendChild(salmonCont);
    const tacosCont = makeNewElement('div', 'tacos-container', 'food-container');
    tacosCont.appendChild(tacosImg);
    tacosCont.appendChild(makeNewElement('div', 'tacos-description', 'menu-description page-info', 'Crispy Fish Tacos: Crispy beer-battered Alaskan cod topped with cotija cheese, cilantro, lime and a delicious jalapeno sauce on a flour or corn tortilla. Comes with 3 tacos.'));
    tacosCont.appendChild(makeNewElement('div', 'tacos-price', 'menu-price', '$11.00'));
    seafoodContainer.appendChild(tacosCont);
    const shrimpCont = makeNewElement('div', 'shrimp-container', 'food-container');
    shrimpCont.appendChild(shrimpImg);
    shrimpCont.appendChild(makeNewElement('div', 'shrimp-description', 'menu-description page-info', 'Shrimp and Feta Orzo: Fresh caught shrimp with tangy feta on a bed of orzo, tossed wtih cucumbers, dill, and parsley. Something small, refreshing, and cool.'));
    shrimpCont.appendChild(makeNewElement('div', 'shrimp-price', 'menu-price', '$3.00/cup or $6.00/bowl'));
    seafoodContainer.appendChild(shrimpCont);
    const scallopsCont = makeNewElement('div', 'scallops-container', 'food-container');
    scallopsCont.appendChild(scallopsImg);
    scallopsCont.appendChild(makeNewElement('div', 'scallops-description', 'menu-description page-info', 'Green Curry Scallops: Creamy coconut green curry sauce with buttery scallops topped with a mango cilantro salsa on a bed a fluffy jasmine rice.'));
    scallopsCont.appendChild(makeNewElement('div', 'scallops-price', 'menu-price', '$14.00'));
    seafoodCategory.appendChild(seafoodContainer);


    menuContainer.appendChild(soupCategory);
    menuContainer.appendChild(pastaCategory);
    menuContainer.appendChild(sandwichCategory);
    menuContainer.appendChild(seafoodCategory);
    menuContentContainer.appendChild(menuHeader);
    menuContentContainer.appendChild(menuContainer);
    content.appendChild(menuContentContainer);

}
export default menuSetUp;