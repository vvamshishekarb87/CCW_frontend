import { useState } from "react";
import SignupSideBg from "../../assets/Auth/SignupSideBg.png";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.endsWith("@gmail.com")) {
      setEmailError("Email must be a Gmail address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const regex = /^(?=.*\d).{8,}$/;
    if (!regex.test(value)) {
      setPasswordError("must be at least 8 characters and include a number");
    } else {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 🔥 Updated Login Button Function
  const handleLogin = async () => {
    // Clear previous errors
    setEmailError("");
    setPasswordError("");

    // Validation
    if (!email) {
      toast.error("Email is required!");
      return;
    }
    
    if (!email.endsWith("@gmail.com")) {
      setEmailError("Email must be a Gmail address");
      toast.error("Email must be a Gmail address");
      return;
    }
    
    if (emailError) {
      toast.error(emailError);
      return;
    }
    
    if (!password) {
      toast.error("Password is required!");
      return;
    }
    
    const regex = /^(?=.*\d).{8,}$/;
    if (!regex.test(password)) {
      setPasswordError("must be at least 8 characters and include a number");
      toast.error("Password must be at least 8 characters and include a number");
      return;
    }
    
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    setIsLoading(true);

    try {
      // Sample credentials
      const sampleEmail = "sample@gmail.com";
      const samplePassword = "12345678"; // Must be at least 8 chars with a number

      if (email === sampleEmail && password === samplePassword) {
        // Generate fake token and user data
        const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNhbXBsZSBVc2VyIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        const fakeUserId = "12345";
        const fakeUserName = "Sample User";
        const fakeUserEmail = "sample@gmail.com";

        // Store in localStorage (or your preferred storage)
        localStorage.setItem("token", fakeToken);
        localStorage.setItem("user_id", fakeUserId);
        localStorage.setItem("user_name", fakeUserName);
        localStorage.setItem("user_email", fakeUserEmail);
        localStorage.setItem("isLoggedIn", "true");

        // Success toast
        toast.success("Login Successful! 🎉");
        
        // Simulate API delay
        setTimeout(() => {
          // Redirect to RoleSection page
          navigate("/role-section");
        }, 1000);
        
      } else {
        toast.error("Invalid email or password. Try using sample@gmail.com / 12345678");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Pre-fill sample credentials for testing (optional)
  const fillSampleCredentials = () => {
    setEmail("sample@gmail.com");
    setPassword("12345678");
    setEmailError("");
    setPasswordError("");
    toast.success("Sample credentials filled!");
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <img
        src={SignupSideBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-80%"
      />

      <div className="relative w-screen h-screen flex justify-center items-center p-4 sm:p-6 md:p-8">
        <div className="relative w-full max-w-[652px] min-h-[579px] rounded-[32px] border border-white bg-white/70 shadow-[0_0_10px_0_#FFFFFF] flex flex-col items-center justify-center p-6 sm:p-8">

         {/* 🔙 BACK BUTTON */}
          <div
            className="absolute top-4 left-4 sm:top-6 sm:left-6 cursor-pointer z-10"
            onClick={() => navigate("/")}
          >
            <div
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full hover:scale-105 active:scale-95 transition"
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
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
          </div>

          <div className="w-full max-w-[556px] flex flex-col gap-3">

            {/* Logo */}
            <div className="w-full flex items-center justify-center">
              <h1
                className="text-[32px] sm:text-[36px] md:text-[38px] font-[700] trochut-font leading-[100%] text-center 
                 bg-gradient-to-l from-[#3D1768] to-[#030303] bg-clip-text text-transparent"
              >
                Talenta
              </h1>
            </div>

            <div className="w-full flex flex-col items-center">
              {/* Welcome */}
              <div className="w-full max-w-[460px] text-center space-y-2">
                <h2 className="text-[26px] sm:text-[30px] md:text-[32px] font-[500] poppins-font text-[#333333]">
                  Welcome back
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400] poppins-font text-[#3D1768]">
                  Collabrate with us. Explore with us
                </p>
                
                {/* Sample Credentials Info */}
                {/* <div className="mt-2 p-2 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-[12px] sm:text-[13px] poppins-font text-[#3D1768]">
                    Use: <span className="font-medium">sample@gmail.com</span> / 
                    <span className="font-medium"> 12345678</span>
                  </p>
                  <button
                    onClick={fillSampleCredentials}
                    className="mt-1 text-xs text-purple-600 hover:text-purple-800 underline"
                  >
                    Click to auto-fill
                  </button>
                </div> */}
              </div>

              {/* Email */}
              <div className="w-full mt-4 sm:mt-6">
                <p className="text-[15px] sm:text-[16px] font-[400] poppins-font text-[#000000] mb-2">
                  Email
                </p>
                <div
                  className="w-full h-[52px] sm:h-[56px] rounded-[12px] flex items-center px-4"
                  style={{ background: "#51218F4D" }}
                >
                  <input
                    type="text"
                    placeholder="Enter your email (must be @gmail.com)"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full bg-transparent outline-none text-[15px] sm:text-[16px] font-[Poppins] text-[#000000] placeholder:text-[#00000080]"
                  />
                </div>
                {emailError && (
                  <p className="text-[13px] sm:text-[14px] text-red-500 mt-1">
                    {emailError}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="w-full mt-4 sm:mt-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[15px] sm:text-[16px] font-[400] poppins-font text-[#030303]">
                    Password
                  </p>

                  {/* Show / Hide Toggle */}
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {showPassword ? (
                        // 👁️ Eye Open Icon
                        <>
                          <path
                            d="M12 4.5C6 4.5 2 12 2 12s4 7.5 10 7.5 10-7.5 10-7.5-4-7.5-10-7.5Z"
                            stroke="#030303"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="#030303"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </>
                      ) : (
                        // 👁️ Eye Off Icon
                        <>
                          <path
                            d="M17.94 17.94C16.176 19.037 14.145 19.5 12 19.5 6 19.5 2 12 2 12c1.133-1.533 2.53-2.854 4.13-3.94M9.88 4.06A9.96 9.96 0 0 1 12 3.5c6 0 10 7.5 10 7.5a13.9 13.9 0 0 1-1.49 2.41M1 1l22 22"
                            stroke="#030303"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </>
                      )}
                    </svg>

                    <span className="text-[15px] sm:text-[18px] font-[400] poppins-font text-[#030303]">
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  </div>
                </div>

                <div
                  className="w-full h-[52px] sm:h-[56px] rounded-[12px] flex items-center px-4"
                  style={{ background: "#51218F4D" }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password (min 8 chars with number)"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full bg-transparent outline-none text-[15px] sm:text-[16px] poppins-font text-[#030303] placeholder:text-[#03030380]"
                  />
                </div>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-[13px] sm:text-[14px] text-red-500 min-h-[18px]">
                    {passwordError}
                  </p>
                  <Link
                    to="/forgot-password"
                    className="text-[14px] sm:text-[16px] poppins-font text-[#3D1768] cursor-pointer"
                  >
                    Forget password?
                  </Link>
                </div>
              </div>

              {/* LOGIN BUTTON WITH TOAST */}
              <button
                onClick={handleLogin}
                disabled={isLoading}
                className={`
                  group relative overflow-hidden
                  w-full max-w-[549px] h-[52px] sm:h-[56px]
                  rounded-[40px]
                  text-white poppins-font text-[16px] font-medium
                  mt-8 sm:mt-10
                  bg-gradient-to-r from-[#3D1768] to-[#030303]
                  hover:opacity-90 transition
                  ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {/* Loading Spinner */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Shine */}
                <span
                  className={`
                    absolute inset-0 
                    translate-x-[-100%]
                    bg-gradient-to-r from-transparent via-white/25 to-transparent
                    skew-x-12
                    transition-transform duration-1000 ease-out
                    ${!isLoading && 'group-hover:translate-x-[100%]'}
                  `}
                />

                {/* Glow */}
                <span
                  className={`
                    absolute inset-0 rounded-[40px]
                    bg-white/10 scale-125 opacity-0
                    ${!isLoading && 'group-hover:opacity-100'}
                    transition-opacity duration-500
                  `}
                />

                <span className={`relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </span>
              </button>

              {/* Sign up link */}
              <div className="mt-4 text-center">
                <p className="text-[14px] sm:text-[16px] poppins-font text-[#030303]">
                  Don't have an account?{" "}
                  <Link to="/signupac" className="text-[#3D1768] font-medium hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;