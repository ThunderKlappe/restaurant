const makeNewElement = (type, id='', HTMLClass = '', text = '') =>{
    const newElem = document.createElement(type);
    if(id != ''){
        newElem.setAttribute("id", id);
    }
    if(HTMLClass != ''){
        newElem.setAttribute('class', HTMLClass);
    }
    newElem.textContent = text;

    return newElem;
}
export default makeNewElement;