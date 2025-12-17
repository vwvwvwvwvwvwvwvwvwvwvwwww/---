import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css';

import heroImage1 from '../assets/images/unsplash_8FK3M5ENZko.png';
import heroImage2 from '../assets/images/unsplash_8c6eS43iq1o.png';
import heroImage3 from '../assets/images/Group 205.png';

function DestinationPage() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const interestingPlaces = [
    { image: heroImage1, alt: 'Paris river scene with trees and buildings' },
    { image: heroImage2, alt: 'Parisian street with Eiffel Tower' },
    { image: heroImage3, alt: 'Seine river with Parisian architecture' }
  ];

  const destinationCards = [
    { city: 'London', country: 'UK', image: heroImage1, services: ['Flights', 'Hotels', 'Resorts'] },
    { city: 'Tokyo', country: 'Japan', image: heroImage2, services: ['Flights', 'Hotels', 'Resorts'] },
    { city: 'Dubai', country: 'UAE', image: heroImage3, services: ['Flights', 'Hotels', 'Resorts'] }
  ];

  return (
    <div className="App destination-page">
      <Header />
      <DestinationHero city="Paris" country="France" />
      <div className="content-container">
        <InterestingPlaceCard 
          images={interestingPlaces}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
        />
        <DestinationsSidebar destinations={destinationCards} />
      </div>
    </div>
  );
}

function DestinationHero({ city, country }) {
  return (
    <section className="destination-hero">
      <div className="destination-hero-overlay"></div>
      <div className="destination-hero-content">
        <h1 className="destination-title">{city}, {country}</h1>
      </div>
    </section>
  );
}

function InterestingPlaceCard({ images, currentIndex, setCurrentIndex }) {
  const displayedImages = images.slice(currentIndex, currentIndex + 2);
  
  return (
    <div className="interesting-place-card">
      <h2 className="interesting-place-title">Interesting Place</h2>
      <div className="interesting-place-images">
        {displayedImages.map((img, index) => (
          <div key={index} className="interesting-image-wrapper">
            <img src={img.image} alt={img.alt} />
          </div>
        ))}
      </div>
      <div className="image-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      <button className="buy-button">buy</button>
    </div>
  );
}

function DestinationsSidebar({ destinations }) {
  return (
    <div className="destinations-sidebar">
      {destinations.map((dest, index) => (
        <div key={index} className="sidebar-destination-card">
          <div className="sidebar-card-image">
            <img src={dest.image} alt={`${dest.city}, ${dest.country}`} />
          </div>
          <div className="sidebar-card-content">
            <h3 className="sidebar-card-title">{dest.city}, {dest.country}</h3>
            <p className="sidebar-card-services">
              {dest.services.join(' • ')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DestinationPage;

