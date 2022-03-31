const navbarItems = document.querySelector('.navbarItems');

navbarItems.classList.remove('active')
window.addEventListener('scroll', fixNav);

function fixNav(){
	if(window.scrollY > navbarItems.offsetHeight + 600){
		navbarItems.classList.add('active');
	} else{
		navbarItems.classList.remove('active')
	}
}






