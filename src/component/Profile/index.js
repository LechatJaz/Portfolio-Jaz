import { faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';
export const Profile = () => {
  return (
    <div className="profile">
      <section className="profile-section" data-aos="fade-left">
        <h2 className="section-title" id="a-propos-de-moi">
          À propos de moi
        </h2>
        <p className="section-text">
          Je suis un développeur web passionné avec une petite expérience en
          JavaScript, HTML, CSS(Sass) et React.js. je commence ma carrière,
          J'aime Résoudre des problèmes, une attention aux détails et une
          passion pour l'apprentissage continu. Mon objectif professionnel à
          court terme est d'apprebdre encore et encore, À long terme, j'aimerais
          évoluer vers un rôle de gestion de projet où je pourrais utiliser mes
          compétences techniques pour diriger une équipe de développeurs. Enfin,
          je crois fermement en l'importance de l'éthique dans le développement
          web. Je m'efforce toujours de respecter les meilleures pratiques en
          matière de sécurité et de confidentialité des données.
        </p>
      </section>
      <section className="profile-section" data-aos="fade-right">
        <h2 className="section-title" id="competences">
          Compétences
        </h2>
        <div className="skills-container">
          <div className="skill-box">
            <div className="skill-box__icon">
              <FontAwesomeIcon icon={faJs} size="3x" color="white" />
              <h3>JavaScript (ES6+)</h3>
            </div>

            <p>
              Novice en JavaScript moderne, y compris les promesses, async/await
              et ES6+.
            </p>
          </div>
          <div className="skill-box">
            <div className="skill-box__icon">
              <FontAwesomeIcon icon={faNode} size="3x" color="white" />
              <h3>Node.js & Express.js</h3>
            </div>

            <p>
              Expérience dans la création d'applications backend Node.js et
              Express.js.
            </p>
          </div>
          <div className="skill-box">
            <div className="skill-box__icon">
              <FontAwesomeIcon icon={faReact} size="3x" color="white" />
              <h3>React.js & Postgres SQl</h3>
            </div>

            <p>
              Expérience dans la création d'interfaces utilisateur réactives et
              performantes avec React.js. Expérience dans la conception et la
              gestion de bases de données Postgres SQL.
            </p>
          </div>
          <div className="skill-box">
            <div className="skill-box__icon">
              <FontAwesomeIcon icon={faCode} size="3x" color="white" />
              <h3>HTML,CSS & Accessibilité</h3>
            </div>

            <p>
              Expérience dans la création de sites web accessibles. Connaissance
              approfondie des meilleures pratiques d'accessibilité et de la
              conception de sites web adaptés à tous les utilisateurs.
            </p>
          </div>
        </div>
      </section>
      <section className="profile-section" data-aos="fade-left">
        <h2 className="section-title" id="projets">
          Projets
        </h2>
        <div className="section-content">
          <article>
            <a href="https://s04-pilori-lechat-jaz.vercel.app/index.html?#">
              <div className="section-card"></div>
            </a>
          </article>
        </div>
      </section>
      <section className="profile-section" data-aos="fade-right">
        <h2 className="section-title" id="contact">
          Contact
        </h2>
        <p className="section-text">
          N'hésitez pas à me contacter pour toute question ou opportunité. Vous
          pouvez m'envoyer un email à{' '}
          <strong className="section-strong">
            cordiercorentinpro@gmail.com
          </strong>{' '}
          ou me suivre sur LinkedIn.
        </p>
      </section>
    </div>
  );
};
<strong></strong>;
