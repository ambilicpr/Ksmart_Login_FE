import React, { useState } from "react";
import Kerala_Emblom from "../assets/kerala_Emblom.jpg";
import Ksmart_Logo from "../assets/Ksmart_Logo.svg";
import Ksmart_Image from "../assets/Ksmart_Image.jpg";
import { useNavigate } from "react-router-dom";

const Kycverification = () => {

  const navigate = useNavigate();
  const [aadhaar, setAadhaar] = useState("");
  const [aadhaarError, setAadhaarError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState("");

  const isValidAadhaar = () => {
    const aadhaarRegex = /^[2-9]{1}[0-9]{11}$/;
    if (!aadhaarRegex.test(aadhaar)) {
      setAadhaarError(
        "Please enter a valid 12-digit Aadhaar number starting with 2-9."
      );
      return false;
    }
    setAadhaarError("");
    return true;
  };

  const handleSendOtp = () => {
    if (!isValidAadhaar()) return;

    setAadhaarError("");
    setOtpSent(true);
    setOtpMessage("");
    alert("OTP sent to the registered mobile number");
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setOtpMessage("OTP verified successfully!");

      setTimeout(() => {
        navigate("/aadhaar-details",{state: { aadhaar }});
      }, 1000);
    } else {
      setOtpMessage("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    setOtp("");
    setOtpMessage("A new OTP has been sent to your registered mobile number.");
  };

  // const maskPhoneNumber = (phone) => {
  //   if (!phone) return "";
  //   return phone.replace(/^(\d{0,6})/, "XXXXXX");
  // };
  // const maskEmail = (email) => {
  //   if (!email) return "";
  //   const [localPart, domain] = email.split("@");
  //   if (localPart.length < 2) return "****@" + domain;
  //   return (
  //     localPart.charAt(0) +
  //     "****" +
  //     (localPart.length > 1 ? localPart.charAt(localPart.length - 1) : "") +
  //     "@" +
  //     domain
  //   );
  // };

  return (
    <div className="flex w-full min-h-screen bg-blue-100">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 ">
        <img src={Kerala_Emblom} alt="Kerala Emblem" className="w-32 mb-4" />
        <h6 className="text-2xl font-semibold mb-2">Welcome to</h6>
        <img src={Ksmart_Logo} alt="Ksmart Logo" className="w-32 mb-4" />
        <img
          src={Ksmart_Image}
          alt="Ksmart Image"
          className="w-[400px] h-[160px] mb-2 rounded-lg"
        />

        <p className="text-gray-600 text-center mt-16">
          One integrated platform for all the services you need.
        </p>
      </div>

      {/* Right Side */}
      <div className="mt-24 w-[500px] h-[500px] flex flex-col  items-center p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-2 text-center">
          Verification <span className="text-pink-700">KYC</span>
        </h2>
        <p className="mb-16 text-gray-600 text-sm text-center">
          Confirming your identity to ensure security trust,
          <br />
          and smooth experience.
        </p>

        {!otpSent && (
          <>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aadhaar Number
            </label>
            <input
              type="text"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ""))}
              maxLength={12}
              placeholder="XXXXXXXXXX"
              className="w-full placeholder:text-xs px-3 py-2 border border-gray-300 rounded-md mb-24 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {aadhaarError && (
              <p className="text-red-600 text-sm mb-2">{aadhaarError}</p>
            )}
          </>
        )}

        {otpSent && (
          <>
            <p className="text-gray-700 bg-green-200 text-sm mb-2 px-2 py-1 rounded">
              OTP has been sent to your Aadhaar linked mobile number.
                          </p>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              maxLength={6}
              placeholder="Enter OTP"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <div className="w-full flex justify-end">
              <p
                className="text-sm  text-blue-600  mb-4 cursor-pointer hover:underline"
                onClick={handleResendOtp}
              >
                Resend OTP
              </p>
            </div>
          </>
        )}

        <button
          type="button"
          onClick={otpSent ? handleVerifyOtp : handleSendOtp}
          className="w-full bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-pink-800 transition duration-300"
        >
          {otpSent ? "Verify OTP" : "Get OTP"}
        </button>

{otpMessage && (
  <p
    className={`mt-4 text-sm text-center ${
      otpMessage.includes("success") ? "text-green-600" : "text-red-600"
    }`}
  >
    {otpMessage}
  </p>
)}


          <p className="mt-6 text-sm text-blue-600 hover:underline cursor-pointer">
          I don't have Aadhaar, click here
        </p>
      </div>
    </div>
  );
};

export default Kycverification;

// import React, { useState } from "react";
// import Kerala_Emblom from "../assets/kerala_Emblom.jpg";
// import Ksmart_Logo from "../assets/Ksmart_Logo.svg";
// import Ksmart_Image from "../assets/Ksmart_Image.jpg";

