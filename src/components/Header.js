import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import flightIcon from '../assets/images/airplane.png';
import stayIcon from '../assets/images/Vector.png';
import logoImage from '../assets/images/Logo.svg';

function Header({ activeTab, setActiveTab }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentTab = activeTab !== undefined ? activeTab : (location.pathname === '/search' ? 'flight' : 'flight');
  
  const handleTabClick = (tab) => {
    if (setActiveTab) {
      setActiveTab(tab);
    }
    if (location.pathname !== '/search') {
      navigate('/search');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-tabs">
          <button 
            className={`tab-button ${currentTab === 'flight' ? 'active' : ''}`}
            onClick={() => handleTabClick('flight')}
          >
            <span className="tab-icon">
              <img src={flightIcon} alt="Flight" />
            </span>
            Find Flight
          </button>
          <button 
            className={`tab-button ${currentTab === 'stays' ? 'active' : ''}`}
            onClick={() => handleTabClick('stays')}
          >
            <span className="tab-icon">
              <img src={stayIcon} alt="Stays" />
            </span>
            Find Stays
          </button>
        </div>
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logoImage} alt="golobe logo" />
        </div>
        <div className="header-actions">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

