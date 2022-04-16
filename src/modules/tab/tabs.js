let tabs = document.querySelectorAll('.tab')
 
let conteinerItems = document.querySelectorAll('.container__item_text');


let changeTabs = function (item, cI) {
    
    item.addEventListener('click', function () {
        for (let tab of tabs) {
            tab.classList.remove('tab_active')
        }
        item.classList.add('tab_active');

        for (let conteinerItem of conteinerItems) {
            conteinerItem.classList.remove('container__item_visible')
        }
        cI.classList.add('container__item_visible');        
    })
};
    
for (let i = 0; i < tabs.length; i++) {
    changeTabs(tabs[i], conteinerItems[i])
};

