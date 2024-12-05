
import CarOverview from './CarOverview.jsx';
import PriceCalculator from './PriceCalculator.jsx';
import ImageCarousel from './ImageCarousel.jsx';
import Navbar from './Navbar.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <header>
        <h1>Porsche 911 Turbo</h1>
      </header>

      <main>
        <section className="overview-carousel-container">
          <ImageCarousel />
          <CarOverview />
        </section>
        <section id="calculator-section">
          <PriceCalculator />
        </section>
      </main>
    </div>
  );
};

export default App;
