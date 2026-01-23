import { useState } from "react";
import toast from "react-hot-toast";
import SignupSideBg from "../../assets/Auth/SignupSideBg.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    setIsValid(gmailRegex.test(value));
  };

  const handleSendOTP = () => {
    if (!email) {
      toast.error("Email cannot be empty!");
      return;
    }

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      toast.error("Please enter a valid Gmail address (example@gmail.com)");
      return;
    }

    toast.success("OTP sent successfully!");
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background */}
      <img
        src={SignupSideBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80%"
      />

      <div className="relative w-screen h-screen flex justify-center items-center p-4">
        <div className="w-full max-w-[740px] min-h-[480px] rounded-[32px] border-[1.5px] border-white bg-white/70 shadow-[0_0_10px_0_#FFFFFF] flex flex-col items-center justify-center gap-6 p-6 sm:p-8 md:p-10 relative">

          {/* Back Button - Responsive Positioning */}
          <div
            className="absolute top-4  sm:top-6  flex items-center gap-2 cursor-pointer select-none z-10"
            onClick={() => (window.location.href = "/")}
          >
            <div
              className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full transition-all"
              style={{
                background:
                  "linear-gradient(180deg, rgba(3,3,3,0.9) 0%, rgba(81,33,143,0.9) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>

            <span className="text-[#030303] poppins-font text-sm sm:text-base md:text-lg font-medium">
              Back
            </span>
          </div>

          {/* Main Content */}
          <div className="w-full flex flex-col items-center justify-start gap-8 mt-10 sm:mt-0">

            {/* Top Section - Title & Description */}
            <div className="w-full text-center flex flex-col items-center gap-3 px-4">
              <h1 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] leading-tight font-poppins font-normal text-[#030303]">
                Forgot your password?
              </h1>

              <p className="text-[14px] xs:text-[15px] sm:text-[16px] leading-snug font-poppins font-normal text-[#3D1768] max-w-[420px]">
                No worries. Enter your email and we’ll send you a one-time password (OTP) to reset it.
              </p>
            </div>

            {/* Form Section */}
            <div className="w-full max-w-[554px] flex flex-col items-center gap-8 px-4 sm:px-0">

              {/* Email Input */}
              <div className="w-full flex flex-col gap-2">
                <p className="text-[15px] sm:text-[16px] font-poppins font-normal text-[#030303]">
                  Enter your email ID
                </p>

                <div
                  className={`
                    w-full h-12 sm:h-[48px]
                    flex items-center px-4 rounded-[12px]
                    bg-[#51218F4D]
                    border 
                    ${isValid ? "border-[#FFFFFF66]" : "border-red-500"}
                    transition-all duration-200
                  `}
                >
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="john@gmail.com"
                    className="
                      w-full text-[15px] sm:text-[16px] font-poppins font-normal
                      bg-transparent outline-none
                      text-white placeholder:text-white/80
                    "
                  />
                </div>

                {/* Error Message */}
                {!isValid && email && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">
                    Please enter a valid Gmail address
                  </p>
                )}
              </div>

              {/* Send OTP Button */}
              <button
                onClick={handleSendOTP}
                type="button"
                className="
                  group relative overflow-hidden
                  w-full h-12 sm:h-[48px]
                  rounded-[30px] 
                  bg-gradient-to-r from-[#3D1768] to-[#030303]
                  px-8 py-3
                  text-white text-[15px] sm:text-base md:text-lg font-medium poppins-font
                  border border-white/10 
                  shadow-lg
                  hover:border-white/30 
                  hover:shadow-2xl hover:shadow-purple-900/50
                  active:scale-95
                  transition-all duration-500
                  flex items-center justify-center
                "
              >
                <span
                  className="
                    absolute inset-0 
                    translate-x-[-100%] 
                    bg-gradient-to-r from-transparent via-white/25 to-transparent
                    skew-x-12
                    transition-transform duration-1000 ease-out
                    group-hover:translate-x-[100%]
                  "
                />

                <span
                  className="
                    absolute inset-0 rounded-[30px] 
                    bg-white/10 scale-125 opacity-0 
                    group-hover:opacity-100 
                    transition-opacity duration-500
                  "
                />

                <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Send OTP
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;