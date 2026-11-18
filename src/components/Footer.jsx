import { useState } from "react";
import logoIcone from "../assets/logo-icone.png";
import { contact } from "../data/content";
import Modal from "./Modal";

const footerServices = ["Recrutement", "Conseil RH", "Développement informatique", "Prestations diverses"];
const footerNav = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#approche", label: "Notre méthode" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const [modal, setModal] = useState(null); // "legal" | "privacy" | null
  const close = () => setModal(null);
  const openModal = (name) => (e) => {
    e.preventDefault();
    setModal(name);
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="#accueil" aria-label="KYAT SERVICE PREMIUM - Accueil">
                <img className="brand-logo" src={logoIcone} alt="KYAT SERVICE PREMIUM" />
              </a>
              <p>
                Un partenaire engagé pour accompagner les entreprises dans leurs projets RH, informatiques
                et leurs besoins en prestations de services.
              </p>
              <div className="socials">
                <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a
                ><a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a
                ><a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Nos services</h4>
              <ul>
                {footerServices.map((s) => (
                  <li key={s}><a href="#services">{s}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                {footerNav.map((l) => (
                  <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href={contact.phoneHref}>{contact.phoneLabel}</a></li>
                <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li>{contact.address}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 KYAT SERVICE PREMIUM. Tous droits réservés.</span>
            <span>
              <a href="#" onClick={openModal("legal")}>Mentions légales</a
              ><a href="#" onClick={openModal("privacy")}>Politique de confidentialité</a>
            </span>
          </div>
        </div>
      </footer>

      <Modal id="legalModal" title="Mentions légales" open={modal === "legal"} onClose={close}>
        <p><strong>Informations à compléter avant publication :</strong></p>
        <p>
          Raison sociale : KYAT SERVICE PREMIUM<br />Forme juridique : [à compléter]<br />Capital
          social : [à compléter]<br />Siège social : [adresse complète à compléter]<br />Numéro
          d'immatriculation : [à compléter]<br />Directeur de publication : [à compléter]<br />Hébergeur
          : [nom et coordonnées à compléter]
        </p>
        <p>
          Ces mentions sont provisoires. Faites-les vérifier et complétez-les conformément à la
          réglementation applicable avant la mise en ligne.
        </p>
      </Modal>

      <Modal id="privacyModal" title="Politique de confidentialité" open={modal === "privacy"} onClose={close}>
        <p>
          Les informations communiquées via le formulaire sont destinées à permettre à KYAT SERVICE
          PREMIUM de répondre aux demandes reçues.
        </p>
        <p>
          <strong>À compléter avant publication :</strong> identité et coordonnées du responsable de
          traitement, finalités et base légale, durée de conservation, destinataires, mesures de
          sécurité, droits des personnes et modalités d'exercice de ces droits.
        </p>
        <p>
          Le formulaire présenté sur cette démonstration ne transmet ni ne conserve actuellement
          aucune donnée.
        </p>
      </Modal>
    </>
  );
}
