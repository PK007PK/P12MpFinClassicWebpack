import HandleBurgerMenu from './HandleBurgerMenu/HandleBurgerMenu';
import AddSmScrollToMainMenu from './AddSmScrollToMainMenu/AddSmScrollToMainMenu';
import BackgroundLazyLoad from './BackgroundLazyLoad/BackgroundLazyLoad';

HandleBurgerMenu();
AddSmScrollToMainMenu();
BackgroundLazyLoad();

import AOS from 'aos';
AOS.init({
  startEvent: 'load',
});

// *** Siema
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// prev.addEventListener('click', () => mySiema.prev());
// next.addEventListener('click', () => mySiema.next());

// Because this is possible
// It doesn't mean that this is a best solution
// This is a case when you may look at some more complex tools
// Like very cool Flickity or Swiper
