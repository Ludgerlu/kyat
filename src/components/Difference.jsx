import { differences } from "../data/content";

export default function Difference() {
  return (
    <section className="why2 section-pad" id="difference">
      <div className="container">
        <div className="why2-layout">
          <div className="why2-intro" data-aos="fade-right">
            <span className="section-kicker">Notre différence</span>
            <h2 className="section-title">Un partenaire engagé à vos côtés.</h2>
            <p className="section-lead">
              Nous mettons notre expertise, notre sens de l'écoute et notre engagement au service de
              vos priorités pour construire une collaboration solide.
            </p>
            <figure className="why2-photo">
              {/* Photo définitive à fournir */}
              <img src="#" alt="Consultant échangeant avec un dirigeant autour d'un dossier" />
            </figure>
          </div>
          <ol className="why2-list">
            {differences.map((d, i) => (
              <li className="why2-item" data-aos="fade-left" data-aos-delay={i ? i * 80 : undefined} key={d.title}>
                <span className="why2-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
                <i className={`bi ${d.icon}`}></i>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
