import { useState } from "react";
import logoComplet from "../assets/logo-complet.png";
import { navLinks } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#accueil" aria-label="KYAT SERVICE PREMIUM - Accueil">
          <img className="brand-logo" src={logoComplet} alt="KYAT SERVICE PREMIUM" />
        </a>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="menu-toggle"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </div>
    </header>
  );
}
