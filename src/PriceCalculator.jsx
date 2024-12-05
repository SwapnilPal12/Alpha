import React, { useState } from "react";
import "./PriceCalculator.css";

const PriceCalculator = () => {
  const [duration, setDuration] = useState(5); 
  const [invites, setInvites] = useState(50); 
  const [price, setPrice] = useState(0);

  const basePricePerHour = 1000; 
  const basePricePerInvite = 50; 

  const calculatePrice = () => {
    const totalPrice = duration * basePricePerHour + invites * basePricePerInvite;
    setPrice(totalPrice);
  };

  React.useEffect(() => {
    calculatePrice();
  }, [duration, invites]);

  return (
    <div className="price-calculator">
      <h2>Event Price Calculator</h2>

      <div className="slider-container">
        <label>Duration of Event (Hours)</label>
        <div className="slider-header">
          <span>1 Hour</span>
          <span>12 Hours</span>
        </div>
        <input
          type="range"
          min="1"
          max="12"
          step="1"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
        <div className="value">{duration} Hours</div>
      </div>

      <div className="slider-container">
  
        <label>Number of Invites</label>
        <div className="slider-header">
          <span>10 Invites</span>
          <span>500 Invites</span>
        </div>
        <input
          type="range"
          min="10"
          max="500"
          step="10"
          value={invites}
          onChange={(e) => setInvites(parseInt(e.target.value))}
        />
        <div className="value">{invites} Invites</div>
      </div>

      <div className="price-result">
        <h3>₹{price.toLocaleString()}</h3>
        <span>Total Price</span>
      </div>

      <button className="eligibility-btn">Proceed to Payment</button>
    </div>
  );
};

export default PriceCalculator;
