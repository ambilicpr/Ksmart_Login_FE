import React, { useState } from "react";
import Kerala_Emblom from "../assets/kerala_Emblom.jpg";
import Ksmart_Logo from "../assets/Ksmart_Logo.svg";
import Ksmart_Image from "../assets/Ksmart_Image.jpg";
import { useNavigate } from "react-router-dom";
import kycimage from "../assets/kycimage.jpg";

const Registration = () => {
  const [formData, setFormData] = useState({
    phoneNo: "",
    email: "",
    indian: true,
  });
  const navigate = useNavigate();

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const [otpVerified, setOtpVerified] = useState(false);

  const [errors, setErrors] = useState({
    phoneNo: "",
    email: "",
  });
  const handleRadioChange = (value) => {
    const indian = value === "true";
    setFormData({
      ...formData,
      indian,
      phoneNo: indian ? "" : formData.phoneNo,
      email: !indian ? "" : formData.email,
    });
    setErrors({ phoneNo: "", email: "" });
    setOtpSent(false);
    setOtp("");
  };
  // const validateAndSubmit = async () =>
  const sendOtp = async () => {
    const newErrors = { phoneNo: "", email: "" };
    if (formData.indian) {
      if (!formData.phoneNo.trim()) {
        newErrors.phoneNo = "Mobile number is required for Indian users.";
      } else if (!/^\d{10}$/.test(formData.phoneNo)) {
        newErrors.phoneNo = "Please enter a valid 10 digit mobile number.";
      }
    } else {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required for Abroad users.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }
    setErrors(newErrors);
    if (!newErrors.phoneNo && !newErrors.email) {
      const payload = {
        phoneNo: formData.phoneNo,
        email: formData.email,
        indian: formData.indian,
      };

      try {
        // Just pretend to send OTP or save it somewhere
        alert("OTP sent: 123456"); // Simulate sending
        setOtpSent(true);
      } catch (error) {
        alert("Failed to send OTP");
      }
    }
  };

  const verifyOtpAndRegister = async () => {
    const payload = {
      phoneNo: formData.phoneNo,
      email: formData.email,
      indian: formData.indian,
      otp: otp, // Take the user-entered OTP
    };

    try {
      const response = await fetch("http://localhost:8080/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        // if (result.message === "OTP Verified") {
        setOtpVerified(true);
      }
    } catch (error) {
      alert("Error during OTP verification.");
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-blue-50">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 ">
        <img src={Kerala_Emblom} alt="Kerala Emblem" className="w-32 mb-4" />
        <h6 className="text-2xl font-semibold mb-2">Welcome to</h6>
        <img src={Ksmart_Logo} alt="Ksmart Logo" className="w-32 mb-4" />
        <img
          src={Ksmart_Image}
          alt="Ksmart Imge"
          className="w-[400px] h-[160px] mb-2 rounded-lg"
        />
        <p className="text-gray-600 text-center mt-16">
          One integrated platform for all the services you need.
        </p>
      </div>

      {/* Right Side */}
      <div className="mt-24 w-[500px] h-[500px] flex flex-col items-center p-8 bg-white rounded-xl shadow-lg">
        {!otpVerified ? (
          <>
            <h5 className="text-2xl font-semibold mt-4 mb-2">
              Sign up K-SMART
            </h5>
            <h6 className="text-1xl font-semibold mb-2">Registration</h6>
            <p className="text-gray-600 text-center">
              To complete your registration please fill in all the fields below.
            </p>

            <div className="my-4">
              <label className="mr-4">
                <input
                  type="radio"
                  name="country"
                  value="true"
                  checked={formData.indian === true}
                  onChange={(e) => handleRadioChange(e.target.value)}
                />
                India
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="country"
                  value="false"
                  checked={formData.indian === false}
                  onChange={(e) => handleRadioChange(e.target.value)}
                />
                Abroad
              </label>
            </div>

            {/* Input field reused for phone/email or OTP */}
            <div className="mb-4 w-full">
              <label className="text-sm font-medium text-gray-700 flex justify-start">
                {otpSent
                  ? "Enter OTP"
                  : formData.indian
                  ? "Mobile Number"
                  : "Email"}
              </label>
              <input
                type={otpSent ? "text" : formData.indian ? "tel" : "email"}
                value={
                  otpSent
                    ? otp
                    : formData.indian
                    ? formData.phoneNo
                    : formData.email
                }
                onChange={(e) => {
                  if (otpSent) {
                    setOtp(e.target.value);
                  } else if (formData.indian) {
                    setFormData({
                      ...formData,
                      phoneNo: e.target.value.replace(/\D/g, ""),
                    });
                  } else {
                    setFormData({ ...formData, email: e.target.value });
                  }
                }}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={
                  otpSent
                    ? "Enter OTP"
                    : formData.indian
                    ? "Enter your mobile number"
                    : "Enter your email"
                }
              />
              {/* Validation messages here (same as before)... */}
              {!otpSent && formData.indian && errors.phoneNo && (
                <p className="text-red-600 text-sm mt-1">{errors.phoneNo}</p>
              )}
              {!otpSent && !formData.indian && errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {/* Button */}
            {/* {!otpSent ? (
              <button
                type="button"
                onClick={sendOtp}
                className="mt-8 w-full bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
              >
                Send OTP
              </button>
            ) : (
              <button
                type="button"
                onClick={verifyOtpAndRegister}
                className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-300"
              >
                Verify OTP
              </button>
            )} */}

            {!otpSent ? (
              <button
                type="button"
                onClick={sendOtp}
                className="mt-8 w-full bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
              >
                Send OTP
              </button>
            ) : !otpVerified ? (
              <button
                type="button"
                onClick={verifyOtpAndRegister}
                className="mt-2 w-full bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition duration-300"
              >
                Verify OTP
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/kyc")}
                className="mt-2 w-full bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
              >
                Proceed to KYC
              </button>
            )}

            <p className="mt-2">
              If you have an account? <b>Login</b>
            </p>
          </>
        ) : (
          <>
            <h5 className="text-2xl font-semibold mb-4">Sign Up K-SMART</h5>
            <h6 className="text-1xl font-semibold mb-4">Registration</h6>
            <p className="mb-6 text-gray-600 text-center">
              To complte your registration please fill in all te fields below.
            </p>
            <img
              src={kycimage}
              alt="Tick"
              className="w-100 h-auto mb-2 rounded"
            />
            <h6 className="text-1xl font-semibold mb-4">
              User Account Created
            </h6>
            <p>
              You are about to begin te KYC verification process. This will
              require you to provide personal information and upload documents
            </p>
            <p className="mt-4 text-sm text-gray-700 font-medium">
              User ID:{formData.indian ? formData.phoneNo : formData.email}
            </p>
            <button
              type="button"
              onClick={() => navigate("/kyc")}
              className="mt-4 w-full bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Proceed to KYC
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Registration;
