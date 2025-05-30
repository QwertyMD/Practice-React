import React, { useState } from "react";
import PersonalInfo from "@/components/PersonalInfo.jsx";
import Education from "@/components/Education.jsx";
import Done from "@/components/Done.jsx";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const showData = () => {
    console.log(formData);
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            setFormData={setFormData}
            onNext={() => setCurrentStep(2)}
          />
        );
      case 2:
        return (
          <Education
            setFormData={setFormData}
            onBack={() => setCurrentStep(1)}
            onFinish={() => {
              setCurrentStep(3);
              showData();
            }}
          />
        );
      case 3:
        return <Done />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="shadow-lg p-4 rounded-xl border-2 grid gap-10">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default App;
