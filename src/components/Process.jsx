import { useEffect, useRef, useState } from "react";
import { steps } from "../data/content";

function Step({ index, title, text }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article ref={ref} className={`step${visible ? " is-visible" : ""}`}>
      <div className="step-top">
        <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export default function Process() {
  return (
    <section className="process-section section-pad" id="approche">
      <div className="container">
        <div className="process-heading" data-aos="fade-up">
          <span className="section-kicker">Notre méthode</span>
          <h2 className="section-title">Une démarche claire, de l'écoute au suivi.</h2>
          <p className="section-lead">
            Chaque collaboration suit une méthode structurée pour comprendre vos besoins, proposer la
            bonne réponse et vous accompagner dans la durée.
          </p>
        </div>
        <div className="timeline" id="timeline">
          {steps.map((s, i) => (
            <Step key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
