'use strict';

const input = document.createElement('input');
input.type = 'text';
const paragraph = document.createElement('p');

document.body.append(input);
document.body.append(paragraph);

  
let f = debounce(setParagraph, 300);

function debounce(func, timeout = 300){
	let timer;
	return (...args) => {
	  clearTimeout(timer);
	  timer = setTimeout(() => { func.apply(this, args); }, timeout);
	};
  }

function setParagraph (value) {
	paragraph.innerHTML = value;
}

input.addEventListener('input', (e) => {
	f(e.target.value);
})


