import { commitments } from "../data/content";

export default function Commitments() {
  return (
    <section className="commitments section-pad" id="engagements">
      <div className="container">
        <div className="commitment-panel" data-aos="fade-up">
          <div className="commitment-head">
            <span className="section-kicker">Nos engagements</span>
            <h2 className="section-title">La qualité au cœur de chaque collaboration.</h2>
          </div>
          <div className="commitment-grid">
            {commitments.map((c, i) => (
              <div className="commitment-item" data-aos="zoom-in" data-aos-delay={i ? i * 100 : undefined} key={c.title}>
                <i className={`bi ${c.icon}`}></i>
                <h3>{c.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
