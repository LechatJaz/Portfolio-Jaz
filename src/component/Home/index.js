import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from '../Header/index';
import { Profile } from '../Profile/index';
import './style.scss';
export const Home = () => {
  return (
    <div className="home-content">
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
      <div className="profile-container">
        <Profile />
      </div>
    </div>
  );
};
