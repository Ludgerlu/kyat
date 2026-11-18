import { services } from "../data/content";

export default function Services() {
  return (
    <section className="services-strip" id="services">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span className="eyebrow">Ce que nous faisons</span>
          <h2>Des expertises au service de vos ambitions</h2>
          <p>
            Des prestations complémentaires pour accompagner le développement et le fonctionnement de
            votre organisation.
          </p>
        </div>
        <div className="benefits">
          {services.map((s, i) => (
            <article className="benefit" data-aos="fade-up" data-aos-delay={i ? i * 80 : undefined} key={s.title}>
              <i className={`bi ${s.icon} benefit-icon`}></i>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
