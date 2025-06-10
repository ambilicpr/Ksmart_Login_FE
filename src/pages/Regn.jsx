
// // import React, { useState } from "react";
// // const Registration = () => {
// //   const [formData, setFormData] = useState({
// //     MobileNo: "",
// //     Email: "",
// //     isIndian: true,
// //   });
// //   return (

import React, { useState } from "react";
import Kerala_Emblom from "../assets/kerala_Emblom.jpg";
import Ksmart_Logo from "../assets/Ksmart_Logo.svg";
import Ksmart_Image from "../assets/Ksmart_Image.jpg";

const Registration = () => {
  const [formData, setFormData] = useState({
    MobileNo: "",
    Email: "",
    isIndian: true,
  });

  const handleRadioChange = (value) => {
    setFormData({ ...formData, isIndian: value === "true" });
  };

  return (
    <div className="flex w-full min-h-screen bg-blue-100">
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

      <div className="mt-24 w-[500px] h-[500px] flex flex-col  align-itens-center items-center p-8 bg-white rounded-xl shadow-lg">
        <h5 className="text-2xl font-semibold mt-4 mb-2 ">Sign up K-SMART</h5>
        <h6 className="text-1xl font-semibold mb-2">Registration</h6>
        <p className="text-gray-600 text-center">
          To complete your registration please fill in all the fields below.
        </p>
        <div>
          <label className=" ml-60 mt-20 mr-6 inline-block ">
            {
              <input
                type="radio"
                name="country"
                value="true"
                checked={formData.isIndian === true}
                onChange={(e) => handleRadioChange(e.target.value)}
              />
            }
            India
          </label>

          <label>
            {
              <input
                type="radio"
                name="country"
                value="false"
                checked={formData.isIndian === false}
                onChange={(e) => handleRadioChange(e.target.value)}
                // checked={formData.isIndian === false}
                // onChange={() => setFormData({ ...formData, isIndian: "false" })}
              />
            }
            Abroad
          </label>
        </div>

        {/* Mobile Number Field */}
        {formData.isIndian && (
          <div className="mb-4 w-full">
            <label
              htmlFor="mobile"
              className="text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.MobileNo}
              onChange={(e) =>
                setFormData({ ...formData, MobileNo: e.target.value })
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your mobile number"
            />
            {formData.MobileNo.length > 0 &&
              formData.MobileNo.length !== 10 && (
                <p className="text-red-600 text-sm mt-1 flex justify-end">
                  Please enter a valid 10 digit mobile no.
                </p>
              )}
          </div>
        )}

        {/* Email Field */}
        {!formData.isIndian && (
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.Email}
              onChange={(e) =>
                setFormData({ ...formData, Email: e.target.value })
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
            {formData.Email.length > 0 && !formData.Email.includes("@") && (
              <p className="text-red-600 text-sm mt-1 flex justify-end">
                Please enter a valid email ID.
              </p>
            )}
          </div>
        )}
        {/* <div className="mb-1 mt-1  w-full">
          <label
            htmlFor="mobile"
            className="flex justify-left  text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            className="peer pt-2 pb-1 px-3 mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your mobile number"
          />
        </div> */}
        <button
          type="Submit"
          className="  mt-12 w-full bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
        >
          Send OTP
        </button>
        <p className="mt-10 ">
          If you ave an account?<b>Login</b>
        </p>
      </div>
    </div>
  );
};

export default Registration;
