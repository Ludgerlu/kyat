export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="container hero-grid">
        <div className="hero-art" data-aos="fade-right">
          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt="Équipe professionnelle en collaboration"
            />
          </div>
          <i className="dot d1"></i><i className="dot d2"></i><i className="dot d3"></i><i className="dot d4"></i>
        </div>
        <div className="hero-copy" data-aos="fade-left">
          <h1>Des solutions utiles.<br /><em>Des résultats durables.</em></h1>
          <p>
            Nous accompagnons les entreprises dans leurs enjeux humains, organisationnels et
            technologiques grâce à des prestations adaptées à leurs réalités.
          </p>
          <a className="dark-btn" href="#contact">
            Parlons de votre projet <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
