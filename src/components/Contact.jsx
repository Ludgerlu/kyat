import { useState } from "react";
import { contact, serviceOptions } from "../data/content";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);
    if (e.currentTarget.checkValidity()) {
      // TODO : brancher ici votre API / backend (PHP, Laravel…) avant mise en production
      setMessage(
        "Merci. Votre formulaire est valide, mais cette démonstration ne transmet pas encore les données. Veuillez connecter un service d’envoi avant publication."
      );
    } else {
      setMessage("");
    }
  };

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info" data-aos="fade-right">
            <span className="section-kicker">Contactez-nous</span>
            <h2 className="section-title">Construisons ensemble votre prochain projet.</h2>
            <p className="section-lead">
              Vous souhaitez recruter, renforcer les compétences de vos équipes ou concrétiser un
              projet informatique ? Parlons de vos besoins.
            </p>
            <div className="contact-detail">
              <div className="detail-icon"><i className="bi bi-telephone"></i></div>
              <div><strong>Téléphone</strong><a href={contact.phoneHref}>{contact.phoneLabel}</a></div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon"><i className="bi bi-envelope"></i></div>
              <div><strong>E-mail</strong><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon"><i className="bi bi-geo-alt"></i></div>
              <div><strong>Adresse</strong><span>{contact.address}</span></div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon"><i className="bi bi-clock"></i></div>
              <div>
                <strong>Horaires</strong>
                <span>Lundi – Vendredi : 08h00 – 17h00<br />Samedi : 09h00 – 13h00</span>
              </div>
            </div>
          </div>

          <form
            className={`contact-form needs-validation${validated ? " was-validated" : ""}`}
            noValidate
            onSubmit={handleSubmit}
            data-aos="fade-left"
          >
            <h3>Envoyez-nous votre demande</h3>
            <p className="form-intro">Complétez les champs ci-dessous. Les champs marqués * sont obligatoires.</p>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="fullname">Nom et prénom *</label>
                <input className="form-control" id="fullname" name="fullname" autoComplete="name" required />
                <div className="invalid-feedback">Veuillez saisir votre nom et prénom.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="company">Nom de l'entreprise</label>
                <input className="form-control" id="company" name="company" autoComplete="organization" />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="email">Adresse e-mail *</label>
                <input className="form-control" id="email" name="email" type="email" autoComplete="email" required />
                <div className="invalid-feedback">Veuillez saisir une adresse e-mail valide.</div>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="phone">Téléphone *</label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="[0-9+() .\-]{6,20}"
                  autoComplete="tel"
                  required
                />
                <div className="invalid-feedback">Veuillez saisir un numéro de téléphone valide.</div>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="service">Service souhaité *</label>
                <select className="form-select" id="service" name="service" defaultValue="" required>
                  <option value="" disabled>Choisissez un service</option>
                  {serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <div className="invalid-feedback">Veuillez choisir un service.</div>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="subject">Objet de la demande *</label>
                <input className="form-control" id="subject" name="subject" required />
                <div className="invalid-feedback">Veuillez préciser l'objet de votre demande.</div>
              </div>
              <div className="col-12">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea className="form-control" id="message" name="message" rows={4} minLength={10} required></textarea>
                <div className="invalid-feedback">Veuillez écrire un message d'au moins 10 caractères.</div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" id="consent" type="checkbox" required />
                  <label className="form-check-label" htmlFor="consent">
                    J'accepte que mes informations soient utilisées pour traiter ma demande. *
                  </label>
                  <div className="invalid-feedback">Votre consentement est nécessaire pour envoyer la demande.</div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn-brand w-100" type="submit">
                  Envoyer ma demande <i className="bi bi-send"></i>
                </button>
              </div>
            </div>
            <div className="form-message" aria-live="polite" role="status" style={message ? { color: "#197b68" } : undefined}>
              {message}
            </div>
            <p className="text-secondary mt-3 mb-0" style={{ fontSize: "0.7rem", lineHeight: 1.6 }}>
              Démo front-end : aucune donnée n'est transmise ni enregistrée. Connectez ce formulaire à
              votre API ou backend avant la mise en production.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
