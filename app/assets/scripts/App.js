import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

if(module.hot) module.hot.accept()

const mobileMenu = new MobileMenu()
const stickyHeader = new StickyHeader()
const revealOnScroll = new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
const revealOnScroll2 = new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)

mobileMenu.fireEvents()
stickyHeader.fireEvents()
revealOnScroll.hide()
revealOnScroll.fireEvents()
revealOnScroll2.hide()
revealOnScroll2.fireEvents()