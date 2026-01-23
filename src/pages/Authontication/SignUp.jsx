import React from "react";
import { useNavigate } from "react-router-dom";
import SignupSideBg from "../../assets/Auth/SignupSideBg.png";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen bg-[#D9D9D9]">

      {/* ================= LEFT IMAGE SIDE ================= */}
      <div className="relative hidden lg:flex w-1/2 flex-col">

        {/* Talenta on LEFT IMAGE */}
        <div className="absolute top-0 left-0 w-full px-6 py-4 z-20">
          <h1
            className="font-bold text-[38px]"
            style={{
              fontFamily: "Trochut, cursive",
              background:
                "linear-gradient(270deg, rgba(153,153,153,0.7) 22.62%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Talenta
          </h1>
        </div>

        <img
          src={SignupSideBg}
          alt="Signup Side Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="relative w-full lg:w-1/2 flex flex-col">

        {/* Login button on RIGHT */}
        <div className="w-full flex justify-end px-6 py-4">
          <button className="w-[139px] h-[44px] rounded-[30px] bg-gradient-to-r from-[#030303] to-[#51218F]">
            <span className="text-white font-semibold text-[16px]">
              Login
            </span>
          </button>
        </div>
{/* ===== MOBILE BACKGROUND IMAGE ===== */}
<div className="lg:hidden absolute inset-0 z-0 pointer-events-none group overflow-hidden">

  {/* Image layer */}
  <img
    src={SignupSideBg}
    className="
      w-full h-full object-cover
      transition-transform duration-700 ease-in-out
      group-hover:-translate-x-[8%]
    "
    alt="background"
  />

  {/* Dark base overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Right side white blur on hover */}
  <div
    className="
      absolute inset-y-0 right-0 w-[55%]
      bg-gradient-to-l from-white/80 via-white/50 to-transparent
      backdrop-blur-[10px]
      opacity-0
      transition-opacity duration-700 ease-in-out
      group-hover:opacity-100
    "
  />
</div>

{/* ================= MOBILE HEADER ================= */}
<div className="lg:hidden fixed top-0 left-0 w-full px-4 py-4 flex items-center justify-between z-30">

  {/* Left: Talenta */}
  <h1
    className="font-bold text-[26px]"
    style={{
      fontFamily: "Trochut, cursive",
      background:
        "linear-gradient(270deg, rgba(153,153,153,0.7) 22.62%, #FFFFFF 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Talenta
  </h1>

  {/* Right: Login Button */}
  <button className="w-[110px] h-[38px] rounded-[30px] bg-gradient-to-r from-[#030303] to-[#51218F]">
    <span className="text-white font-semibold text-[14px]">
      Login
    </span>
  </button>
</div>




        {/* Main content */}
        <div className="flex flex-1 items-center justify-center px-4 pb-24">

          <div className="relative w-[90%] max-w-[582px]">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(61,23,104,0.5)] to-[rgba(61,23,104,0.5)] blur-[35px] rounded-[20px]" />

            {/* Card */}
            <div className="relative z-10 p-[60px]">

              <div className="flex flex-col items-center gap-4 text-white">

                <h2 className="font-milonga text-center text-[22px] md:text-[48px] leading-tight" style={{"color":"#030303"}}>
                  Explore the world to<br />
                  experience the<br />
                  Collaboration
                </h2>

                <p className="text-center opacity-80">
                  Collaborate for Clarity. Design for Delight.<br />
                  Better Ideas, Together.
                </p>

                <div className="w-full space-y-4 mt-4">

                  <button className="w-full h-[56px] rounded-[40px] border border-[#51218F] bg-gradient-to-r from-[rgba(23,9,41,0.8)] to-[rgba(61,23,104,0.8)] flex items-center justify-center gap-4">
                    <img
                      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                      className="w-5"
                    />
                    Continue with Google
                  </button>

                  <button className="w-full h-[56px] rounded-[40px] border border-[#51218F] bg-gradient-to-r from-[rgba(23,9,41,0.8)] to-[rgba(61,23,104,0.8)] flex items-center justify-center gap-4">
                    <div className="w-5 h-5 bg-[#1877F2] rounded-full flex items-center justify-center">
                      f
                    </div>
                    Continue with Facebook
                  </button>

                  <button className="w-full h-[56px] rounded-[40px] border border-[#51218F] bg-gradient-to-r from-[rgba(23,9,41,0.8)] to-[rgba(61,23,104,0.8)] flex items-center justify-center gap-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                      className="w-5"
                    />
                    Continue with Apple
                  </button>

                </div>

                <div className="w-full flex items-center gap-4 my-4">
                  <span className="flex-1 h-px bg-white/30" />
                  <span className="text-sm">OR</span>
                  <span className="flex-1 h-px bg-white/30" />
                </div>

                <button
                  onClick={() => navigate("/create-account")}
                  className="w-full h-[56px] rounded-[40px] bg-gradient-to-r from-[#030303] via-[#2C114A] to-[#030303] font-semibold"
                >
                  Sign up with email
                </button>

                <p className="text-l text-center opacity-80 mt-4">
                  By signing up, you agree to the{" "}
                  <span className="text-[#3D1768]" style={{"text-decoration": "underline"}}>Terms of Service</span> and{" "}<br/>
                  <span className="text-[#3D1768]" style={{"text-decoration": "underline"}}>Privacy Policy, </span>
                  <span className="text-[#3D1768]">including</span>
                  <span className="text-[#3D1768]" style={{"text-decoration": "underline"}}>Cookie Use.</span>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