// const Kycverification = () => {
//   const [aadhaar, setAadhaar] = useState("");
//   const [aadhaarError, setAadhaarError] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [otpMessage, setOtpMessage] = useState("");

//   const isValidAadhaar = () => {
//     const aadhaarRegex = /^[2-9]{1}[0-9]{11}$/;
//     if (!aadhaarRegex.test(aadhaar)) {
//       setAadhaarError(
//         "Please enter a valid 12-digit Aadhaar number starting with 2-9."
//       );
//       return false;
//     }
//     setAadhaarError("");
//     return true;
//   };

//   const handleSendOtp = () => {
//     if (!isValidAadhaar()) return;

//     setAadhaarError("");
//     setOtpSent(true);
//     setOtpMessage("");
//     alert("OTP sent to the registered mobile number");
//   };

//   const handleVerifyOtp = () => {
//     if (otp === "123456") {
//       setOtpMessage("OTP verified successfully!");
//     } else {
//       setOtpMessage("Invalid OTP. Please try again.");
//     }
//   };

//   const handleResendOtp = () => {
//     setOtp("");
//     setOtpMessage("A new OTP has been sent to your registered mobile number.");
//   };

//   const maskPhoneNumber = (phone) => {
//     if (!phone) return "";
//     return phone.replace(/^(\d{0,6})/, "XXXXXX");
//   };
//   const maskEmail = (email) => {
//     if (!email) return "";
//     const [localPart, domain] = email.split("@");
//     if (localPart.length < 2) return "****@" + domain;
//     return (
//       localPart.charAt(0) +
//       "****" +
//       (localPart.length > 1 ? localPart.charAt(localPart.length - 1) : "") +
//       "@" +
//       domain
//     );
//   };

//   return (
//     <div className="flex w-full min-h-screen bg-blue-100">
//       {/* Left Side */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-10 ">
//         <img src={Kerala_Emblom} alt="Kerala Emblem" className="w-32 mb-4" />
//         <h6 className="text-2xl font-semibold mb-2">Welcome to</h6>
//         <img src={Ksmart_Logo} alt="Ksmart Logo" className="w-32 mb-4" />
//         <img
//           src={Ksmart_Image}
//           alt="Ksmart Imge"
//           className="w-[400px] h-[160px] mb-2 rounded-lg"
//         />

//         <p className="text-gray-600 text-center mt-16">
//           One integrated platform for all the services you need.
//         </p>
//       </div>

//       {/* Right Side */}
//       <div className="mt-24 w-[500px] h-[500px] flex flex-col  align-itens-center items-center p-8 bg-white rounded-xl shadow-lg">
//         <h2 className="text-2xl font-semibold mb-2 text-center">
//           Verification <span className="text-pink-700">KYC</span>
//         </h2>
//         <p className="mb-16 text-gray-600 text-sm text-center">
//           Confirming your identity to ensure security trust,
//           <br />
//           and smooth experience.
//         </p>

//         {!otpSent && (
//           <>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Aadhaar Number
//             </label>
//             <input
//               type="text"
//               value={aadhaar}
//               onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ""))}
//               maxLength={12}
//               placeholder="XXXXXXXXXX"
//               className="w-full placeholder:text-xs px-3 py-2 border border-gray-300 rounded-md mb-24 focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//             {aadhaarError && (
//               <p className="text-red-600 text-sm mb-2">{aadhaarError}</p>
//             )}
//           </>
//         )}

//         {otpSent && (
//           <>
//             <p className="text-gray-700 bg-green-200 text-sm">
//               OTP has been sent to your Aadhaar linked mobile number.{" "}
//             </p>

//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Enter OTP
//             </label>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
//               maxLength={6}
//               placeholder="Enter OTP"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//             <div className="w-full flex justify-end">
//               <p
//                 className="text-sm  text-blue-600  mb-4 cursor-pointer hover:underline"
//                 onClick={handleResendOtp}
//               >
//                 Resend OTP
//               </p>
//             </div>
//           </>
//         )}

//         <button
//           type="button"
//           onClick={otpSent ? handleVerifyOtp : handleSendOtp}
//           className="w-full bg-pink-700 text-white py-2 px-4 rounded-md hover:bg-pink-800 transition duration-300"
//         >
//           {otpSent ? "Verify OTP" : "Get OTP"}
//         </button>

//         {otpMessage && (
//           <p
//             className={`mt-4 text-sm text-center ${
//               otpMessage.includes("success") ? "text-green-600" : "text-red-600"
//             }`}
//           >
//             {otpMessage}
//           </p>
//         )}

//         <p className="mt-6 text-sm text-blue-600 hover:underline cursor-pointer">
//           I don't have Aadhaar, click here
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Kycverification;
