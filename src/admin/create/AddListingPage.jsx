import { useState } from 'react';
import ListingForm from './ListingForm';
import ReviewPage from './ReviewPage';

const AddListingPage = () => {
  const [formData, setFormData] = useState(null);
  const [step, setStep] = useState(1);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(step + 1);
  };

  const handleConfirm = () => {
    // Handle final confirmation, for example, submit data to backend
    console.log('Listing data submitted:', formData);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <ListingForm onSubmit={handleFormSubmit} />}
      {step === 2 && (
        <ReviewPage
          formData={formData}
          onConfirm={handleConfirm}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default AddListingPage;
