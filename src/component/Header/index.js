import { useState } from 'react';
import './style.scss';
export const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <nav className="navbar navbar-fixed">
        <div className="navbar-left">
          <a href="/" className="logo-link">
            <p className="logo">
              <span className="logo-bracket-open">{'<'}</span>
              <span className="logo-j">J</span>
              <span className="logo-a">a</span>
              <span className="logo-z">z</span>
              <span className="logo-slash">/</span>
              <span className="logo-bracket-close">{'>'}</span>
            </p>
          </a>
        </div>

        <div className={`navbar-center ${menu ? 'show' : ''}`}>
          <a href="#">Accueil</a>
          <a href="#a-propos-de-moi">A propos de moi</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="burger-menu" onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};
