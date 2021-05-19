const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

smothScrollElems.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // получаем id элемента от link, на который кликнули, и убираем #
    const id = link.getAttribute('href').substring(1);
    
    //блок, до которого должны проскроллить
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});