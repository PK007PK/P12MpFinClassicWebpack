import HandleBurgerMenu from './HandleBurgerMenu/HandleBurgerMenu';
import AddSmScrollToMainMenu from './AddSmScrollToMainMenu/AddSmScrollToMainMenu';
import BackgroundLazyLoad from './BackgroundLazyLoad/BackgroundLazyLoad';

HandleBurgerMenu();
AddSmScrollToMainMenu();
BackgroundLazyLoad();

import Siema from 'siema';

// *** Siema
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// prev.addEventListener('click', () => mySiema.prev());
// next.addEventListener('click', () => mySiema.next());

// Because this is possible
// It doesn't mean that this is a best solution
// This is a case when you may look at some more complex tools
// Like very cool Flickity or Swiper

const siemas = document.querySelectorAll('.siema');

// Extend prototype with method that adds arrows to DOM
// Style the arrows with CSS or JS — up to you mate
Siema.prototype.addArrows = function() {
  // make buttons & append them inside Siema's container
  this.prevArrow = document.createElement('button');
  this.nextArrow = document.createElement('button');
  this.prevArrow.className =
    'prev temp-04-doswiadczenie__button temp-04-doswiadczenie__button--left';
  this.prevArrow.setAttribute('aria-label', 'Back');
  let leftIco = document.createElement('i');
  leftIco.className = 'icon-left-open-big';

  this.prevArrow.appendChild(leftIco);

  this.nextArrow.className =
    'next temp-04-doswiadczenie__button temp-04-doswiadczenie__button--right';
  this.nextArrow.setAttribute('aria-label', 'Next');
  let rightIco = document.createElement('i');
  rightIco.className = 'icon-right-open-big';
  this.nextArrow.appendChild(rightIco);

  this.selector.appendChild(this.prevArrow);
  this.selector.appendChild(this.nextArrow);

  // event handlers on buttons
  this.prevArrow.addEventListener('click', () => this.prev());
  this.nextArrow.addEventListener('click', () => this.next());
};

// div3Element.className = 'prev temp-04-doswiadczenie__button temp-04-doswiadczenie__button--left'

// this is fairly new way of looping through DOM Elements
// More about ithere: https://pawelgrzybek.com/loop-through-a-collection-of-dom-elements/
// For better compatibility I suggest using for loop
for (const siema of siemas) {
  const instance = new Siema({
    selector: siema,
    loop: true,
    perPage: {
      768: 2,
      1100: 3,
    },
  });
  instance.addArrows();
}
