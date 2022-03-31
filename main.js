const navbarItems = document.querySelector('.navbarItems');
const downArrow = document.querySelector('.downArrow a');

window.addEventListener('scroll', fixNav);


function fixNav(){
	// Add class when you scroll to a certain point
	if(window.scrollY > navbarItems.offsetHeight + 650){
		navbarItems.classList.add('active');
	} else{
		navbarItems.classList.remove('active')
	}
}

function arrowBounce(){
	downArrow.classList.toggle('move')
}


setInterval(arrowBounce, 800)







