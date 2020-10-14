import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
	constructor(items, threshold){
		this.itemsToReveal = items
		this.threshold = threshold
		this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
		this.browserHeight = window.innerHeight
	}

	fireEvents(){
		window.addEventListener('scroll', this.scrollThrottle)
		window.addEventListener('resize', debounce(() => {
			console.log('Resizing was debounced')
			this.browserHeight = window.innerHeight
		}, 333))
	}

	calcCaller(){
		this.itemsToReveal.forEach(item => {
			if(!item.isRevealed) this.calculateIfScrolledTo(item)
		})
	}

	calculateIfScrolledTo(item){
		if((window.scrollY + this.browserHeight) > item.offsetTop){
			console.log('Item was calculated')
			let scrollPercent = (item.getBoundingClientRect().y / this.browserHeight) * 100
			if(scrollPercent < this.threshold) {
				item.classList.add('reveal-item--visible')
				item.isRevealed = true
				if(item.isLastItem) window.removeEventListener('scroll', this.scrollThrottle)
			}
		}
	}

	hide(){
		this.itemsToReveal.forEach(item => {
			item.classList.add('reveal-item')
			item.isRevealed = false
		})
		this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
	}
}

export default RevealOnScroll