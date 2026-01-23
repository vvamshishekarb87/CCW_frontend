import React from "react";
import rolesectionBgLeft from "../../assets/Landing/rolesectionBgLeft.jpg";
import digitalGrraphicDesigne from "../../assets/Landing/digitalGraphicDesigner.jpg";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";


function RoleSelection() {
  const navigate = useNavigate();

  return (
     <div>
    <section className="relative mx-auto w-full max-w-[1440px] min-h-[2093px] bg-white overflow-hidden">
      {/* ================= HEADER ================= */}
      {/* Width: 1281, Height: 64, Top: 24, Radius: 90, Blur: 8px */}
      <header
        className="absolute top-[24px] left-1/2 -translate-x-1/2 w-[90%] md:w-[1281px] h-[64px] rounded-[90px] flex items-center justify-between px-8 z-50 backdrop-blur-[8px] border border-white/20"
        style={{ background: "rgba(255, 255, 255, 0.01)" }} // subtle fill for blur to work
      >
        {/* Talenta Logo */}
        <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-none"
              style={{
                fontFamily: "Trochut, cursive",
                background: "linear-gradient(270deg, #51218F 22.62%, #030303 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Talenta
            </h1>

        <div className="h-[44px] flex items-center gap-[30px]">
          <select
            className="border-none outline-none focus:outline-none focus:ring-0
              bg-transparent text-[16px] font-[Poppins] font-normal leading-none text-[#3D1768]
            "
            defaultValue="en-us"
          >
            <option value="en-us">
              English (United States)
            </option>
            <option value="en-uk">
              English (United Kingdom)
            </option>
          </select>

          <button className="w-[149px] h-[44px] flex items-center justify-center gap-[10px] py-[10px] px-[30px] rounded-[30px] bg-gradient-to-r from-[#030303] to-[#51218F]">
            <span className="text-white font-[Poppins] font-semibold text-[16px] leading-none">
              Login
            </span>
          </button>
        </div>
      </header>

      {/* ================= MAIN HEADING ================= */}
      {/* Width: 1085, Height: 122, Top: 121, Font: milonga-regular 48px */}
      <div className="absolute top-[121px] left-1/2 -translate-x-1/2 w-full max-w-[1085px] h-auto md:h-[122px] flex flex-col items-center justify-center z-40 text-center px-4">
        <h2
          className="milonga-regular font-normal text-[32px] md:text-[48px] leading-[1.2] md:leading-[60px] text-[rgba(61,23,104,1)]"
        >
          Select how you wants to join
          <br />
         
            Choose the role that best matches your journey
         
        </h2>
      </div>

      {/* ================= IMAGES SECTION ================= */}
      {/* Top: 282.93px. Left/Right images side-by-side with NO gap. */}
      <div className="absolute top-[283px] left-0 w-full flex flex-col md:flex-row items-start justify-center">
        {/* LEFT IMAGE CONTAINER */}
        <div className="relative w-full md:w-[720px] h-[500px] md:h-[892.55px] overflow-hidden group">
          <img
            src={rolesectionBgLeft}
            alt="Creator"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />

          {/* Overlay Content Box */}
          <div className="absolute top-0 left-0 right-0 flex justify-center px-4  bg-[linear-gradient(180deg,rgba(81,33,143,0.9)_0%,rgba(187,187,187,0)_100%)]">
            <div className="inline-block  px-6 py-4">
              <p className="milonga-regular font-normal text-[20px] md:text-[34px] leading-tight md:leading-[45px] text-center text-[rgba(255,255,255,1)]">
                Start collaborations, build projects,
                <br />
                and bring your ideas to life.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full flex justify-center">
   <button
  onClick={() => navigate("/creator-role-profile")}
  className="w-[300px] md:w-[460px] h-[50px] md:h-[65px] 
  rounded-[40px] opacity-100 text-white font-[Poppins] 
  text-[20px] shadow-lg hover:scale-[1.02] transition-all"
  style={{
    background:
      "radial-gradient(50% 50% at 50% 50%, #170929 56.74%, #51218F 100%)",
  }}
>
  Join as a creator
</button>


          </div>
        </div>

        {/* RIGHT IMAGE CONTAINER */}
        <div className="relative w-full md:w-[720px] h-[500px] md:h-[892.55px] overflow-hidden group">
          <img
            src={digitalGrraphicDesigne}
            alt="Collaborator"
            className="absolute inset-0 w-full h-full object-cover object-right"
          />

          {/* Overlay Content Box */}
          <div className="absolute top-0 left-0 right-0 flex justify-center px-4 bg-[linear-gradient(180deg,rgba(81,33,143,0.9)_0%,rgba(187,187,187,0)_100%)]">
            <div className="inline-block px-6 py-4">
              <p className="milonga-regular font-normal text-[20px] md:text-[34px] leading-tight md:leading-[45px] text-center text-[rgba(255,255,255,1)]">
                Collaborate on creative project and
                <br />
                get recognized your skills
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <button onClick={() => navigate("/collaborator-role-profile")}
              className="w-[300px] md:w-[460px] h-[50px] md:h-[65px] rounded-[40px] opacity-100 text-white font-[Poppins] text-[20px] shadow-lg"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, #170929 56.74%, #51218F 100%)",
              }}
            >
              Join as a collaborator
            </button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM DESCRIPTION SECTION ================= */}
      {/* Starts below images around Top: 1182px */}

      {/* Center Divider: W: 42, H: 779, Top: 1182, Left: 699 */}
      <div className="hidden md:block absolute top-[1182px] left-[654px] w-[42px] h-[779px] rounded-full bg-[rgba(61,23,104,1)] backdrop-blur-[60px] z-10 opacity-100 blur-[20px]"></div>

      <div className="absolute top-[1200px] md:top-[1200px] left-0 w-full flex flex-col md:flex-row items-start justify-center">
        {/* Left Side Content */}
        <div className="w-full md:w-[50%] px-4 md:px-0 flex flex-col items-center">
          <h3 className="w-[90%] max-w-[480px] miltonian-tattoo-regular font-normal text-[24px] md:text-[30px] leading-[40px] text-center text-black">
            Creators start and manage
            <br />
            collaboration projects.
          </h3>

          <ul className="mt-6 list-disc font-['Milonga'] font-normal text-[18px] md:text-[30px] leading-[40px] md:leading-[60px] text-black">
            <li>Start new creative projects</li>
            <li>Find & invite collaborators</li>
            <li>Assign tasks and set deadlines</li>
            <li>Upload and manage project files</li>
            <li>Track revenue split and payouts</li>
            <li>Hire freelancers from the marketplace</li>
          </ul>

          <div className="mt-6 w-[520px] h-[90px]">
            <p className="miltonian-tattoo-regular text-[30px] font-bold leading-[45px] text-black">
              One-line summary
            </p>
            <p className="milonga-regular font-normal text-[30px] leading-[45px] text-black ">
              Creators lead the project and manage the collaboration
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-[50%] left-[832px] px-4 md:px-0 flex flex-col items-center mt-8 md:mt-0">
          <h3 className="w-[90%] max-w-[500px] miltonian-tattoo-regular font-normal text-[24px] md:text-[30px] leading-[40px] text-center text-black">
            Collaborators join and contribute
            <br />
            to creator projects.
          </h3>

          <ul className="mt-6 list-disc ml-[44px] font-milonga-regular font-normal text-[18px] md:text-[30px] leading-[40px] md:leading-[60px] text-black">
            <li>Apply for creator-led projects</li>
            <li>Work on assigned tasks</li>
            <li>Upload deliverables & revisions</li>
            <li>Get paid through revenue share</li>
            <li>Showcase their skills & grow their profile</li>
            <li>Offer services via the marketplace</li>
          </ul>

          <div className="mt-6 w-[490px] h-[90px] ml-[4px]">
            <p className="miltonian-tattoo-regular text-[30px] font-bold leading-[45px] text-black">
              One-line summary
            </p>
            <p className="milonga-regular font-normal text-[30px] leading-[45px] text-black ">
              Collaborators support the project with their skills
            </p>
          </div>
        </div>
      </div>
     
    </section>

   
          <Footer />
    </div>
  );
}

export default RoleSelection;
