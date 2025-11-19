import './style.css'

// Typing animation effect
function typeText(element: HTMLElement, text: string, speed: number = 100): void {
  let i = 0
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  type()
}

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle') as HTMLElement
const navLinks = document.querySelector('.nav-links') as HTMLElement

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })

  // Close menu when clicking a link
  const links = navLinks.querySelectorAll('a')
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
    })
  })
}

// Start typing animation when page loads
window.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.querySelector('.typing-text') as HTMLElement
  if (nameElement) {
    typeText(nameElement, 'jboogxcreative', 150)
  }
  console.log('jboogxcreative Portfolio Loaded!')
})
