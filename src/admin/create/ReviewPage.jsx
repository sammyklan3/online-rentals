import './ReviewPage.css'; // Import CSS file
import PropTypes from 'prop-types';

const ReviewPage = ({ formData, onConfirm, onBack }) => {
  const handleSubmit = () => {
    // Submit the form data to the server
    onConfirm();
  };

  return (
    <div className="review-page">
      <h2 className="review-title">Review Your Listing</h2>
      <div className="review-grid">
      <div className="review-section">
        <p className="review-label">Title:</p>
        <p className="review-value">{formData.title}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Description:</p>
        <p className="review-value">{formData.description}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Price:</p>
        <p className="review-value">${formData.price}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Location:</p>
        <p className="review-value">{formData.location}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Number of Rooms:</p>
        <p className="review-value">{formData.numberOfRooms}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Number of Beds:</p>
        <p className="review-value">{formData.numberOfBeds}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Check-in Time:</p>
        <p className="review-value">{formData.checkIn}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Health and Safety:</p>
        <p className="review-value">{formData.healthAndSafety}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Amenities:</p>
        <p className="review-value">{formData.amenities.join(', ')}</p>
      </div>
      <div className="review-section">
        <p className="review-label">House Rules:</p>
        <p className="review-value">{formData.houseRules.join(', ')}</p>
      </div>
      <div className="review-section">
        <p className="review-label">Images:</p>
        <div className="image-container">
          {formData.images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Image ${index}`}
              className="review-image"
            />
          ))}
        </div>
      </div>
      <button className="review-btn-back" onClick={onBack}>Back</button>
      <button className="review-btn-confirm" onClick={handleSubmit}>Confirm</button>
    </div>
    </div>
  );
};

ReviewPage.propTypes = {
  formData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    numberOfRooms: PropTypes.number.isRequired,
    numberOfBeds: PropTypes.number.isRequired,
    checkIn: PropTypes.string.isRequired,
    healthAndSafety: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
    houseRules: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired
  }).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};

export default ReviewPage;
