let offset = 0;
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.button1').addEventListener('click', () => {
	offset = 0
	sliderLine.style.left = offset + 'px'
})

document.querySelector('.button2').addEventListener('click', () => {
	offset = -1000
	sliderLine.style.left = offset + 'px'
})

document.querySelector('.button3').addEventListener('click', () => {
	offset = -2000
	sliderLine.style.left = offset + 'px'
})

document.querySelector('.button4').addEventListener('click', () => {
	offset = -3000
	sliderLine.style.left = offset + 'px'
})

document.querySelector('.button5').addEventListener('click', () => {
	offset = -4000
	sliderLine.style.left = offset + 'px'
})

document.querySelector('.button6').addEventListener('click', () => {
	offset = -5000
	sliderLine.style.left = offset + 'px'
})
