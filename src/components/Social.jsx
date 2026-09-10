function Social() {
  return (
 <section id="contacto" className="contact">
        <h2 className="contact-title">¿Hablamos?</h2>
        <p className="contact-text">
          Escríbenos y cuéntanos en qué podemos ayudarte.
        </p>
        <div className="social" aria-label="Redes sociales">
          <a
            href="https://www.facebook.com/Cosmoserser"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.instagram.com/cosmoserser"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            href="https://wa.me/573143568754"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.youtube.com/@cosmoser9658"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube" aria-hidden="true"></i>
          </a>
        </div>
      </section>
  );
}

export default Social;