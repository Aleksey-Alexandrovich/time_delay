'use strict';

const input = document.createElement('input');
input.type = 'text';
const paragraph = document.createElement('p');

document.body.append(input);
document.body.append(paragraph);


function setParagraph (value) {
	paragraph.innerHTML = value;
}

input.addEventListener('input', (e) => {
	setTimeout(() => {
		setParagraph(e.target.value);
	}, 300)
})


