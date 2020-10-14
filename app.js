// variables
const stopwatch = document.querySelector('.stopwatch');
const laps = document.querySelector('.laps');

let ms = 0;
let s = 0;
let m = 0;
let timer = false;

// functions

const start = () => {
	if ( !timer )
		timer = setInterval( run, 10 );
}

const run = () => {
	ms++;
	if ( ms == 100 ) {
		ms = 0;
		s++;
	}

	if ( s == 60 ) {
		s = 0;
		m++;
	}

	stopwatch.textContent = getTimer();
}

const getTimer = () => {
	return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
}

const clearTimer = () => {
	clearInterval(timer);
	timer = false;
}

const reset = () => {
	clearTimer();
	ms = 0;
	s = 0;
	m = 0;

	stopwatch.textContent = getTimer();	
}


const pause = () => {
	clearTimer();
}


const restart = () => {
	reset();
	start();
}


const lap = () => {
	const li = document.createElement('li');
	li.innerText = getTimer();

	if ( timer )
		laps.appendChild(li);
}


const resetLap = () => {
	laps.innerHTML = '';
}