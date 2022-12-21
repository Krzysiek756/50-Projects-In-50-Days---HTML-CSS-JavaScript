const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container'); // pobieranie elementów


open.addEventListener('click', () => container.classList.add('show-nav')); // funkcja strzałkowa ustawiona na nasłuchiwanie na button
// dodajaca klase show-nav// 

close.addEventListener('click', () => container.classList.remove('show-nav')); // funkcja strzałkowa ustawiona na nasłuchiwanie na button
// usuwajaca klase show-nav