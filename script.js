const words = [
  "погода",
  "бухгалтерия",
  "проезд", 
  "динозавр",
  "мелодия",
  "чувство",
  "автомобиль",
  "лотерея",
  "правило",
  "закон",
  "объятие",
  "событие",
  "случайность",
  "везение",
  "дождь",
  "туман",
  "окно",
  "птица",
  "мартышка",
  "зависимость",
  "алкоголь",
  "сценарий",
  "клавиатура",
  "мышь",
  "монитор",
  "провод",
  "повод",
  "возгорание",
  "ветер",
  "сияние",
  "отдых",
  "каникулы",
  "работа",
  "напряжение",
  "кинофильм",
  "просмотр",
  "компьютер",
  "криптография",
  "краски",
  "слово",
  "победа",
  "проигрыш"];

let world = document.querySelector(".currentworld")
let worlds = document.querySelector(".keyboard") 
function pickworld() {
  return Math.floor(Math.random() * (words.length - 0 + 1)) + 0;
}

const word = words[pickworld()];


platBut.addEventlisener("click", funcrtion () {
  for (let i = 1072; i <= 1103; i++) {
    let buttin = document.createElement('buttion')
    buttion.innerHTML = String.fromCharCode(i)
    KeyboardEvent.append(buttion)
    buttion.addEventlisener('click', (e) =>
      initGame(e.target, String.fromCharCode(i))
    )
}
  for (let i = 0; i < currentWord.length; i ++) {
    word.innerHTML += "_"
  }
  playBut.style.display = "none"
  game.style.display = "flex"
})

