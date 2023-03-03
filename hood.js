
let diner = ['LushBBQ', 'Subway', 'OhMai']
let randomEats = document.getElementById('random');

randomEats.addEventListener('click', () => {
    let randomRest = getRandomRest(diner);
    alert(`You should try ${randomRest}!`);
})

function getRandomRest(diner) {
    const randomIndex = Math.floor(Math.random() * diner.length);
    return diner[randomIndex];
  }