import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#" className="nav__logo">JD</a>
      <ul className="nav__links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="nav__link">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
