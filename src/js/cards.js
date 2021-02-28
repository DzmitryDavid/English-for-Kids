const cards = [
	['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Fruits'],
	[
		{
			word: 'cry',
			translation: 'плакать',
			image: 'img/actionA/cry.jpg',
			audioSrc: 'audio/cry.mp3'
		},
		{
			word: 'dance',
			translation: 'танцевать',
			image: 'img/actionA/dance.jpg',
			audioSrc: 'audio/dance.mp3'
		},
		{
			word: 'dive',
			translation: 'нырять',
			image: 'img/actionA/dive.jpg',
			audioSrc: 'audio/dive.mp3'
		},
		{
			word: 'draw',
			translation: 'рисовать',
			image: 'img/actionA/draw.jpg',
			audioSrc: 'audio/draw.mp3'
		},
		{
			word: 'fish',
			translation: 'ловить рыбу',
			image: 'img/actionA/fish.jpg',
			audioSrc: 'audio/fish.mp3'
		},
		{
			word: 'fly',
			translation: 'летать',
			image: 'img/actionA/fly.jpg',
			audioSrc: 'audio/fly.mp3'
		},
		{
			word: 'hug',
			translation: 'обнимать',
			image: 'img/actionA/hug.jpg',
			audioSrc: 'audio/hug.mp3'
		},
		{
			word: 'jump',
			translation: 'прыгать',
			image: 'img/actionA/jump.jpg',
			audioSrc: 'audio/jump.mp3'
		}
	],
	[
		{
			word: 'open',
			translation: 'открывать',
			image: 'img/actionB/open.jpg',
			audioSrc: 'audio/open.mp3'
		},
		{
			word: 'play',
			translation: 'играть',
			image: 'img/actionB/play.jpg',
			audioSrc: 'audio/play.mp3'
		},
		{
			word: 'point',
			translation: 'указывать',
			image: 'img/actionB/point.jpg',
			audioSrc: 'audio/point.mp3'
		},
		{
			word: 'ride',
			translation: 'ездить',
			image: 'img/actionB/ride.jpg',
			audioSrc: 'audio/ride.mp3'
		},
		{
			word: 'run',
			translation: 'бегать',
			image: 'img/actionB/run.jpg',
			audioSrc: 'audio/run.mp3'
		},
		{
			word: 'sing',
			translation: 'петь',
			image: 'img/actionB/sing.jpg',
			audioSrc: 'audio/sing.mp3'
		},
		{
			word: 'skip',
			translation: 'пропускать, прыгать',
			image: 'img/actionB/skip.jpg',
			audioSrc: 'audio/skip.mp3'
		},
		{
			word: 'swim',
			translation: 'плавать',
			image: 'img/actionB/swim.jpg',
			audioSrc: 'audio/swim.mp3'
		}
	],
	[
		{
			word: 'cat',
			translation: 'кот',
			image: 'img/animalsA/cat.png',
			audioSrc: 'audio/cat.mp3'
		},
		{
			word: 'chick',
			translation: 'цыплёнок',
			image: 'img/animalsA/chick.png',
			audioSrc: 'audio/chick.mp3'
		},
		{
			word: 'chicken',
			translation: 'курица',
			image: 'img/animalsA/chicken.png',
			audioSrc: 'audio/chicken.mp3'
		},
		{
			word: 'dog',
			translation: 'собака',
			image: 'img/animalsA/dog.png',
			audioSrc: 'audio/dog.mp3'
		},
		{
			word: 'horse',
			translation: 'лошадь',
			image: 'img/animalsA/horse.png',
			audioSrc: 'audio/horse.mp3'
		},
		{
			word: 'pig',
			translation: 'свинья',
			image: 'img/animalsA/pig.png',
			audioSrc: 'audio/pig.mp3'
		},
		{
			word: 'rabbit',
			translation: 'кролик',
			image: 'img/animalsA/rabbit.png',
			audioSrc: 'audio/rabbit.mp3'
		},
		{
			word: 'sheep',
			translation: 'овца',
			image: 'img/animalsA/sheep.png',
			audioSrc: 'audio/sheep.mp3'
		}
	],
	[
		{
			word: 'bird',
			translation: 'птица',
			image: 'img/animalsB/bird.png',
			audioSrc: 'audio/bird.mp3'
		},
		{
			word: 'fish',
			translation: 'рыба',
			image: 'img/animalsB/fish.png',
			audioSrc: 'audio/fish.mp3'
		},
		{
			word: 'frog',
			translation: 'жаба',
			image: 'img/animalsB/frog.png',
			audioSrc: 'audio/frog.mp3'
		},
		{
			word: 'giraffe',
			translation: 'жирафа',
			image: 'img/animalsB/giraffe.png',
			audioSrc: 'audio/giraffe.mp3'
		},
		{
			word: 'lion',
			translation: 'лев',
			image: 'img/animalsB/lion.png',
			audioSrc: 'audio/lion.mp3'
		},
		{
			word: 'mouse',
			translation: 'мышь',
			image: 'img/animalsB/mouse.png',
			audioSrc: 'audio/mouse.mp3'
		},
		{
			word: 'turtle',
			translation: 'черепаха',
			image: 'img/animalsB/turtle.png',
			audioSrc: 'audio/turtle.mp3'
		},
		{
			word: 'dolphin',
			translation: 'дельфин',
			image: 'img/animalsB/dolphin.png',
			audioSrc: 'audio/dolphin.mp3'
		}
	],
	[
		{
			word: 'skirt',
			translation: 'юбка',
			image: 'img/clothes/skirt.png',
			audioSrc: 'audio/skirt.mp3'
		},
		{
			word: 'pants',
			translation: 'брюки',
			image: 'img/clothes/pants.png',
			audioSrc: 'audio/pants.mp3'
		},
		{
			word: 'blouse',
			translation: 'блузка',
			image: 'img/clothes/blouse.png',
			audioSrc: 'audio/blouse.mp3'
		},
		{
			word: 'dress',
			translation: 'платье',
			image: 'img/clothes/dress.png',
			audioSrc: 'audio/dress.mp3'
		},
		{
			word: 'boot',
			translation: 'ботинок',
			image: 'img/clothes/boot.png',
			audioSrc: 'audio/boot.mp3'
		},
		{
			word: 'shirt',
			translation: 'рубашка',
			image: 'img/clothes/shirt.png',
			audioSrc: 'audio/shirt.mp3'
		},
		{
			word: 'coat',
			translation: 'пальто',
			image: 'img/clothes/coat.png',
			audioSrc: 'audio/coat.mp3'
		},
		{
			word: 'shoe',
			translation: 'туфли',
			image: 'img/clothes/shoe.png',
			audioSrc: 'audio/shoe.mp3'
		}
	],
	[
		{
			word: 'sad',
			translation: 'грустный',
			image: 'img/Emotions/sad.jpg',
			audioSrc: 'audio/sad.mp3'
		},
		{
			word: 'angry',
			translation: 'сердитый',
			image: 'img/Emotions/angry.jpg',
			audioSrc: 'audio/angry.mp3'
		},
		{
			word: 'happy',
			translation: 'счастливый',
			image: 'img/Emotions/happy.jpg',
			audioSrc: 'audio/happy.mp3'
		},
		{
			word: 'tired',
			translation: 'уставший',
			image: 'img/Emotions/tired.jpg',
			audioSrc: 'audio/tired.mp3'
		},
		{
			word: 'surprised',
			translation: 'удивлённый',
			image: 'img/Emotions/surprised.jpg',
			audioSrc: 'audio/surprised.mp3'
		},
		{
			word: 'scared',
			translation: 'испуганный',
			image: 'img/Emotions/scared.jpg',
			audioSrc: 'audio/scared.mp3'
		},
		{
			word: 'smile',
			translation: 'улыбка',
			image: 'img/Emotions/smile.jpg',
			audioSrc: 'audio/smile.mp3'
		},
		{
			word: 'laugh',
			translation: 'смех',
			image: 'img/Emotions/laugh.jpg',
			audioSrc: 'audio/laugh.mp3'
		}
	],
	[
		{
			word: 'orange',
			translation: 'апельсин',
			image: 'img/fruits/orange.png',
			audioSrc: 'audio/sad.mp3'
		},
		{
			word: 'avocado',
			translation: 'авокадо',
			image: 'img/fruits/avocado.png',
			audioSrc: 'audio/angry.mp3'
		},
		{
			word: 'grape',
			translation: 'виноград',
			image: 'img/fruits/grape.png',
			audioSrc: 'audio/happy.mp3'
		},
		{
			word: 'pineapple',
			translation: 'ананас',
			image: 'img/fruits/pineapple.png',
			audioSrc: 'audio/tired.mp3'
		},
		{
			word: 'persimmon',
			translation: 'хурма',
			image: 'img/fruits/persimmon.png',
			audioSrc: 'audio/surprised.mp3'
		},
		{
			word: 'blueberries',
			translation: 'черника',
			image: 'img/fruits/Blueberries.png',
			audioSrc: 'audio/scared.mp3'
		},
		{
			word: 'strawberry',
			translation: 'клубника',
			image: 'img/fruits/strawberry.png',
			audioSrc: 'audio/smile.mp3'
		},
		{
			word: 'watermelon',
			translation: 'арбуз',
			image: 'img/fruits/watermelon.png',
			audioSrc: 'audio/laugh.mp3'
		}
	],
	
]
export default cards;