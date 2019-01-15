let input = document.getElementById('name');
let result = document.getElementById('result');
 
input.oninput = function() {
	
	if (input.value.charAt(0).toUpperCase() != input.value.charAt(0)) {
		 result.innerHTML = 'Имена нужно писать с большой буквы!';
		 result.style.color = ('color', 'red'); 
	} else if (input.value.charAt(0).toUpperCase() == input.value.charAt(0)) {
		 result.innerHTML = '';
		 result.style.color = ('color', 'green');

	
	switch (input.value){   
		case '': result.innerHTML = 'Как зовут твоих родных?';
			break;
		case 'Мама оля':
		case 'Мама Оля': 	
		case 'Оля': 
		case 'Ольга': 
			result.style.fontSize = ('font-size', '40px');
			result.innerHTML = 'Правильно! Это твоя Мама';
			break;
		case 'Наташа':
		case 'Наталья': 
			result.style.fontSize = ('font-size', '40px');
			result.innerHTML = 'Правильно! Это твоя Тётя';
			break;
		case 'Настя':
		case 'Анастасия': 
			result.style.fontSize = ('font-size', '40px');		
			result.innerHTML = 'Правильно! Это твоя Тётичка';
			break;
		case 'Людмила':
		case 'Люда': 
			result.style.fontSize = ('font-size', '40px');
			result.innerHTML = 'Правильно! Это твоя Бабушка';
			break;
		case 'Папа мансур':
		case 'Папа Мансур':
		case 'Мансур': 
			result.style.fontSize = ('font-size', '40px');
			result.innerHTML = 'Правильно! Это твой Папа';
			break;
		case 'Мама': 
			result.style.fontSize = ('font-size', '40px');
			result.innerHTML = 'А как зовут Маму?';
			break;
		case 'Папа': 
			result.style.fontSize = ('font-size', '40px');
			result.innerHTML = 'А как зовут Папу?';
			break;			
		default: 
			let defaultSay = ['Может еще одну букву?','Ага, давай еще!', 'Чего-то нехватает', 'Что-то не так', 'Давай еще подумаем', 'Еще не совсем правильно', 'Хм, давай подумай сильнее'];
			let randomSay = defaultSay[Math.floor(Math.random() * defaultSay.length)];
			result.style.fontSize = ('font-size', '30px');
			result.style.color = ('color', 'red');
			result.innerHTML = randomSay;
			break;
		};
 	};   
};

	 
 
 