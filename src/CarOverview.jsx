
import './CarOverview.css';

const CarOverview = () => {
  const carDetails = {
    model: 'Porsche 911 Turbo',
    year: 2024,
    mileage: '12KMPL',
    price: 'Rs. 4.05 crore',
  };

  return (
    <div className="car-overview">
      <h2>Details</h2>
      <ul>
        <li>
          <strong>Model:</strong> {carDetails.model}
        </li>
        <li>
          <strong>Year:</strong> {carDetails.year}
        </li>
        <li>
          <strong>Mileage:</strong> {carDetails.mileage}
        </li>
        <li>
          <strong>Price:</strong> {carDetails.price}
        </li>
      </ul>
    </div>
  );
};

export default CarOverview;
