import { domains } from "../data/content";

export default function Domains() {
  return (
    <section className="campaign-section" id="prestations">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="eyebrow">À vos côtés</span>
          <h2>Nos domaines d'intervention</h2>
          <p>
            Des réponses professionnelles aux enjeux humains, organisationnels et technologiques de
            votre entreprise.
          </p>
        </div>
        <div className="campaigns">
          {domains.map((d, i) => (
            <article className="campaign" data-aos="fade-up" data-aos-delay={i ? i * 100 : undefined} key={d.title}>
              <img src={d.img} alt={d.alt} />
              <div className="campaign-body">
                <span className="tag">{d.tag}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <a href="#contact">{d.cta} <i className="bi bi-arrow-right"></i></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
