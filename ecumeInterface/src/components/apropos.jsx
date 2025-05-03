import React from 'react';
import './apropos.module.css'; 

const APropos = () => {
  return (
    <div className={styles.aproposContainer}>
      <h1>À propos</h1>
      
      <section className="mission-section">
        <h2>MISSION</h2>
        <p>
          Notre vision est d'être à l'avant-garde de la transformation numérique du patrimoine culturel, 
          contribuant ainsi à préserver, célébrer et transmettre la diversité culturelle de manière 
          accessible, éducative et passionnante pour les générations à venir.
        </p>
        <p>
          La mission de ECLIME CULTURE est de réinventer la manière dont les individus interrogéssent 
          avec leur patrimoine culturel en utilisant les nouvelles technologies tout en stimulant 
          l'attachement communautaire et inspirant les générations actuelles et futures.
        </p>
      </section>

      <hr className="separator" />

      <section className="about-section">
        <h2>À PROPOS DE NOUS</h2>
        <p>
          Bienvenue dans notre univers, où chaque projet est fictico d'un rêve primant de. Notre approche 
          passionnée de l'architecture se manifeste dans notre engagement à créer des espaces et même des 
          souvenirs qui ne sont pas simplement habiles, mais qui reçoivent des histoires, suscitent des 
          émotions et inspirent.
        </p>
        <p>
          Fortement motivés par le débit de repeuner notre approche envers l'héritage culturel, nous avons 
          développé une expertise dans la recherche appliquée, cherchant des façons culturels d'intégrité 
          des nouvelles technologies dans la présentation patrimoniale et la conception architecturale. 
          Nos parcours professionnel et académique différents mais conjointementaires à la fois refusent 
          notre engagement envers des projets qui constituent l'histoire, la patrimoine, l'architecture 
          et l'innovation, créent des ponts entre la passé & présent et le futur.
        </p>
        <p>
          Rejoignez-nous dans cette passionnante aventure où l'union entre la passé et le futur donne 
          naissance à des créations culturelles uniques. Diverses un compagnon d'exploration dans le 
          monde fascinant de l'innovation culturelle, puisque projet que occasion de repousser les 
          frontières, demi-maser les défis technologiques, tout en préservant l'assence interprontée 
          de l'héritage qui nous relie au passé.
        </p>
        <div className="tags">
          <span>#Architecture</span>
          <span>#Patrimoine</span>
          <span>#RésilitéVirtuelle</span>
          <span>#RésilitéAugmentée</span>
        </div>
      </section>

      <section className="vision-section">
        <h2>VISION</h2>
        {/* Contenu de la vision à ajouter ici */}
      </section>
    </div>
  );
};

export default APropos;