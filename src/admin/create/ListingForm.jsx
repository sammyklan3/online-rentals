import { useState } from 'react';
import './ListingForm.css'; // Import CSS file
import PropTypes from 'prop-types';

const ListingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    location: '',
    amenities: [],
    houseRules: [],
    checkIn: '',
    healthAndSafety: '',
    images: [],
    numberOfRooms: 0,
    numberOfBeds: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value),
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="listing-form" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          className="input-field"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          className="input-field"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          className="input-field"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Location:
        <input
          className="input-field"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number of Rooms:
        <input
          className="input-field"
          type="number"
          name="numberOfRooms"
          value={formData.numberOfRooms}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number of Beds:
        <input
          className="input-field"
          type="number"
          name="numberOfBeds"
          value={formData.numberOfBeds}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Check-in Time:
        <input
          className="input-field"
          type="time"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Health and Safety:
        <input
          className="input-field"
          type="text"
          name="healthAndSafety"
          value={formData.healthAndSafety}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Amenities:
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="amenities"
              value="wifi"
              checked={formData.amenities.includes('wifi')}
              onChange={handleCheckboxChange}
            />
            Wifi
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="amenities"
              value="kitchen"
              checked={formData.amenities.includes('kitchen')}
              onChange={handleCheckboxChange}
            />
            Kitchen
          </label>
          {/* Add more amenities as needed */}
        </div>
      </label>
      <label>
        House Rules:
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="houseRules"
              value="no-smoking"
              checked={formData.houseRules.includes('no-smoking')}
              onChange={handleCheckboxChange}
            />
            No Smoking
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="houseRules"
              value="pets-allowed"
              checked={formData.houseRules.includes('pets-allowed')}
              onChange={handleCheckboxChange}
            />
            Pets Allowed
          </label>
          {/* Add more house rules as needed */}
        </div>
      </label>
      <label>
        Images:
        <input
          type="file"
          name="images"
          multiple
          onChange={handleImageChange}
          required
        />
      </label>
      <button className="submit-btn" type="submit">Next</button>
    </form>
  );
};

ListingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ListingForm;
