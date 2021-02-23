import cards from './cards.js';

'use strict';
const getCardWrapper = () => document.querySelector('.cards__wrapper');
const getCategoryBtn = () => document.querySelector('.big-button__categories');
const getCategorySection = () => document.querySelector('.categories');
const getCategoryCloseBtn = () => document.querySelector('.categories__close');
const getOverlay = () => document.querySelector('.overlay');
const categoriesMenu = () => document.querySelector('.categories__list');
// const getPlayButton = () => document.querySelector('.big-button__play');
const asideMainLink = document.querySelector('.categories__list-item');
const headerTitle = document.querySelector('.header__title');


let isPlay = false;
// console.log(isPlay);

const imgArr = ['img/dive.jpg', 'img/dive.jpg', 'img/main/AnimalsA.png', 'img/main/AnimalsB.png', 'img/dive.jpg', 'img/dive.jpg'];


const removeSet = () => {
	const cardWrapper = getCardWrapper();
	while (cardWrapper.firstChild) {
		cardWrapper.removeChild(cardWrapper.firstChild);
	}
};


function renderMainSection() {
	removeSet();
	const cardWrapper = getCardWrapper();
	
	cards[0].forEach((element, i) => {
		const card = document.createElement('div');
		card.classList.add('cards__scene');

		card.innerHTML = `
			<div data-id="${i}" class="card">
			<figure class="card__face-front">
			<div class="card__face-img">
					<img class="main__img" src="/src/${imgArr[i]}" alt=""> 
				</div>				
				<div class="card__face-word">
				<span>${element}</span> 					
			</div> `;
		card.addEventListener('click', (e) => {
			removeSet();
			console.log(e.target.closest('.card').getAttribute('data-id'));
			const idCard = +e.target.closest('.card').getAttribute('data-id') + 1;
			console.log(idCard);
			
			renderCardsSections(idCard);
		});
		

		cardWrapper.append(card);
		
	});
}
renderMainSection();


function renderCardsSections(setNum) {
	removeSet();
	cards[setNum].forEach((element) => {
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
                    <audio class="audio-player" src="/src/${element.audioSrc}"></audio> 						
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
		audioPlay();
	});
	
}

function audioPlay() {
	if (isPlay) {
		const sounds = document.querySelectorAll('.audio-player');

		let counter = 0;
		let soundInterval = setInterval(() => {
			sounds[counter].play();
			counter ++;
			if (counter >= sounds.length) {
				clearInterval(soundInterval);
			}
		}, 2400);
	}
}

function renderAsideCategoriesMenu() {
	cards[0].forEach((item, i) => {
		const linkItem = document.createElement('li');
		linkItem.classList.add('categories__list-item');
		linkItem.textContent = item;
		linkItem.setAttribute('data-id', i);
		
		linkItem.addEventListener('click', (e) => {
			console.log(e.target);
			const idCard = +e.target.closest('.categories__list-item').getAttribute('data-id') + 1;
			renderCardsSections(idCard);
			categoryHide();
		});
		categoriesMenu().append(linkItem);
	});
}
renderAsideCategoriesMenu();



// function renderPlayMode(setNum) {
// 	removeSet();
// 	cards[setNum].forEach((element) => {
// 		const card = document.createElement('div');
// 		card.classList.add('cards__scene');

// 		card.innerHTML = `
//             <div class="card play">
//             <figure class="card__face-front">
//             <div class="card__face-img">
//                 <img src="/src/${element.image}" alt=""> 
//             </div>					
// 			<div class="card__face-buttons">
//                 <div class="card__face-buttons-rotate">
// 			</div>
//                 <div class="card__face-buttons-audio"> 							
													
//                     <audio class="audio-player" src="/src/${element.audioSrc}"></audio> 						
//                 </div>
//             </div>
//         </figure>
//                 `;

// 		getCardWrapper().append(card);		
		
// 	});
// }


const categoryShow = () => {
	getCategorySection().classList.toggle('show');
	getOverlay().classList.add('show');
};
const categoryHide = () => {
	getCategorySection().classList.remove('show');
	getOverlay().classList.remove('show');
};


function addListeners() {
	const cardWrapper = getCardWrapper();
	cardWrapper.addEventListener('click', (e) => {
		
		if (e.target.classList.contains('audio')) {
			
			
			e.target.parentElement.lastElementChild.play();
		}
	});

	cardWrapper.addEventListener('click', (e) => {
		if (e.target.classList.contains('rotate')) {

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

	cardWrapper.addEventListener('click', () => {
		document.querySelectorAll('.is-flipped').forEach(card => {
			setTimeout(() => {
				card.classList.remove('is-flipped');
			}, 2400);
		});
	});
	
	// const playModeToggle = () => {
	// 	isPlay = !isPlay;
	// 	console.log(isPlay);
		
	// };
	
	getCategoryBtn().addEventListener('click', categoryShow);
	getCategoryCloseBtn().addEventListener('click', categoryHide);
	getOverlay().addEventListener('click', categoryHide);
	asideMainLink.addEventListener('click', renderMainSection);
	asideMainLink.addEventListener('click', categoryHide);
	headerTitle.addEventListener('click', renderMainSection);
	// getPlayButton().addEventListener('click', playModeToggle);
	
}
addListeners();


