import React from "react";
import TopBanner from "../../assets/Colabwork/banner.png";
import UserImg from "../../assets/Colabwork/user.png";
import FlagImg from "../../assets/Colabwork/usa-flag1.png";
import Footer from "../../component/Footer";
import ColHeader from "../../component/ColHeader";

export default function UX() {
  return (
    <div className="w-full bg-[#F5F5F5] min-h-screen">

      {/* ======================= BANNER + HEADER ======================= */}
      <div className="relative w-full h-[420px] md:h-[520px] xl:h-[582px]">
        <img
          src={TopBanner}
          alt="banner"
          className="absolute inset-0 w-full h-full object-cover blur-[1px]"
        />

       <div className="absolute top-0 left-0 w-full z-50">
          <ColHeader />
        </div>
      </div>

{/* ======================= CENTER WRAPPER ======================= */}
<div className="min-h-screen flex justify-center px-4 sm:px-0">

  <div
    className="
      relative w-full
      max-w-[1200px]
      2xl:max-w-[1320px]

      mx-5 sm:mx-auto   /* 👈 stronger side gap like the image */

      -mt-[240px] lg:-mt-[300px]
      bg-white
      border border-black
      rounded-none
    "
  >


{/* ================= TOP BORDER ================= */}
<div className="hidden sm:block border-b border-gray-200 px-6 md:px-8 pt-4 pb-0">


            {/* BACK */}
            <button className="flex items-center  text-[16px] text-[#111111] mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#111111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Back</span>
            </button>

            <div className="h-[1px] bg-gray-200 w-full"></div>
          </div>

{/* ================= CONTENT ================= */}
<div className="flex flex-col lg:flex-row">

{/* ================= LEFT ================= */}
<div className="flex-1 px-4 md:px-8 py-3 sm:py-6">

  {/* TITLE + META ROW */}
  <div className="flex justify-between items-start sm:items-start mb-1 sm:mb-3">

    {/* LEFT TEXT */}
    <div>
      <h2
        className="
          text-[14px] sm:text-[20px]
          font-semibold
          leading-tight
          tracking-tight
          whitespace-nowrap
        "
      >
        Looking for a UX Web Designer
      </h2>

      {/* POSTED — MOBILE POSITION */}
      <p className="text-sm text-gray-500 mt-1 sm:hidden">
        Posted 3 hours ago
      </p>
    </div>

{/* RIGHT TEXT */}
<div className="mt-8 sm:mt-0">
  <div
    className="
      flex flex-col
      items-start sm:items-end
      text-left sm:text-right
      leading-tight
    "
  >
{/* PRICE */}
<p className="
  text-[12px] sm:text-[14px]
  font-semibold text-black
  whitespace-nowrap
  -ml-11 sm:ml-0
">
  $10.00 USD
</p>


  {/* BIDDING TEXT */}
<p className="
  text-[9px] sm:text-[10px]
  uppercase tracking-wide text-gray-500
  whitespace-nowrap
  -ml-11 sm:ml-0
  sm:mt-[2px]
">
  Bidding ends in 6 days
</p>

  </div>
</div>





  </div>

  {/* POSTED — DESKTOP POSITION (unchanged) */}
  <p className="hidden sm:block text-sm text-gray-500 mb-5">
    Posted 3 hours ago
  </p>


{/* DESCRIPTION */}
<p className="text-[14px] leading-[22px] text-gray-700 mt-4 sm:mt-9 mb-4">
  I need a website for a software development and services company.<br />
  The company is a new startup, so the focus is on what we offer to <br />
  provide, than what we did in the past.
</p>



              <p className="text-[14px] font-semibold mb-2">The key areas are -</p>

              <div className="text-[14px] text-gray-700 space-y-1 mb-4">
                <p>+ Digital Transformation work</p>
                <p>+ Platform modernization</p>
                <p>+ Maintenance and support</p>
                <p>+ Utility tool development</p>
                <p>+ Secure Data migration</p>
                <p>+ Round the clock support</p>
                <p>+ IT Consultancy</p>
              </div>

              <p className="text-[14px] text-gray-700 mb-6">
                Contents development is included in the job which should be finalized
                after review with me.
              </p>

              <div className="h-[1px] bg-gray-200 mb-4"></div>

             {/* SKILLS */}
<h3 className="font-semibold text-[14px] mb-4">Skills and Expertise</h3>

{/* MOBILE VERSION */}
<div className="flex gap-2 mb-6 flex-wrap sm:hidden">
  {["Web Design", "Mockup"].map((tag, i) => (
    <button
      key={i}
      type="button"
      className="
        px-4 py-1
        rounded-full
        bg-gray-100
        text-[12px]
        text-gray-600
      "
    >
      {tag}
    </button>
  ))}
</div>

{/* DESKTOP VERSION */}
<div className="hidden sm:flex gap-2 mb-6 flex-wrap">
  {["Web Design", "Mockup", "Web Design", "Mockup"].map((tag, i) => (
    <button
      key={i}
      type="button"
      className="
        px-4 py-1
        rounded-full
        bg-gray-100
        text-[12px]
        text-gray-600
        hover:bg-gray-200
        transition
        cursor-pointer
      "
    >
      {tag}
    </button>
  ))}
</div>


              <div className="h-[1px] bg-gray-200 mb-4"></div>


{/* MOBILE ONLY – PROPOSAL STATS */}
<div
  className="
    sm:hidden
    mb-5
    w-[403px]
    min-h-[97px]
    p-4
    text-[10px]
    leading-[14px]
    text-black
    grid grid-cols-2
    gap-3
  "
>
  {/* Row 1 */}
  <p className="-ml-4 sm:ml-0">
    <span className="font-semibold">Proposals:</span> 15 to 20
  </p>

  <p className="whitespace-nowrap -ml-22 sm:ml-0">
    <span className="font-semibold">Last viewed by client:</span> 3 minutes 
  </p>

  {/* Row 2 */}
   <p className="-ml-4 sm:ml-0">
    <span className="font-semibold">Interviewing:</span> 0
  </p>

    <p className="whitespace-nowrap -ml-22 sm:ml-0">
    <span className="font-semibold">Invites sent:</span> 0
  </p>

  {/* Row 3 */}
   <p className="-ml-4 sm:ml-0">        
    <span className="font-semibold">Unanswered invites:</span> 0
  </p>
</div>

{/* ACTIONS */}
<div className="sm:flex sm:gap-4 sm:items-center">

  {/* MOBILE ACTIONS */}
  <div className="sm:hidden flex flex-col gap-4">

    {/* PRIMARY BUTTON */}
    <button className="
      bg-[#5B2D91]
      text-white
      py-3
      w-full
      rounded-full
      text-[14px]
      font-semibold
    ">
      Change terms
    </button>

    {/* SECONDARY BUTTON */}
    <button className="
      w-full
      py-3
      text-[14px]
      font-semibold
      border
      border-gray-600
      rounded-full
      text-gray-800
    ">
      Revoke proposal
    </button>

    {/* INFO TEXT */}
    <div className="mt-4 text-[13px] text-gray-800 space-y-1">
      <p>Required Connects to submit a proposal: 6</p>
      <p>Available Connects: 50</p>
    </div>

  </div>

  {/* DESKTOP ACTIONS (UNCHANGED) */}
  <div className="hidden sm:flex gap-4">
    <button className="bg-[#5B2D91] text-white px-6 py-3 w-50 rounded-full text-[14px] font-semibold">
      change tems
    </button>

    <button className="text-[14px] !border rounded-xl w-50">
      withdraw proposal
    </button>
  </div>

</div>

<div className="hidden sm:block h-[1px] bg-gray-200 mt-15"></div>


{/* ================= START CONVERSATIONS (DESKTOP ONLY) ================= */}
<div className="hidden lg:block">
  <div className="mt-3 mb-6 ml-5 text-center text-black">
    <p className="font-medium">Start conversations</p>
  </div>

  <div className="w-full flex items-center gap-4 px-4 py-3 bg-white rounded-full">

    {/* IMAGE ICON */}
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="cursor-pointer">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>

    {/* GIF ICON */}
    <svg width="40" height="28" viewBox="0 0 40 28" fill="none"
      className="cursor-pointer">
      <rect x="1" y="1" width="38" height="26" rx="6"
        stroke="#7C3AED" strokeWidth="2" />
      <text x="9" y="19" fill="#7C3AED"
        fontSize="12" fontWeight="700"
        fontFamily="Arial, sans-serif">
        GIF
      </text>
    </svg>

    {/* INPUT */}
    <div className="relative flex-1 h-[48px]">
      <svg width="100%" height="48" viewBox="0 0 600 48"
        className="absolute inset-0" preserveAspectRatio="none">
        <rect x="0" y="0" width="600" height="48" rx="24" fill="#F3F4F6" />
      </svg>

      <input
        type="text"
        placeholder="Type here..."
        className="relative z-10 w-full h-[48px] bg-transparent
        pl-5 pr-4 text-[14px] text-gray-900
        placeholder:text-[#9CA3AF] focus:outline-none"
      />
    </div>

    {/* SEND */}
    <svg width="28" height="28" viewBox="0 0 24 24"
      fill="#7C3AED" className="cursor-pointer">
      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
    </svg>

  </div>
</div>
</div>
            

            {/* DIVIDER */}
<div className="hidden lg:block w-[1px] bg-gray-200"></div>


             {/* ================= RIGHT SIDEBAR ================= */}
<div className="w-full lg:w-[340px] px-6 lg:px-8 py-8">


{/* CONNECTS — DESKTOP ONLY */}
<p className="hidden lg:block text-[13px] text-[#2F3A40] leading-[24px] mb-6">
  Required Connects to submit a <br />
  proposal: <b>6</b><br />
  Available Connects: <b>50</b>
</p>

{/* DIVIDER 1 — DESKTOP ONLY */}
<div className="hidden lg:block h-[1px] bg-gray-200 mb-6 mr-10 w-77"></div>

{/* ABOUT CLIENT */}
<h3 className="text-[16px] sm:text-[18px] font-semibold mb-4">
  About the client
</h3>

{/* CONTENT GRID */}
{/* Mobile: 2 columns | Desktop: normal flow */}
<div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-0">

  {/* ================= LEFT COLUMN ================= */}
  <div className="order-1">

    {/* BASIC INFO */}
    <div className="space-y-3 text-[13px] sm:text-[14px] text-[#3A3A3A] mb-6">

      {/* LOCATION */}
      <div className="flex items-center gap-2">
        <img
          src={FlagImg}
          alt="USA"
          className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] object-cover rounded-full"
        />
        <span>Manhattan, USA</span>
      </div>

      {/* TIME */}
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#6B6B6B" strokeWidth="1.5" />
          <path d="M12 7V12L15 14" stroke="#6B6B6B" strokeWidth="1.5" />
        </svg>
        <span>It's currently 4:45 PM here</span>
      </div>

      {/* JOINED */}
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M6 21h12M9 17V5l3-2 3 2v12" stroke="#6B6B6B" strokeWidth="1.5" />
        </svg>
        <span>Joined September 1, 2013</span>
      </div>

    </div>

    {/* RATING – MOBILE POSITION */}
    <div className="sm:hidden mb-6">
      <div className="flex gap-[2px] text-purple-600 text-[16px]">
        ★★★★☆
      </div>
      <span className="text-[13px] text-[#6B6B6B]">
        4/5 (12 Reviews)
      </span>
    </div>

  </div>

  {/* ================= RIGHT COLUMN (STATS) ================= */}
  <div className="order-2 text-[13px] sm:text-[14px] text-[#3A3A3A] space-y-1.5 sm:space-y-3">

    <p className="font-semibold">Manhattan 7:03 pm</p>

    <p className="font-semibold">47 jobs posted</p>
    <p className="text-[#6B6B6B]">45% hire rate, 2 open jobs</p>

    <p className="font-semibold">$5k+ total spent</p>
    <p className="text-[#6B6B6B]">27 hires, 0 active</p>

    <p className="font-semibold">24.53/hr avg hourly rate paid</p>
    <p className="text-[#6B6B6B]">210 hours</p>

    <p className="font-semibold">Mid-sized company (10–99 people)</p>
    <p className="text-[#6B6B6B]">Member since Jan 22, 2020</p>

  </div>
</div>

{/* RATING – DESKTOP ONLY */}
<div className="hidden sm:block mb-6">
  <div className="flex gap-[2px] text-purple-600 text-[18px]">
    ★★★★☆
  </div>
  <span className="text-[14px] text-[#6B6B6B]">
    4/5 (12 Reviews)
  </span>
</div>

{/* DIVIDER – DESKTOP ONLY */}
<div className="hidden sm:block h-[1px] bg-gray-200 mb-6 w-full" />

{/* VERIFICATIONS */}
<div className="space-y-3 sm:space-y-4 text-[12px] sm:text-[14px] text-[#3A3A3A] -mt-25 sm:mt-0">

  <div className="flex items-center gap-2 sm:gap-3">
    <svg
      width="16"
      height="16"
      className="sm:w-[20px] sm:h-[20px]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2A2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7l.5 2.5a2 2 0 0 1-.6 1.8l-1.2 1.2a16 16 0 0 0 6.6 6.6l1.2-1.2a2 2 0 0 1 1.8-.6l2.5.5A2 2 0 0 1 22 16.9Z"
        stroke="#5B2D91"
        strokeWidth="1.5"
      />
    </svg>
    <span className="font-semibold">Phone Verified</span>
  </div>

  <div className="flex items-center gap-2 sm:gap-3">
    <svg
      width="16"
      height="16"
      className="sm:w-[20px] sm:h-[20px]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="#5B2D91"
        strokeWidth="1.5"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="#5B2D91"
        strokeWidth="1.5"
      />
    </svg>
    <span className="font-semibold">Email Verified</span>
  </div>

  <div className="flex items-center gap-2 sm:gap-3">
    <svg
      width="16"
      height="16"
      className="sm:w-[20px] sm:h-[20px]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
        stroke="#5B2D91"
        strokeWidth="1.5"
      />
    </svg>
    <span className="font-semibold">Facebook Verified</span>
  </div>

</div>

</div>

{/* MOBILE DIVIDER – AFTER VERIFICATIONS */}
<div className="block sm:hidden h-[1px] bg-gray-200 my-4 w-full" />


{/* ================= START CONVERSATIONS (MOBILE ONLY) ================= */}
<div className="lg:hidden border-t border-gray-200 px-4 py-5">

  <p className="text-center text-[14px] font-medium text-black mb-3">
    Start conversations
  </p>

  <div className="w-full flex items-center gap-3">

    {/* IMAGE ICON */}
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="cursor-pointer shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>

    {/* GIF ICON */}
    <svg width="36" height="26" viewBox="0 0 40 28" fill="none"
      className="cursor-pointer shrink-0">
      <rect x="1" y="1" width="38" height="26" rx="6"
        stroke="#7C3AED" strokeWidth="2" />
      <text x="9" y="19" fill="#7C3AED"
        fontSize="12" fontWeight="700"
        fontFamily="Arial, sans-serif">
        GIF
      </text>
    </svg>

    {/* INPUT */}
    <div className="relative flex-1 h-[44px]">
      <svg width="100%" height="44" viewBox="0 0 600 44"
        className="absolute inset-0" preserveAspectRatio="none">
        <rect x="0" y="0" width="600" height="44" rx="22" fill="#F3F4F6" />
      </svg>

      <input
        type="text"
        placeholder="Type here..."
        className="relative z-10 w-full h-[44px]
        bg-transparent pl-4 pr-3 text-[14px]
        text-gray-900 placeholder:text-[#9CA3AF]
        focus:outline-none"
      />
    </div>

    {/* SEND */}
    <svg width="26" height="26" viewBox="0 0 24 24"
      fill="#7C3AED" className="cursor-pointer shrink-0">
      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
    </svg>

  </div>
</div>

          </div>
        </div>
      </div>
     <div className="-mx-4 mt-4">
       <Footer />
     </div>
    </div>
  );
}
