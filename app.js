const cardArray = [
   { name: 'fries', img: 'images/fries.png' },
   { name: 'pizza', img: 'images/pizza.png' },
   { name: 'ice-cream', img: 'images/icecream.png' },
   { name: 'hotdog', img: 'images/hotdog.png' },
   { name: 'milkshake', img: 'images/milkshake.png' },
   { name: 'cheeseburger', img: 'images/cheeseburger.png' },
   { name: 'fries', img: 'images/fries.png' },
   { name: 'pizza', img: 'images/pizza.png' },
   { name: 'ice-cream', img: 'images/icecream.png' },
   { name: 'hotdog', img: 'images/hotdog.png' },
   { name: 'milkshake', img: 'images/milkshake.png' },
   { name: 'cheeseburger', img: 'images/cheeseburger.png' }
]
cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChoosen = [];
let cardsChoosenIds = [];
const cardsWon = [];
function createBoard(){
   for(let i = 0; i < cardArray.length; i++){
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.setAttribute('width', 140);
      card.addEventListener('click', flipCard);
      gridDisplay.appendChild(card);
   }
}
createBoard(); // call the function to create board

function checkMatch(){
   const cards = document.querySelectorAll('img'); // returns a node list, we can also do like querySelectorAll('#grid img');
   const optionOneId = cardsChoosenIds[0];
   const optionTwoId = cardsChoosenIds[1];
   console.log('check for match!');
   if(optionOneId == optionTwoId){
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('You clicked the same card!');
   }
   if(cardsChoosen[0] == cardsChoosen[1]){
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChoosen);
   }else{
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry, try again!');
   }
   resultDisplay.textContent = cardsWon.length;
   cardsChoosen = [];
   cardsChoosenIds = [];
   if(cardsWon.length == cardArray.length/2){
      resultDisplay.innerHTML = 'Congratulations, you found them all!';
   }
}

function flipCard(){
   const cardId = this.getAttribute('data-id');
   cardsChoosen.push(cardArray[cardId].name);
   cardsChoosenIds.push(cardId);
   this.setAttribute('src', cardArray[cardId].img);
   if(cardsChoosen.length === 2){
      setTimeout(checkMatch, 500);
   }
}