const navbarItems = document.querySelector('.navbarItems');
const downArrow = document.querySelector('.downArrow a');
const faqItems = document.querySelectorAll('.faqItem h3');

// add class to navbar when certain point on screen is reached
window.addEventListener('scroll', fixNav);
// Faq buttons event listener
faqItems.forEach((item) => {
	item.addEventListener('click', () => {
		item.parentNode.parentNode.classList.toggle('active')
	})
})


function fixNav(){
	// Add class when you scroll to a certain point
	if(window.scrollY > navbarItems.offsetHeight + 540){
		navbarItems.classList.add('active');
	} else{
		navbarItems.classList.remove('active')
	}
}
// Toggle the move class to the downArrow
function arrowBounce(){
	downArrow.classList.toggle('move')
}

// Run arrowBounce function every 1050ms
setInterval(arrowBounce, 1050)







