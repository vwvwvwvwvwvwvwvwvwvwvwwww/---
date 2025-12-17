import React, { useState } from 'react';
import Header from '../components/Header';
import '../App.css';

function SearchPage() {
  const [activeTab, setActiveTab] = useState('flight');
  const [searchForm, setSearchForm] = useState({
    from: 'Lahore',
    to: 'Karachi',
    trip: 'Return',
    depart: '07 Nov 22',
    return: '13 Nov 22',
    passenger: '1 Passenger',
    class: 'Economy'
  });

  const handleInputChange = (field, value) => {
    setSearchForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSwapLocations = () => {
    setSearchForm(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  return (
    <div className="App">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchHeroSection />
      <SearchFormCard 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        formData={searchForm}
        onInputChange={handleInputChange}
        onSwapLocations={handleSwapLocations}
      />
      <PlanSection />
      <Footer />
    </div>
  );
}

function SearchHeroSection() {
  return (
    <section className="search-hero-section">
      <div className="search-hero-overlay"></div>
      <div className="search-hero-content">
        <p className="search-hero-small">Helping Others</p>
        <h1 className="search-hero-title">LIVE & TRAVEL</h1>
        <p className="search-hero-subtitle">Special offers to suit your plan</p>
      </div>
    </section>
  );
}

function SearchFormCard({ activeTab, setActiveTab, formData, onInputChange, onSwapLocations }) {
  return (
    <div className="search-form-container">
      <div className="search-form-card">
        <div className="search-form-tabs">
          <button 
            className={`search-tab ${activeTab === 'flight' ? 'active' : ''}`}
            onClick={() => setActiveTab('flight')}
          >
            <span></span> Flights
          </button>
          <button 
            className={`search-tab ${activeTab === 'stays' ? 'active' : ''}`}
            onClick={() => setActiveTab('stays')}
          >
            <span></span> Stays
          </button>
        </div>

        {activeTab === 'flight' && (
          <div className="search-form-fields">
            <div className="search-field">
              <label>From - To</label>
              <div className="location-input">
                <input 
                  type="text" 
                  value={`${formData.from} - ${formData.to}`}
                  readOnly
                />
                <button className="swap-button" onClick={onSwapLocations}>
                  ⇄
                </button>
              </div>
            </div>

            <div className="search-field">
              <label>Trip</label>
              <select 
                value={formData.trip}
                onChange={(e) => onInputChange('trip', e.target.value)}
              >
                <option>Return</option>
                <option>One Way</option>
                <option>Multi City</option>
              </select>
            </div>

            <div className="search-field">
              <label>Depart - Return</label>
              <input 
                type="text" 
                value={`${formData.depart} - ${formData.return}`}
                readOnly
              />
            </div>

            <div className="search-field">
              <label>Passenger - Class</label>
              <input 
                type="text" 
                value={`${formData.passenger}, ${formData.class}`}
                readOnly
              />
            </div>
          </div>
        )}

        {activeTab === 'stays' && (
          <div className="search-form-fields">
            <div className="search-field">
              <label>Location</label>
              <input type="text" placeholder="Where are you going?" />
            </div>
            <div className="search-field">
              <label>Check In - Check Out</label>
              <input type="text" placeholder="Select dates" />
            </div>
            <div className="search-field">
              <label>Guests</label>
              <input type="text" placeholder="1 Guest" />
            </div>
          </div>
        )}

        <div className="search-form-actions">
          <a href="#" className="promo-link">+ Add Promo Code</a>
          <button className="show-flights-button">
            Show Flights <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function PlanSection() {
  return (
    <section className="plan-section">
      <div className="plan-content">
        <div className="plan-text">
          <h2 className="plan-title">Plan your perfect trip</h2>
          <p className="plan-subtitle">Search Flights & Places Hire to our most popular destinations</p>
        </div>
        <button className="see-more-button">See more places</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">golobe</div>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">y</a>
            <a href="#" className="social-icon">i</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Our Destinations</h4>
            <a href="#">Canada</a>
            <a href="#">Alaska</a>
            <a href="#">France</a>
            <a href="#">Iceland</a>
          </div>
          <div className="footer-column">
            <h4>Our Activities</h4>
            <a href="#">Northern Lights</a>
            <a href="#">Cruising & sailing</a>
            <a href="#">Multi-activities</a>
            <a href="#">Kayaking</a>
          </div>
          <div className="footer-column">
            <h4>Travel Blogs</h4>
            <a href="#">Bali Travel Guide</a>
            <a href="#">Sri Lanka Travel Guide</a>
            <a href="#">Peru Travel Guide</a>
            <a href="#">Bali Travel Guide</a>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <a href="#">Our Story</a>
            <a href="#">Work with us</a>
            <h4 style={{ marginTop: '20px' }}>Contact Us</h4>
            <a href="#">Our Story</a>
            <a href="#">Work with us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SearchPage;


