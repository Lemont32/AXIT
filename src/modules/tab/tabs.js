let tabs = document.querySelectorAll('.tab')
 
let conteinerItems = document.querySelectorAll('.container_item_text');


let changeTabs = function (item, cI) {
    
    item.addEventListener('click', function () {
        for (let tab of tabs) {
            tab.classList.remove('tab_active')
        }
        item.classList.add('tab_active');

        for (let conteinerItem of conteinerItems) {
            conteinerItem.classList.remove('container_item__visible')
        }
        cI.classList.add('container_item__visible');        
    })
};
    
for (let i = 0; i < tabs.length; i++) {
    changeTabs(tabs[i], conteinerItems[i])
};

