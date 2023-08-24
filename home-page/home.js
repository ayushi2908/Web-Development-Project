/* const card = document.querySelector('.card__inner');

card.addEventListener('click',function () {
  card.classList.toggle('is-flipped');
}); */

function flipCard(cardld)
{
  document.getElementById(cardld).classList.toggle('is-flipped');
}
