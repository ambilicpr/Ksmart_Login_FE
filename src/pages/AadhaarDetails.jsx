import React from "react";
import { useLocation } from "react-router-dom";

const AadhaarDetails = () => {
  const { state } = useLocation();
  const aadhaarNumber = state?.aadhaar;

    if (!aadhaarNumber) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">No Aadhaar number provided.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h2 className="text-2xl font-bold text-pink-700 mb-4">Aadhaar Details</h2>
      <div className="bg-white p-6 rounded shadow-md w-[400px]">
   
        <p><strong>Name:</strong> Ramesh Kumar</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>DOB:</strong> 1990-01-01</p>
        <p><strong>Address:</strong> Kochi, Kerala</p>
      </div>
    </div>
  );
};

export default AadhaarDetails;