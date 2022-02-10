import './style.css';
import setUpSite from './setUp';
import homeSetUp from './homeSetUp';
import contactSetUp from './contactSetUp';

const Display =(()=>{
    setUpSite();
    homeSetUp();
    const _tabs = document.querySelectorAll('.tab-button');
    _tabs.forEach(button => button.addEventListener('click', updateContent));


    function updateContent(e){
        _tabs.forEach(button => button.classList.remove('active'))
        e.target.classList.add('active');
        document.querySelector("#content").lastElementChild.remove();
        if(e.target.id == 'home-tab-button'){
            homeSetUp();
        }
        if(e.target.id == 'contact-tab-button'){
            contactSetUp();
        }
    }
})();
