import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'


if(module.hot) module.hot.accept()

const mobileMenu = new MobileMenu()
const stickyHeader = new StickyHeader()
const revealOnScroll = new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
const revealOnScroll2 = new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)
let modal


mobileMenu.fireEvents()
stickyHeader.fireEvents()
revealOnScroll.hide()
revealOnScroll.fireEvents()
revealOnScroll2.hide()
revealOnScroll2.fireEvents()

document.querySelectorAll('.open-modal').forEach(el => {
	el.addEventListener('click', e => {
		e.preventDefault()
		if(typeof modal == 'undefined') {
			import(/* webpackChunkName: 'modal' */ './modules/Modal')
			.then(x => {
				modal = new x.default()
				setTimeout(() => modal.openModal(), 50)
			})
			.catch(() => console.log('There was a problem'))
		} else {
			modal.openModal()
		}
	})
})