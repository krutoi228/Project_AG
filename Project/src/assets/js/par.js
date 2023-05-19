const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', Startrotate);
    card.addEventListener('mouseout', Stoprotate);
    
}

function Startrotate(event) {
    const cardItem =  this.querySelector('.card-item');
    const halfheight = cardItem.offsetHeight / 2;
    const halfwidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfheight) / 8 +'deg) rotateY('+ (event.offsetX - halfwidth ) / 5 +'deg)'
}

function Stoprotate(event) {
    const cardItem =  this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)'
}