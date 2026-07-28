import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <p className="section-label">03 &mdash; Contact</p>
        <h2 className="contact__heading">
          Let's build something<br />together.
        </h2>
        <p className="contact__text">
          I'm always open to interesting projects and conversations.
          Whether you have a question or just want to say hello, my inbox
          is open.
        </p>
        <a href="mailto:hello@janedoe.com" className="contact__email">
          hello@janedoe.com
        </a>
        <div className="contact__socials">
          <a href="#" className="contact__social">GitHub</a>
          <a href="#" className="contact__social">LinkedIn</a>
          <a href="#" className="contact__social">Twitter</a>
          <a href="#" className="contact__social">Dribbble</a>
        </div>
      </div>
    </section>
  )
}
