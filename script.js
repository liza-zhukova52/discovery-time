let phrases = [
  { text: 'Прогуляться незнакомым маршрутом.', image: 'images/element0.png' },
  { text: 'Устроить вечер чтения любимой книги.', image: 'images/element1.png' },
  { text: 'Вместе с друзьями приготовить ужин.', image: 'images/element2.png' },
  { text: 'Посмотреть вдохновляющий фильм.', image: 'images/element3.png' },
  { text: 'Совершить путешествие «туда-обратно».', image: 'images/element4.png' },
  {
    text: 'Отправиться на прогулку быстрым шагом с партнёром или в одиночестве под любимые мелодии',
    image: 'images/element5.png',
  },
];

function getRandomElement(arr, lastIndex) {
  let randIndex;
  do {
    randIndex = Math.floor(Math.random() * arr.length);
  } while (randIndex === lastIndex);
  return { element: arr[randIndex], index: randIndex };
}

let phrase = document.querySelector('.phrase');
let button = document.querySelector('.button');
let image = document.querySelector('.img');

let lastIndex = -1; // Хранение последнего индекса

button.addEventListener('click', function () {
  let result = getRandomElement(phrases, lastIndex);
  let randomElement = result.element;
  lastIndex = result.index; // Сохраняем новый индекс

  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);

  if (randomElement.text.length > 40) {
    phrase.style.fontSize = '40px';
  } else {
    phrase.style.fontSize = ''; // Сбрасываем размер шрифта
  }
});

for (let i = 0; i < 3; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image);
}
