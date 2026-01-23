import React, { useState } from "react";
import Header from "../../component/Header";
import { useNavigate } from "react-router-dom";

export default function Created() {
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

  const handleFiles = (fileList) => {
  const newFiles = Array.from(fileList);
  setFiles((prev) => [...prev, ...newFiles]);
};

const handleDrop = (e) => {
  e.preventDefault();
  handleFiles(e.dataTransfer.files);
};


  const [budgetType, setBudgetType] = useState("Hourly");
const [budget, setBudget] = useState({
  from: 0,
  to: 0,
});

 // State for Estimate Level section
  const [estimateLevel, setEstimateLevel] = useState("");
  

  // State for Estimate Time section
  const [estimateTime, setEstimateTime] = useState("");
  const [durationUnit, setDurationUnit] = useState("");

const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = currentSkill.trim();
      if (trimmed && !skills.includes(trimmed) && skills.length < 15) {
        setSkills([...skills, trimmed]);
        setCurrentSkill("");
      }
    }
  };

  const addSkill = (skill) => {
    if (!skills.includes(skill) && skills.length < 15) {
      setSkills([...skills, skill]);
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  return (
    <section className="w-full min-h-screen bg-white flex justify-center py-[100px] px-4">
       
      
        
        {/* CHILD CARD */}
         <div
        className="
          relative
          w-full
          max-w-[1163px]
          bg-white
          rounded-[10px]
          shadow-[0px_4px_45px_rgba(0,0,0,0.12)]
          p-6
          md:p-[40px]
          flex
          flex-col
          h-fit
        "
      >
        
        {/* 1. Header (Back Button) */}
       <div onClick={() => navigate("/home")} className="mb-6 font-['Montserrat'] font-medium text-[14px] leading-none tracking-normal  text-black flex items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className="w-4 h-4 mr-1 cursor-pointer"
    fill="none"
  >
    <path
      d="M9.5 3L4.5 8L9.5 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <span  className="cursor-pointer">Back</span>
</div>


        {/* 2. Top Divider (Horizontal) */}
        <div className="w-full h-[1px] bg-[rgba(0,0,0,0.1)] "></div>

        {/* --- MAIN CONTENT LAYOUT --- */}
        {/* Flex-col on mobile, Flex-row on Desktop to place Buttons on right */}
        <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-16">
          
          {/* --- LEFT SIDE CONTENT (Form) --- */}
          <div className="flex-1 flex flex-col gap-8">
            
            {/* Job Title Group */}
            <div className="flex flex-col gap-3 mt-6">
               <label className="font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal text-[#2A1E17]">
                Job title
              </label>
              <input
                type="text"
                placeholder="ex, need Web developer for figma"
                className="
                  w-full
                  h-[45px]
                  rounded-[10px]
                  !border !border-black/30
                  text-[#040200]
                  font-['Montserrat']
                  font-semibold
                  text-[16px]
                  px-4
                  outline-none
                  placeholder-gray-400
                "
              />
            </div>

            {/* Description Group */}
            <div className="flex flex-col gap-3">
              <label className="font-['Montserrat'] font-semibold text-[#2A1E17] text-[16px] leading-none tracking-normal">
                Describe about the project
              </label>
              <textarea
                placeholder="write here"
                className="
                  w-full
                  h-[287px]
                  rounded-[10px]
                  !border !border-black/30
                  p-4
                  resize-none
                  font-['Montserrat']
                  text-[16px]
                  outline-none
                  placeholder-gray-400
                "
              />
            </div>

            {/* Skills Group (Functional) */}
     <div className="flex flex-col gap-3">
  <label className="font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal text-[#2A1E17]">
    Skills
  </label>

  {/* Input Field + Added Skills inside */}
  <div
    className="
      w-full
      min-h-[45px]
      rounded-[10px]
      !border !border-black/30
      flex flex-wrap items-center
      gap-2
      px-3 py-1.5
      focus-within:border-black
      transition-colors
    "
  >
    {/* Added Skills shown inside input box */}
    {skills.map((skill, index) => (
      <span
        key={index}
        className="flex items-center gap-1 px-3 py-1 bg-[#51218F] text-white rounded-full text-[14px] font-['Montserrat'] font-medium"
      >
        {skill}
        <button
          type="button"
          onClick={() => removeSkill(skill)}
          className="hover:text-gray-200"
        >
          ×
        </button>
      </span>
    ))}

    {/* Text input stays inline; placeholder only when empty */}
    <input
      type="text"
      placeholder={skills.length === 0 ? "Add skills" : ""}
      value={currentSkill}
      onChange={(e) => setCurrentSkill(e.target.value)}
      onKeyDown={handleKeyDown}
      disabled={skills.length >= 15}
      className="
        flex-1
        min-w-[80px]
        bg-transparent
        outline-none
        font-['Montserrat'] font-semibold
        text-[16px] text-[#040200]
        placeholder-gray-400
        disabled:cursor-not-allowed
      "
    />
  </div>

  {/* Suggested Skills (unchanged below input) */}
  <div className="mt-3 flex flex-wrap gap-3">
    {["Web Design", "Mockup", "UI/UX", "Figma", "react", "Angular", "javascript"].map((s) => (
      <button
        key={s}
        onClick={() => addSkill(s)}
        disabled={skills.length >= 15}
        className="
          px-4 py-1
          rounded-full
          bg-[#C9B6E4]
          text-[#3D1768]
          text-[14px]
          font-['Montserrat'] font-medium
          hover:opacity-80
          transition-opacity
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {s}
      </button>
    ))}
  </div>

  <p className="text-right text-[16px] mt-2 font-['Montserrat'] font-regular text-gray-500">
    Add max 15 skills
  </p>
</div>



            <div 
              className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"
            ></div>

            {/* Estimate Time Section */}
            <div className="flex flex-col gap-4 ">
              <label className="font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal text-[#2A1E17]">
                Estimate your timeline here
              </label>

              {/* Radio Buttons */}
              <div className="flex flex-wrap gap-6 mb-2">
                {["Small", "Medium", "Large"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="estimateTime"
                      value={option}
                      checked={estimateTime === option}
                      onChange={(e) => setEstimateTime(e.target.value)}
                      className="hidden" // Hidden input, using custom div below
                    />
                    {/* Custom Radio Circle */}
                    <div className={`w-4 h-4 rounded-full !border flex items-center justify-center transition-all ${estimateTime === option ? '!border-[#51218F]' : '!border-gray-400'}`}>
                       {estimateTime === option && <div className="w-2.5 h-2.5 rounded-full bg-[#51218F]"></div>}
                    </div>
                    
                    <span className={`font-['Montserrat'] text-[14px] ${estimateTime === option ? 'font-bold text-black' : 'font-medium text-[#040200]'}`}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>

              {/* Dropdown Section */}
              <div className="flex flex-col gap-2">
                <label className="font-['Montserrat'] font-semibold text-[14px] text-[#2A1E17]">
                  How long your work take?
                </label>
                
                <div className="relative">
                  <select
                    value={durationUnit}
                    onChange={(e) => setDurationUnit(e.target.value)}
                    className="
                      w-full
                      sm:w-[322px]
                      h-[45px]
                      rounded-[10px]
                      !border !border-black/30
                      px-4
                      font-['Montserrat']
                      font-semibold
                      text-[16px]
                      text-[#040200]
                      outline-none
                      bg-white
                      appearance-none
                      cursor-pointer
                    "
                  >
                    <option value="" disabled>Select Duration</option>
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                    <option value="fixed">Fixed Project</option>
                  </select>
                  {/* Arrow Icon */}
                  <div className="absolute top-1/2 left-[290px] -translate-y-1/2 pointer-events-none hidden sm:block">
                     <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"
            ></div>


            <div className="flex flex-col gap-4">
              <label className="font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal text-[#2A1E17]">
                Expertise level you want
              </label>

              {/* Radio Buttons */}
              <div className="flex flex-wrap gap-6 mb-2">
                {["Fresher", "Medium", "Experienced"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="estimateLevel"
                      value={option}
                      checked={estimateLevel === option}
                      onChange={(e) => setEstimateLevel(e.target.value)}
                      className="hidden" // Hidden input, using custom div below
                    />
                    {/* Custom Radio Circle */}
                    <div className={`w-4 h-4 rounded-full !border flex items-center justify-center transition-all ${estimateLevel === option ? '!border-[#51218F]' : '!border-gray-400'}`}>
                       {estimateLevel === option && <div className="w-2.5 h-2.5 rounded-full bg-[#51218F]"></div>}
                    </div>
                    
                    <span className={`font-['Montserrat'] text-[14px] ${estimateLevel === option ? 'font-bold text-black' : 'font-medium text-[#040200]'}`}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              </div>

            <div 
              className="w-full h-[1px] bg-[rgba(0,0,0,0.1)]"
            ></div>

            {/* -------------------- BUDGET SECTION -------------------- */}
<div className="flex flex-col gap-6">

  {/* Title */}
  <label className="font-['Montserrat'] font-bold text-[16px] leading-none tracking-normal text-[#2A1E17]">
    Tell us about your budget?
  </label>

  {/* Budget Type Cards */}
 <div className="flex flex-wrap gap-6">
  {[
    { key: "Fixed", label: "Fixed price", icon: "tag" },
    { key: "Hourly", label: "Hourly", icon: "hourglass" },
  ].map((item) => (
    <label
      key={item.key}
      className={`
        relative
        w-[190px]
        h-[94px]
        rounded-[12px]
        !border
        cursor-pointer
        flex
        items-center
        justify-center
        gap-3
        transition-all
        ${
          budgetType === item.key
            ? "!border-[#51218F] text-[#51218F]"
            : "!border-gray-300 text-[#2A1E17]"
        }
      `}
    >
      <input
        type="radio"
        name="budgetType"
        value={item.key}
        checked={budgetType === item.key}
        onChange={() => setBudgetType(item.key)}
        className="hidden"
      />

      {/* Radio Indicator */}
      <div
        className={`
          absolute top-[10px]
          w-[18px] h-[18px] rounded-full
          !border flex items-center justify-center
          ${
            budgetType === item.key
              ? "!border-[#51218F]"
              : "!border-gray-400"
          }
        `}
      >
        {budgetType === item.key && (
          <div className="w-[10px] h-[10px] rounded-full bg-[#51218F]" />
        )}
      </div>

      {/* Icon */}
      {item.icon === "tag" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.59 13.41L11 3H3v8l9.59 9.59a2 2 0 0 0 2.82 0l5.18-5.18a2 2 0 0 0 0-2.82z" />
          <circle cx="7.5" cy="7.5" r="1.5" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2h12" />
          <path d="M6 22h12" />
          <path d="M6 2c0 6 6 6 6 10s-6 4-6 10" />
          <path d="M18 2c0 6-6 6-6 10s6 4 6 10" />
        </svg>
      )}

      <span className="font-['Montserrat'] font-bold text-[20px]">
        {item.label}
      </span>
    </label>
  ))}
</div>


  {/* Price Inputs */}
<div className="flex flex-wrap gap-10 mt-2">
  {["from", "to"].map((key) => (
    <div key={key} className="flex flex-col gap-2">
      {/* Label */}
      <label className="font-['Montserrat'] font-semibold text-[16px] text-[#2A1E17] capitalize">
        {key}
      </label>

      {/* Input + /hr wrapper */}
      <div className="flex items-center gap-2">
        {/* Input Box */}
        <div
          className={`
            flex items-center
            w-[165px]
            h-[45px]
            rounded-[10px]
            !border
            px-3
            ${
              budgetType === "Fixed" && key === "to"
                ? "opacity-50 pointer-events-none !border-gray-300"
                : "!border-gray-300"
            }
          `}
        >
          {/* Dollar */}
          <span className="text-[18px] font-bold text-black">$</span>

          {/* Number */}
          <input
            type="number"
            value={budget[key]}
            onChange={(e) =>
              setBudget({ ...budget, [key]: e.target.value })
            }
            className="
              w-full
              text-right
              text-[18px]
              font-bold
              outline-none
              bg-transparent
              pl-2 no-spinner
            "
          />
        </div>

        {/* /hr outside */}
        {budgetType === "Hourly" && (
          <span className="font-['Montserrat'] font-semibold text-[16px] text-gray-400">
            /hr
          </span>
        )}
      </div>
    </div>
  ))}
</div>

</div>
{/* -------------------- END BUDGET SECTION -------------------- */}

{/* -------------------- ATTACHMENTS SECTION -------------------- */}
<div className="flex flex-col gap-4">

  {/* Title */}
  <label className="font-['Montserrat'] font-semibold text-[16px] text-[#2A1E17]">
    Attachmenets
  </label>

  {/* Drag & Drop Box */}
  <div
    onDrop={handleDrop}
    onDragOver={(e) => e.preventDefault()}
    className="
      w-full
      max-w-[789px]
      h-[76px]
      rounded-[14px]
      !border
      !border-[#51218F]
      flex
      items-center
      justify-center
      cursor-pointer
      transition-colors
      hover:bg-purple-50/30
    "
  >
    <input
      type="file"
      multiple
      onChange={(e) => handleFiles(e.target.files)}
      className="hidden"
      id="fileUpload"
    />

    <label
      htmlFor="fileUpload"
      className="cursor-pointer font-['Montserrat'] text-[18px]"
    >
      Drag or{" "}
      <span className="text-[#51218F] font-semibold">
        upload project 
      </span>
      <span className="cursor-pointer font-['Montserrat'] text-[18px]">{" "}files</span>
    </label>
  </div>

  {/* Uploaded Files List (Optional but useful) */}
  {files.length > 0 && (
    <ul className="flex flex-col gap-2 mt-2">
      {files.map((file, index) => (
        <li
          key={index}
          className="text-[14px] font-['Montserrat'] text-gray-600"
        >
          • {file.name}
        </li>
      ))}
    </ul>
  )}
</div>
{/* -------------------- END ATTACHMENTS SECTION -------------------- */}

<div className="mt-6 flex gap-4">
  <button onClick={() => navigate("/job-created")} className="w-[190px] h-[39px] cursor-pointer rounded-[100px] bg-gradient-to-r from-[#51218F] to-black text-white font-['Montserrat'] font-bold text-[14px] shadow-md hover:opacity-90">
    Post job now
  </button>

  <button className="w-[190px] h-[39px] cursor-pointer rounded-[100px] !border !border-[rgba(38,50,56,1)] bg-white text-[rgba(38,50,56,1)] font-['Montserrat'] font-bold text-[14px] hover:bg-gray-50">
    Saved as draft
  </button>
</div>

          </div>


          {/* --- VERTICAL DIVIDER (Responsive) --- */}
          {/* Hidden on mobile, visible vertical line on Desktop */}
          <div className="hidden lg:block w-[1px] bg-[rgba(0,0,0,0.1)] min-h-[400px]"></div>
          
          {/* Mobile Divider (Horizontal) - Only shows on small screens */}
          <div className="block lg:hidden w-full h-[1px] bg-[rgba(0,0,0,0.1)] my-6"></div>

          {/* --- RIGHT SIDE BUTTONS --- */}
          <div className="flex flex-col gap-4 lg:pt-4 mt-2">
            {/* Post Job Button */}
            <button onClick={() => navigate("/job-created")} className="w-full sm:w-[190px] h-[39px] cursor-pointer rounded-[100px] bg-gradient-to-r from-[#51218F] to-black text-white font-['Montserrat'] font-bold text-[14px] shadow-md hover:opacity-90 transition-opacity">
              Post job now
            </button>

            {/* Save Draft Button */}
            <button className="w-full sm:w-[190px] h-[39px] cursor-pointer rounded-[100px] !border !border-[rgba(38,50,56,1)] bg-white text-[rgba(38,50,56,1)] font-['Montserrat'] font-bold text-[14px] hover:bg-gray-50 transition-colors">
              Saved as draft
            </button>
          </div>

        </div>

      </div>
      
    </section>
  );
}
