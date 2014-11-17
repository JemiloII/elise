'use strict';

var d = document,
	elise = d.getElementById('elise'),
	eliseHead = elise.getElementsByClassName('head')[0],
	eliseLegs = elise.getElementsByClassName('legs')[0];

function toggleLegs(n) {
 	setTimeout(legs, n*1, 1);
	setTimeout(legs, n*2, 2);
	setTimeout(legs, n*3, 4);
	setTimeout(legs, n*4, 5);
	setTimeout(legs, n*5, 6);
	setTimeout(legs, n*6, 5);
	setTimeout(legs, n*7, 3);
	setTimeout(legs, n*8, 2);
	setTimeout(toggleLegs, n*8, n);
}

function legs(n){
	var classes = eliseLegs.classList,
		i = classes.length;

	while(i--){
		if(classes[i] !== 'legs'){
			eliseLegs.classList.remove(classes[i]);
		}
	}
	eliseLegs.classList.add('legs'+n);
}

function toggleHeads() {
	eliseHead.classList.toggle('head1');
	eliseHead.classList.toggle('head2');
	console.log('mouseover');
}

toggleLegs(150);

eliseHead.addEventListener('mouseover', toggleHeads);
eliseHead.addEventListener('mouseout', toggleHeads);