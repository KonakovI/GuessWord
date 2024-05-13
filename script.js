// Массив слов для выбора
const words = [
	"чолпу",
	"сибиртги",
	"бичен",
	"ай",
	"сюрме",
	"чёгюч",
	"къалам",
	"бушто",
	"аппа",
	"терек",
	"къойчу",
  ];
  
  // Словарь подсказок
  let hintsByAnswerDictionary = {
	"чолпу": ["аны бла шорпа къуядыла"],
	"сибиртги": ["юйню тюбюн сыйпайдыла"],
	"бичен": ["малла ашайдыла"],
	"ай": ["кече кёкде болады"],
	"сюрме": ["агъачны сюрмелейдиле"],
	"чёгюч": ["аны бла чюйлени урадыла"],
	"къалам": ["дефтерге аны бла жазадыла"],
	"бушто": ["айран бла гыржындан этиледи"],
	"аппа": ["атангы атасы"],
	"терек": ["юсюнде кёгетле ёседиле"],
	"къойчу": ["къойланы кютеди"],
  };
  
  // Получение случайного слова из списка ПЕРЕНОСИМ СЮДА!
  let randomIndex = Math.floor(Math.random() * words.length);
  let selectedWord = words[randomIndex];
  console.log(selectedWord);
  
  // Для хранения уже угаданных букв
  let guessedlist = [];
  
  // Начальное отоброжение слова
  let displayWord = "";
  for (let i = 0; i < selectedWord.length; i++) {
	displayWord += "_ ";
  }
  document.getElementById("displayWord").textContent = displayWord;
  
  // Функция для получения подсказки по выбранному слову
  function getHint(){
	let index = words.indexOf(selectedWord);
	return hintsByAnswerDictionary[words[index]][0];
  }
  
  // Функция для обновления подсказки на странице
  function updateHint(){
	let hintElement = document.getElementById("hint");
	// Вызываем getHint с selectedWord
	hintElement.textContent = getHint(selectedWord); 
  }
  
  // Вызываем функцию updateHint() после загрузки DOM
  document.addEventListener('DOMContentLoaded', (event) => {
	updateHint(); 
  });
  
  // Функция для проверки угаданной буквы
  function guessLetter() {
	let inputElement = document.getElementById("letter-input");
	// Проверка на пустой ввод
	if (!inputElement.value) {
	  alert("Бир харфны жазаргъа керекди!");
	  return;
	}
	// Получение введенных символов и приведение к нижнему регистру
	let letter = inputElement.value.toLowerCase();
	// Очистка поля ввода
	inputElement.value = "";
	// Проверка была ли уже угадана буква
	if (guessedlist.includes(letter)) {
	  alert("Бу харфны жазгъанса!");
	  return;
	}
	// Добавление буквы в массив угаданных
	guessedlist.push(letter);
	// Обновление отображения слова на основе угаданных букв
	let updatedDisplay = "";
	let allLettersGuessed = true;
	for (let i = 0; i < selectedWord.length; i++) {
	  if (guessedlist.includes(selectedWord[i])) {
		updatedDisplay += selectedWord[i] + " ";
	  } else {
		updatedDisplay += "_ ";
		allLettersGuessed = false;
	  }
	}
	document.getElementById("displayWord").textContent = updatedDisplay;
	// Проверка были ли угаданы все буквы
	if (allLettersGuessed) {
	  alert("Апперим! Сёз къуралды!");
	}
  }