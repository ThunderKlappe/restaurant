import makeNewElement from "./makeElement";
import shells from "./assets/Garlic-Parmesan-Shellbows.jpg";
import broccoli from "./assets/Broccoli-Cheese-Soup.jpg";
import gnocchi from "./assets/Sweet-Potato-Gnocchi.jpg";
import tofu from "./assets/Tofu-Burgers.jpg";

const homeSetUp = ()=>{
    const content = document.querySelector('#content');
    const homeContentContainer = makeNewElement('div', 'home-content-container', 'content-container');
    const welcomeContainer = makeNewElement('div', 'welcome-container', 'page-header', 'Welcome to Jessy\'s Kitchen!');
    const broccoliImg = new Image(250,250);
    broccoliImg.src = broccoli;
    const tofuImg = new Image(250,250);
    tofuImg.src = tofu;
    const shellsImg = new Image(250,250);
    shellsImg.src = shells;
    const gnocchiImg = new Image(250,250);
    gnocchiImg.src = gnocchi;
    const imgContainer = makeNewElement('div', 'home-images', 'img-container');
    imgContainer.appendChild(broccoliImg);
    imgContainer.appendChild(tofuImg);
    imgContainer.appendChild(shellsImg);
    imgContainer.appendChild(gnocchiImg);
    
    
    const intro = makeNewElement('div', 'intro', 'page-info', 
        `Come on down for the best meals of your life! When Jessy Bowers first picked up a pan, the world was forever changed. Spanning a wide variety of vegetarian and pescatarian eats, you won't dare be disappointed in a single dish. It's not physically possible to say no to this food. You won't believe your taste buds when they sing out after just one bite.`);
    const aboutJessy = makeNewElement('div', 'about-jessy', 'page-info', 
        `Jessy Bowers grew up in the wilderness of Alaska where she learned to forage for greens and catch wild fish. Now, she grows and harvests her own grains and vegetables fresh every day for you to delight in. Each piece of fish you put in your mouth was wild caught off the coast of Oregon within 2 hours of hitting your plate. There literally could not be any food fresher or more ethically sourced than this food. In fact, if you can find another restaurant that can beat us out, we'll give you your food on the house.`);
    
    const hoursContainer = makeNewElement('div', 'hours-container', 'page-info small', "Hours");
    const hours = makeNewElement('ul', 'hours')
    hours.appendChild(makeNewElement('li', '', '', 'Sunday: 3:00 - 8:00'))
    hours.appendChild(makeNewElement('li', '', '', 'Monday: 12:00 - 8:00'))
    hours.appendChild(makeNewElement('li', '', '', 'Tuesday: 12:00 - 8:00'))
    hours.appendChild(makeNewElement('li', '', '', 'Wednesday: 12:00 - 8:00'))
    hours.appendChild(makeNewElement('li', '', '', 'Thursday: 12:00 - 8:00'))
    hours.appendChild(makeNewElement('li', '', '', 'Friday: 12:00 - 10:00'))
    hours.appendChild(makeNewElement('li', '', '', 'Saturday: 12:00 - 10:00'))
    hoursContainer.appendChild(hours);
    homeContentContainer.appendChild(welcomeContainer);
    homeContentContainer.appendChild(imgContainer);
    homeContentContainer.appendChild(intro);
    homeContentContainer.appendChild(aboutJessy);
    homeContentContainer.appendChild(hoursContainer)
    content.appendChild(homeContentContainer);
}
export default homeSetUp;