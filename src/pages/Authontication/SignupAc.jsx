import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import SignupSideBg from "../../assets/Auth/SignupSideBg.png";

const SignupAc = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [scale, setScale] = useState(1);

  // INPUT STATES
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // ------------ AUTO SCALE ---------------
  useEffect(() => {
    const updateScale = () => {
      const height = window.innerHeight;
      if (height < 750) {
        setScale(Math.max(height / 850, 0.65));
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // ------------ FORM SUBMIT WITH DUPLICATE CHECK ---------------
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Check if email already exists
    const emailExists = existingUsers.some((user) => user.email === email.trim());
    if (emailExists) {
      toast.error("This email is already registered!");
      return;
    }

    // Check if phone already exists
    const phoneExists = existingUsers.some((user) => user.phone === phone);
    if (phoneExists) {
      toast.error("This phone number is already registered!");
      return;
    }

    // Email must end with @gmail.com
    if (!email.trim().endsWith("@gmail.com")) {
      toast.error("Email must end with @gmail.com");
      return;
    }

    // Phone: exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    // Password: min 8 chars + at least 1 number
    if (password.length < 8 || !/\d/.test(password)) {
      toast.error("Password must be at least 8 characters and include a number");
      return;
    }

    // SUCCESS: Save user
    const newUser = { email: email.trim(), phone, password };
    existingUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

    toast.success("Account created successfully!");

    // Reset form
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: { fontSize: "15px" },
        }}
      />

      <img
        src={SignupSideBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-screen items-center justify-center p-4 sm:p-6">
    <div
  className="
    w-full max-w-[652px]
    rounded-[32px]
    border-[1.5px] border-white
    bg-white/55 backdrop-blur-xl
    shadow-[0_0_10px_0_#FFFFFF]
    flex flex-col items-center
    origin-center
    transition-all duration-300
    p-6 sm:p-8 md:p-10 lg:p-12
  "
  style={{ transform: `scale(${scale})` }}
>

 
          {/* Logo */}
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold leading-none bg-gradient-to-l from-[#3D1768] to-[#030303] bg-clip-text text-transparent trochut-font mb-4 sm:mb-6">
            Talenta
          </h1>

          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-medium text-[#333333] poppins-font">
              Create an account
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#3D1768] mt-2 poppins-font">
              Collaborate with us. Explore with us
            </p>
          </div>

          {/* ----------------- FORM ----------------- */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[556px] space-y-5 sm:space-y-6"
          >
            {/* Email */}
            <div className="w-full flex flex-col gap-1">
              <label className="text-sm font-medium text-black">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
               className=" w-full px-5 py-4 rounded-[12px] border border-black/80 {/* slightly transparent so focus ring doesn't hide it */} placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#3D1768]/40 text-base "
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm font-medium text-black">Phone</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setPhone(value);
                  }}
                  placeholder="Enter your phone number"
                  maxLength="10"
          className=" w-full px-5 py-4 rounded-[12px] border border-black/80 {/* slightly transparent so focus ring doesn't hide it */} placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#3D1768]/40 text-base "
                />
              </div>

              <p className="text-[13px] text-[#555] text-center leading-tight px-6 poppins-font">
                We strongly recommend adding a phone number. This will help verify your account and keep it safe.
              </p>
            </div>

            {/* Password */}
            <div className="relative w-full">
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-medium text-black">Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="flex items-center gap-1 text-sm text-black font-medium poppins-font"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 15.89 7.244 19 12 19c1.508 0 2.948-.27 4.273-.764M6.228 6.228A10.45 10.45 0 0112 5c4.756 0 8.774 3.11 10.066 7a10.462 10.462 0 01-4.084 5.288M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322c1.33-4.51 5.36-7.822 9.964-7.822 4.604 0 8.633 3.312 9.964 7.822-1.33 4.51-5.36 7.822-9.964 7.822-4.604 0-8.633-3.312-9.964-7.822z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
          className=" w-full px-5 py-4 rounded-[12px] border border-black/80 {/* slightly transparent so focus ring doesn't hide it */} placeholder-[#999999] focus:outline-none focus:ring-2 focus:ring-[#3D1768]/40 text-base "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                group relative overflow-hidden cursor-pointer
                w-full mt-8 py-4 rounded-full
                bg-gradient-to-r from-[#3D1768] to-[#8B3EFF]
                text-white font-semibold poppins-font text-lg
                shadow-xl hover:shadow-2xl transition
              "
            >
              <span className="absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-[1200ms] ease-out group-hover:translate-x-[120%]" />
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Sign Up
              </span>
            </button>

            <p className="text-[13px] text-center text-gray-700 leading-tight px-6 poppins-font">
              By creating an account, you agree to the{" "}
              <a href="#" className="underline">Terms of use</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>

            <p className="text-center text-[15px] font-medium poppins-font">
              Already have an account?{" "}
              <a href="/login" className="text-[#3D1768] underline font-semibold">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupAc;