import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css';

import heroImage1 from '../assets/images/unsplash_8FK3M5ENZko.png';
import heroImage2 from '../assets/images/unsplash_8c6eS43iq1o.png';
import heroImage3 from '../assets/images/Group 205.png';

function HomePage() {
  const navigate = useNavigate();

  const featuredDestinations = [
    { city: 'Istanbul', country: 'Turkey', image: heroImage1 },
    { city: 'Sydney', country: 'Australia', image: heroImage2 },
    { city: 'Baku', country: 'Azerbaijan', image: heroImage3 }
  ];

  const destinations = [
    { city: 'Istanbul', country: 'Turkey', image: heroImage1 },
    { city: 'Sydney', country: 'Australia', image: heroImage2 },
    { city: 'Baku', country: 'Azerbaijan', image: heroImage3 },
    { city: 'Malé', country: 'Maldives', image: heroImage1 },
    { city: 'Paris', country: 'France', image: heroImage2 },
    { city: 'New York', country: 'US', image: heroImage3 },
    { city: 'Saint Peterburg', country: 'Russia', image: heroImage1 },
    { city: 'Sydney', country: 'Australia', image: heroImage2 },
    { city: 'Baku', country: 'Azerbaijan', image: heroImage3 },
    { city: 'Malé', country: 'Maldives', image: heroImage1 },
    { city: 'Paris', country: 'France', image: heroImage2 },
    { city: 'New York', country: 'US', image: heroImage3 },
    { city: 'London', country: 'UK', image: heroImage1 },
    { city: 'Tokyo', country: 'Japan', image: heroImage2 },
    { city: 'Dubai', country: 'UAE', image: heroImage3 }
  ];

  return (
    <div className="App">
      <Header />
      <HomeHeroSection />
      <FeaturedDestinations 
        destinations={featuredDestinations} 
        onDestinationClick={() => navigate('/destination')}
      />
      <DestinationsGrid 
        destinations={destinations}
        onDestinationClick={() => navigate('/destination')}
      />
    </div>
  );
}

function HomeHeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Plan your perfect trip</h1>
        <p className="hero-subtitle">Search Flights & Places Hire to our most popular destinations</p>
      </div>
    </section>
  );
}

function FeaturedDestinations({ destinations, onDestinationClick }) {
  return (
    <div className="featured-destinations">
      {destinations.map((dest, index) => (
        <DestinationCard 
          key={index} 
          destination={dest} 
          featured 
          onClick={onDestinationClick}
        />
      ))}
    </div>
  );
}

function DestinationsGrid({ destinations, onDestinationClick }) {
  return (
    <section className="destinations-section">
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <DestinationCard 
            key={index} 
            destination={dest}
            onClick={onDestinationClick}
          />
        ))}
      </div>
    </section>
  );
}

function DestinationCard({ destination, featured = false, onClick }) {
  return (
    <div 
      className={`destination-card ${featured ? 'featured' : ''}`}
      onClick={onClick}
    >
      <div className="card-image">
        <img src={destination.image} alt={`${destination.city}, ${destination.country}`} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{destination.city}, {destination.country}</h3>
        <p className="card-services">Flights • Hotels • Resorts</p>
      </div>
    </div>
  );
}

export default HomePage;

