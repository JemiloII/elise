'use strict';

var d = document,
	elise = d.getElementById('elise'),
	eliseHead = elise.getElementsByClassName('head')[0],
	eliseLegs = elise.getElementsByClassName('legs')[0];

function toggleLegs() {
	eliseLegs.classList.toggle('legs1');
	eliseLegs.classList.toggle('legs2');	
 	setTimeout(toggleLegs, 1000);
}

function toggleHeads() {
	eliseHead.classList.toggle('head1');
	eliseHead.classList.toggle('head2');
	console.log('mouseover')
}

toggleLegs();

eliseHead.addEventListener('mouseover', toggleHeads);
eliseHead.addEventListener('mouseout', toggleHeads);