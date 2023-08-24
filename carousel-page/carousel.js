const carousel = document.getElementById("carousel");
const carouselPages = carousel.children;
carouselPages[0].className = 'carousel-page active show';

document.onkeydown = move;
var currentPage = 0;
var vid = document.getElementById("video"+(currentPage+1));
vid.play();
var MAX_PAGES = carouselPages.length - 1;

const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';

function move(event) {
  var vid = document.getElementById("video"+(currentPage+1));
  vid.pause();
  const { key } = event;
  const hasPressedKey = (key === ARROW_RIGHT || key === ARROW_LEFT);

  if(!hasPressedKey) return;

  const forward = (key === ARROW_RIGHT);

  if (forward && !(currentPage >= MAX_PAGES)) {
    carouselPages[currentPage].className = 'carousel-page move-left hide';
    currentPage += 1;
  } else if (!forward && !(currentPage <=0)) {
    carouselPages[currentPage].className = 'carousel-page';
    currentPage -= 1;
  }
  carouselPages[currentPage].className = 'carousel-page active show';
  vid = document.getElementById("video"+(currentPage+1));
  vid.play();
}
