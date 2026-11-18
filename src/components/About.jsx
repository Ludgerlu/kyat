export default function About() {
  return (
    <section className="about" id="apropos">
      <div className="container about-grid">
        <div className="about-photos" data-aos="fade-right">
          <div className="main-photo">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=850&q=85"
              alt="Professionnels travaillant ensemble"
            />
          </div>
          <div className="small-photo">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=450&q=85"
              alt="Réunion d'équipe"
            />
          </div>
          <div className="tiny-photo">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=450&q=85"
              alt="Collaboration professionnelle"
            />
          </div>
        </div>
        <div className="about-copy" data-aos="fade-left">
          <span className="eyebrow">À propos de KYAT SERVICE PREMIUM</span>
          <h2>Votre réussite au centre de notre engagement</h2>
          <p className="lead">Un partenaire engagé à vos côtés.</p>
          <p>
            Nous mettons notre expertise, notre sens de l'écoute et notre engagement au service de vos
            priorités pour construire une collaboration solide. Nous accompagnons les entreprises dans
            leurs projets RH, informatiques et leurs besoins en prestations de services.
          </p>
        </div>
      </div>
    </section>
  );
}
