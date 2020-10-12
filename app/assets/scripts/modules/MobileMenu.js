class MobileMenu {
	constructor(){
		this.menuIcon = document.querySelector('.site-header__menu-icon')
		this.menuContent = document.querySelector('.site-header__menu')
		this.siteHeader = document.querySelector('.site-header')
	}

	fireEvents(){
		this.menuIcon.addEventListener('click', () => this.toggleMenu())
	}

	toggleMenu(){
		this.menuContent.classList.toggle('site-header__menu--is-visible')
		this.siteHeader.classList.toggle('site-header--background')
		this.menuIcon.classList.toggle('site-header__menu-icon--x')
	}
}

export default MobileMenu