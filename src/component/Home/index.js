import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Header } from '../Header/index';
import { Profile } from '../Profile/index';
import './style.scss';
export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <div className="home">
        <Header className="home__header" />
        <div className="home__content">
          <div className="home__background">
            <h1 className="home__title">Jaz </h1>
            <p className="home__subtitle">Développeur Full Stack JavaScript.</p>
            <FontAwesomeIcon icon={faArrowDown} className="home__arrow" />
          </div>
        </div>
      </div>
      <Profile />
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};
