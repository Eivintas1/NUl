import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'

function useScramble(text, trigger, duration = 1200) {
  const [display, setDisplay] = useState(text)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!trigger) {
      setDisplay(text)
      return
    }

    const start = performance.now()
    const length = text.length

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)

      const resolved = Math.floor(progress * length)
      let result = ''
      for (let i = 0; i < length; i++) {
        if (i < resolved) {
          result += text[i]
        } else if (text[i] === ' ') {
          result += ' '
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      setDisplay(result)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [text, trigger, duration])

  return display
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const name = useScramble('Jane Doe', visible, 1400)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Developer &amp; Designer</p>
        <h1 className="hero__name">{name}</h1>
        <p className="hero__tagline">
          I build digital experiences that feel considered — from the architecture
          down to the last pixel.
        </p>
        <div className="hero__cta">
          <a href="#work" className="hero__btn">View my work</a>
          <a href="#contact" className="hero__btn hero__btn--ghost">Get in touch</a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
