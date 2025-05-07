import React from 'react';
import './apropos.module.css'; 

/*const blobStyle={
  position : "absolute",
  zIndex: "-1",
  top: "21%",
  aspectRatio: "1",
  width: "300px",
  left: "7%",
}*/
const Apropos = () => {
  return (
    <div className="apropos-container mx-[200px]  my-[100px] flex flex-col  gap-16 "> 
      <div className='flex gap-16'> 
        <div>
        <h1>À propos</h1>
      <img  src="/src/assets/blob.svg" className='absolute -z-10 top-[21%] w-72 left-[7%] aspect-square' alt="blob" />
      <section className="mission-section">
        <h2>MISSION</h2>
        <p>
          Notre vision est d'être à l'avant-garde de la transformation numérique du patrimoine culturel, 
          contribuant ainsi à préserver, célébrer et transmettre la diversité culturelle de manière 
          accessible, éducative et passionnante pour les générations à venir.
        </p>
        
      </section>
        </div>
        <section className="vision-section">
        <h2>VISION : </h2>
        <p>
          La mission de ECLIME CULTURE est de réinventer la manière dont les individus interrogéssent 
          avec leur patrimoine culturel en utilisant les nouvelles technologies tout en stimulant 
          l'attachement communautaire et inspirant les générations actuelles et futures.
        </p>
      </section>
      </div>

      <section className="about-section flex gap-12">
        <div>
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
        </div>
        <div>
        <img
          src='/public/images/aproposimg.jpeg'
          alt='Apropos'
          className='w-full h-full object-cover'
          width={1920}  // largeur réelle de l'image
          height={1080} // hauteur réelle de l'image
        /> 
        </div>

      </section>

      <div className='flex gap-9 mt-24'> 
        <div>
      <div className="flex flex-col  ">
        <div>
          <img src="/public/images/nadia.jpg" alt="ceo" />
        </div>
        <div> 
        <h2>Co-fondatrice & CEO Nadia Bouzgarrou</h2>
        <ul><li>🏛 Architecte Spécialiste en Patrimoine.</li>
          <li>💡Passionnée par la Convergence entre Héritage et Innovation.</li>
          <li>🌐Exploratrice des Nouvelles Frontières des nouvelles technologies.</li>
          <li>🎓Chercheure en Sciences de l'Architecture.</li>
          <li>💼Entrepreneure Socio-culturel.</li>
          </ul>
        </div>

      </div>
        </div>
        <div className="flex flex-col">
          <div>
            <img src="/public/images/khaled.jpg" alt="cto" />
          </div>
          <div>
          <h2>Co-fondateur & CTO Khaled Abdallah </h2>
          <ul>
            <li> 🏛 Architecte Spécialiste en Patrimoine .</li>
            <li> 💼 Entrepreneur Socio-culturel. </li>
            <li> 💡 Enchanté par les joyaux de la culture.</li>
            <li> 🎨 Motion Designer.</li>
          </ul>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Apropos;