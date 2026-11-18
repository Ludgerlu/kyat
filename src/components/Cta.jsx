export default function Cta() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-copy" data-aos="fade-right">
            <span className="section-kicker">Passons à l'action</span>
            <h2 className="section-title">Et si nous donnions vie à vos projets ?</h2>
            <p>
              Vous avez un besoin en recrutement, en conseil RH, en développement informatique ou en
              prestations de services ? Notre équipe est disponible pour étudier votre demande et vous
              proposer une solution adaptée.
            </p>
          </div>
          <div className="cta-action" data-aos="fade-left">
            <a className="dark-btn" href="#contact">
              Parlons de votre projet <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
