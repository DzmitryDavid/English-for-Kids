import cards from './cards.js';

const imgArr = ['img/dance.jpg', 'img/dive.jpg', 'img/dive.jpg', 'img/dive.jpg', 'img/dive.jpg', 'img/dive.jpg'];


'use strict';
const getCardWrapper = () => document.querySelector('.cards__wrapper');
const getCategoryBtn = () => document.querySelector('.big-button__categories');
const getCategorySection = () => document.querySelector('.categories');
const getCategoryCloseBtn = () => document.querySelector('.categories__close');
const getOverlay = () => document.querySelector('.overlay');
const getCategoryMenu = () => document.querySelectorAll('.categories__list-item');
const getPlayButton = () => document.querySelector('.big-button__main');

getPlayButton().addEventListener('click', () => {
	removeSet();
	renderMain();
	addListeners();
});


class Card {
	constructor(cards) {
		// this.word = cards.word;
		// this.image = cards.word;
		// this.word = cards.word;
		// this.translation = cards.translation;
	}


	render(setNum) {
		cards[setNum].forEach(element => {
			const card = document.createElement('div');
			card.classList.add('cards__scene');

			card.innerHTML = `
				<div class="card">
				<figure class="card__face-front">
				<div class="card__face-img">
					<img src="/src/${element.image}" alt=""> 
				</div>					
				<div class="card__face-word">
					<span>${element.word}</span> 					
				</div> 					
				<div class="card__face-buttons">
					<div class="card__face-buttons-rotate">
						<img class="rotate" src="/src/icons/rotate.svg" alt="">
					</div>
					<div class="card__face-buttons-audio"> 							
						<img class="audio" src="/src/icons/audio.svg" alt=""> 							
						<audio class="audio" src="/src/${element.audioSrc}"></audio> 						
					</div>
				</div>
			</figure>

			<div class="card__face-back">
					<div class="card__face-back-img">
						<img src="/src/${element.image}" alt=""> 
					</div>					
					<div class="card__face-word">
					<span>${element.translation}</span> 					
					</div> 					
				</div>
				</div>
				
					`;

			getCardWrapper().append(card);
		});
	}
}



const removeSet = () => {
	const cardWrapper = getCardWrapper();
	while (cardWrapper.firstChild) {
		cardWrapper.removeChild(cardWrapper.firstChild);
	}
};

const setActionA = new Card(cards);
	const setActionB = new Card(cards);
	const setAnimalA = new Card(cards);
	const setAnimalB = new Card(cards);
	const setClothes = new Card(cards);
	const setEmotions = new Card(cards);

function renderMain(section) {
	// removeSet();
	const cardWrapper = getCardWrapper();
	cards[0].forEach((element, i) => {
		const card = document.createElement('div');
		card.classList.add('cards__scene');

		card.innerHTML = `
			<div class="card">
			<figure class="card__face-front">
				<div class="card__face-img">
					<img class="main__img" src="/src/${imgArr[i]}" alt=""> 
				</div>				
			<div class="card__face-word">
				<span>${element}</span> 					
			</div> `;
		card.addEventListener('click', () => {
			section.render(1);
			
		});
		cardWrapper.append(card);
		
	});

}
renderMain(setActionA);
const getCardsMainMenu = () => document.querySelectorAll('.cards__scene');

function renderMainMenu() {
	

	getCardsMainMenu().forEach((item) => {
		item.addEventListener('click', (e) => {
			switch (e.target.textContent) {
				case 'Action (set A)':
					removeSet();
					setActionA.render(1);
					categoryHide();
					break;
				case 'Action (set B)':
					removeSet();
					setActionB.render(2);
					categoryHide();
					break;
				case 'Animal (set A)':
					removeSet();
					setAnimalA.render(3);
					categoryHide();
					break;
				case 'Animal (set B)':
					removeSet();
					setAnimalB.render(4);
					categoryHide();
					break;
				case 'Clothes':
					removeSet();
					setClothes.render(5);
					categoryHide();
					break;
				case 'Emotions':
					removeSet();
					setEmotions.render(6);
					categoryHide();
					break;
			}


		});
	});
}
renderMainMenu();
// getCardWrapper().addEventListener('click', (e) => {
// 	console.log(e.target);
// });

const categoryShow = () => {
	getCategorySection().classList.add('show');
	getOverlay().classList.add('show');
};
const categoryHide = () => {
	getCategorySection().classList.remove('show');
	getOverlay().classList.remove('show');
};

function renderCategory() {
	const setActionA = new Card(cards);
	const setActionB = new Card(cards);
	const setAnimalA = new Card(cards);
	const setAnimalB = new Card(cards);
	const setClothes = new Card(cards);
	const setEmotions = new Card(cards);

	getCategoryMenu().forEach((item, i) => {
		item.addEventListener('click', (e) => {
			switch (e.target.textContent) {
				case 'Action (set A)':
					removeSet();
					setActionA.render(1);
					categoryHide();
					break;
				case 'Action (set B)':
					removeSet();
					setActionB.render(2);
					categoryHide();
					break;
				case 'Animal (set A)':
					removeSet();
					setAnimalA.render(3);
					categoryHide();
					break;
				case 'Animal (set B)':
					removeSet();
					setAnimalB.render(4);
					categoryHide();
					break;
				case 'Clothes':
					removeSet();
					setClothes.render(5);
					categoryHide();
					break;
				case 'Emotions':
					removeSet();
					setEmotions.render(6);
					categoryHide();
					break;
			}
		});
		item.textContent = cards[0][i];
	});
}
renderCategory();

function addListeners() {
	const cardWrapper = getCardWrapper();
	cardWrapper.addEventListener('click', (e) => {
		if (e.target.classList.contains('audio')) {
			e.target.parentElement.lastElementChild.play();
		}
	});

	cardWrapper.addEventListener('click', (e) => {
		if (e.target.classList.contains('rotate')) {
			console.log(e.target.closest('.cards__scene'));

			e.target.closest('.card').classList.add('is-flipped');
		}
	});
	cardWrapper.addEventListener('mouseover', (e) => {
		if (e.target.parentElement.classList.contains('cards__scene') ||
			e.target.parentElement.classList.contains('card__face-img') ||
			e.target.parentElement.classList.contains('card__face-word') ||
			e.target.parentElement.classList.contains('is-flipped') ||
			e.target.parentElement.classList.contains('card__face-back')) {

			e.target.closest('.card').classList.remove('is-flipped');
		}
	});
}

addListeners();
getCategoryBtn().addEventListener('click', categoryShow);
getCategoryCloseBtn().addEventListener('click', categoryHide);
getOverlay().addEventListener('click', categoryHide);

