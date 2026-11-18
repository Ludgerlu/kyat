import { useState } from "react";
import { faqs } from "../data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section section-pad" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-intro" data-aos="fade-right">
            <span className="section-kicker">FAQ</span>
            <h2 className="section-title">Vous avez des questions ?</h2>
            <p className="section-lead">
              Retrouvez les réponses aux questions les plus fréquentes concernant nos prestations.
            </p>
            <a href="#contact" className="btn-brand mt-3">
              Une autre question ? <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="accordion" id="faqAccordion" data-aos="fade-up">
            {faqs.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div className="accordion-item" key={f.q}>
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button${isOpen ? "" : " collapsed"}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq${i + 1}`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    >
                      {i + 1}. {f.q}
                    </button>
                  </h3>
                  <div id={`faq${i + 1}`} className={`accordion-collapse collapse${isOpen ? " show" : ""}`}>
                    <div className="accordion-body">{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
