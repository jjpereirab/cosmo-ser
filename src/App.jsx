function App() {
  return (
    <div className="site">
      <header className="header">
        <nav className="nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main className="main">
        <section id="inicio" className="hero">
          <img src="/cosmo_ser.jpg" alt="cosmo_ser" className="hero-logo" />
          <h1 className="hero-title">
            Te damos la bienvenida a <span>Cosmo ser</span>
          </h1>
          <p className="hero-subtitle">
            Ruralizando lo humano con prácticas que nos conectan con la tierra.
          </p>
          <a href="#nosotros" className="btn btn-primary">
            Descubrir más
          </a>
        </section>

        <section id="nosotros" className="about">
          <div className="about-card">
            <i className="about-icon fa-solid fa-leaf" aria-hidden="true"></i>
            <h2>Nuestro propósito</h2>
            <p>
              Recuperar saberes campesinos —semillas, abono, suelo, abejas y
              flores— para mejorar el entorno.
            </p>
          </div>
          <div className="about-card">
            <i className="about-icon fa-solid fa-handshake-simple" aria-hidden="true"></i>
            <h2>Nuestra comunidad</h2>
            <p>
              Un grupo de personas que impulsa prácticas y saberes alternativos
              en torno a la agricultura urbana.
            </p>
          </div>
          <div className="about-card">
            <i className="about-icon fa-solid fa-compass" aria-hidden="true"></i>
            <h2>Tu camino</h2>
            <p>
              Talleres y experiencias prácticas para sembrar el cambio en tu
              propio entorno.
            </p>
          </div>
        </section>

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
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Cosmo ser | Cundinamarca, Colombia.</p>
      </footer>
    </div>
  );
}

export default App;