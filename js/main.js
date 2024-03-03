const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(event) {
    const target = event.currentTarget;
    const button = target.dataset.button;
    const contentActiv = document.querySelectorAll(`.${button}`);
    
    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--activ')
    });

    target.classList.add('choose__color-btn--activ');

    contentItem.forEach(function(item){
        item.classList.remove('content-item__activ')
    });

    contentActiv.forEach(function(item){
        item.classList.add('content-item__activ')
    });
}