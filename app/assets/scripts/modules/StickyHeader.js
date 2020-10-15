import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
	constructor(){
		this.siteHeader = document.querySelector('.site-header')
		this.sections = document.querySelectorAll('.page-section')
		this.browserHeight = window.innerHeight
		this.previousScrollY = window.scrollY
	}

	fireEvents(){
		window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
		window.addEventListener('resize', debounce(() => {
			this.browserHeight = window.innerHeight
		}, 333))
	}
 
	calcSection(section){
		if((window.scrollY + this.browserHeight) > section.offsetTop && window.scrollY < (section.offsetTop + section.offsetHeight)) {
			let scrollPercent = (section.getBoundingClientRect().y / this.browserHeight) * 100
			if(scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up'){
				let matchingLink = section.getAttribute('data-matching-link')
				document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(link => link.classList.remove('is-current-link'))
				document.querySelector(matchingLink).classList.add('is-current-link')
			}
		}
	}

	runOnScroll(){
		this.determineScrollDirection()
		window.scrollY > 60 ? this.siteHeader.classList.add('site-header--dark') : this.siteHeader.classList.remove('site-header--dark')
		// this.sections.forEach(section => this.calcSection(section))
		for (let section of this.sections) this.calcSection(section)
	}

	determineScrollDirection(){
		window.scrollY > this.previousScrollY ? this.scrollDirection = 'down' : this.scrollDirection = 'up'
		this.previousScrollY = window.scrollY
	}

}

export default StickyHeader