const callback_cat = () => {
  cat_display.style.display = 'inline-block';
  tmp.style.width = '560px';
  tmp2.style.width = '10px';
  dog_display.style.display = 'none';
};

const callback_dog = () => {
  dog_display.style.display = 'inline-block';
  tmp.style.width = '10px';
  tmp2.style.width = '560px';
  cat_display.style.display = 'none';
};

const callback_double = () => {
  cat_display.style.display = 'inline-block';
  dog_display.style.display = 'inline-block';
  tmp.style.width = '285px';
  tmp2.style.width = '285px';
};

var tmp = document.querySelector('.cat-col')
var tmp2 = document.querySelector('.dog-col')
var dog_display = document.querySelector('#dog-js');
var cat_display = document.querySelector('#cat-js');
const button_left = document.querySelector('#btn-left');
const button_right = document.querySelector('#btn-right');
const button_double = document.querySelector('#btn-double');
button_left.addEventListener('click', callback_cat);
button_right.addEventListener('click', callback_dog);
button_double.addEventListener('click', callback_double);
