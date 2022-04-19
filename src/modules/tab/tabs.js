let tabs = document.querySelectorAll('.tabs-switcher__btn')
 
let conteinerItems = document.querySelectorAll('.tabs-content__item');


let changeTabs = function (item, cI) {
    
    item.addEventListener('click', function () {
        for (let tab of tabs) {
            tab.classList.remove('tabs-switcher__btn_active')
        }
        item.classList.add('tabs-switcher__btn_active');

        for (let conteinerItem of conteinerItems) {
            conteinerItem.classList.remove('is-visible')
        }
        cI.classList.add('is-visible');        
    })
};
    
for (let i = 0; i < tabs.length; i++) {
    changeTabs(tabs[i], conteinerItems[i])
};

